/**
 * 이미지 WebP 변환 스크립트
 * 
 * 용도: PNG/JPG 이미지를 WebP 포맷으로 일괄 변환
 * 
 * 실행: node scripts/optimize-images.js
 * 
 * 기능:
 * - 4개 이미지 디렉토리 자동 스캔
 * - PNG/JPG → WebP 변환 (quality: 85%)
 * - 중복 변환 방지 (이미 WebP 존재 시 스킵)
 * - 압축률 통계 출력
 * 
 * 주의: 이 스크립트는 WebP 파일만 생성합니다.
 *       Vue 컴포넌트에서 <picture> 태그로 적용해야 합니다.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 이미지 디렉토리 경로
const imageDirs = [
  'src/assets/images/stacks',
  'src/assets/images/architecture',
  'src/assets/images/experience',
  'src/assets/images/community'
];

async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(ext, '.webp');
  
  try {
    await sharp(imagePath)
      .webp({ quality: 85 })
      .toFile(webpPath);
    return true;
  } catch (error) {
    console.error(`   ❌ 변환 실패: ${path.basename(imagePath)} - ${error.message}`);
    return false;
  }
}

async function optimizeImages() {
  console.log('🚀 이미지 WebP 변환 시작...\n');
  
  let totalConverted = 0;
  let totalSize = 0;
  let convertedSize = 0;

  for (const dir of imageDirs) {
    const dirPath = path.join(__dirname, '..', dir);
    
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️  디렉토리가 없습니다: ${dir}`);
      continue;
    }

    console.log(`📁 처리 중: ${dir}`);
    
    const files = fs.readdirSync(dirPath)
      .filter(file => /\.(png|jpg|jpeg)$/i.test(file));
    
    let dirConverted = 0;
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      // WebP 파일이 이미 존재하면 건너뛰기
      if (fs.existsSync(webpPath)) {
        console.log(`   ⏭️  이미 존재: ${file}`);
        continue;
      }
      
      const originalSize = fs.statSync(filePath).size;
      
      if (await convertToWebP(filePath)) {
        dirConverted++;
        totalConverted++;
        
        const webpSize = fs.statSync(webpPath).size;
        const saved = originalSize - webpSize;
        const savedPercent = ((saved / originalSize) * 100).toFixed(1);
        
        totalSize += originalSize;
        convertedSize += webpSize;
        
        console.log(`   ✅ ${file} → ${path.basename(webpPath)} (${savedPercent}% 감소)`);
      }
    }
    
    console.log(`   📊 ${dirConverted}개 파일 변환 완료\n`);
  }

  const totalSaved = totalSize - convertedSize;
  const totalSavedPercent = totalSize > 0 ? ((totalSaved / totalSize) * 100).toFixed(1) : 0;
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
  const convertedSizeMB = (convertedSize / 1024 / 1024).toFixed(2);
  const savedMB = (totalSaved / 1024 / 1024).toFixed(2);

  console.log('\n✨ 이미지 최적화 완료!');
  console.log('\n📊 결과 요약:');
  console.log(`- 변환된 파일: ${totalConverted}개`);
  console.log(`- 원본 크기: ${totalSizeMB}MB`);
  console.log(`- WebP 크기: ${convertedSizeMB}MB`);
  console.log(`- 절감 용량: ${savedMB}MB (${totalSavedPercent}% 감소)`);
  console.log('\n💡 다음 단계:');
  console.log('1. Vue 컴포넌트에서 <picture> 태그 사용');
  console.log('2. WebP 지원 브라우저는 WebP, 미지원은 원본 사용');
  console.log('\n예시:');
  console.log('<picture>');
  console.log('  <source srcset="image.webp" type="image/webp">');
  console.log('  <img src="image.png" alt="..." loading="lazy">');
  console.log('</picture>');
}

// 실행
(async () => {
  try {
    await optimizeImages();
  } catch (error) {
    console.error('❌ 에러 발생:', error.message);
    process.exit(1);
  }
})();
