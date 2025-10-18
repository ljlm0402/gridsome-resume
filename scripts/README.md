# 📦 Scripts

이 디렉토리는 프로젝트 유지보수 및 최적화를 위한 유틸리티 스크립트를 포함합니다.

## 🖼️ optimize-images.js

### 용도
PNG/JPG 이미지를 WebP 포맷으로 일괄 변환하는 스크립트입니다.

### 사용 시점
- ✅ **새로운 이미지 추가 시** (기술 스택, 프로젝트 이미지 등)
- ✅ **이미지 최적화가 필요할 때**
- ✅ **WebP 파일이 없는 이미지 발견 시**

### 실행 방법
```bash
node scripts/optimize-images.js
```

### 작동 방식
1. 4개 디렉토리 스캔:
   - `src/assets/images/stacks/`
   - `src/assets/images/architecture/`
   - `src/assets/images/experience/`
   - `src/assets/images/community/`

2. PNG/JPG 파일 찾기

3. WebP 변환 (quality: 85%)
   - 이미 WebP 파일이 있으면 스킵
   - 변환 통계 출력 (절감 용량, 압축률)

4. 원본 파일 유지 (폴백용)

### 최적화 결과
- **변환된 파일**: 31개
- **원본 크기**: 2.40MB
- **WebP 크기**: 0.54MB
- **절감률**: 77.3% (1.85MB 절감)

### 의존성
- `sharp`: 고성능 이미지 처리 라이브러리

### 주의사항
⚠️ **이 스크립트는 이미지 파일만 생성합니다.**  
Vue 컴포넌트에서 `<picture>` 태그를 사용하여 WebP를 적용해야 합니다:

```vue
<picture>
  <source srcset="@/assets/images/stacks/typescript.webp" type="image/webp">
  <img src="@/assets/images/stacks/typescript.png" alt="TypeScript" loading="lazy" />
</picture>
```

### 향후 개선 아이디어
- [ ] AVIF 포맷 지원 추가
- [ ] 품질 설정을 CLI 인자로 받기
- [ ] 특정 디렉토리만 선택적으로 변환
- [ ] 변환 후 자동 git add

---

## 📊 성능 최적화 체크리스트

### ✅ 완료됨
- [x] WebP 이미지 변환 (31개 파일)
- [x] Picture 태그 적용 (28개 컴포넌트 이미지)
- [x] Lazy Loading (49+ 이미지)
- [x] Code Splitting (vendor/common)
- [x] Google Fonts 최적화
- [x] SEO 메타 태그

### 📋 향후 고려사항
- [ ] PurgeCSS (PostCSS 7 호환 버전)
- [ ] Critical CSS 인라인
- [ ] Service Worker (PWA)
- [ ] AVIF 이미지 포맷
