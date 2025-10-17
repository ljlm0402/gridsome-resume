# ✨ Modern Glassmorphism Portfolio

> 최신 디자인 트렌드를 반영한 트렌디한 개발자 포트폴리오

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![Gridsome](https://img.shields.io/badge/Gridsome-0.7.23-00A672)](https://gridsome.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🎨 Design Features

### Glassmorphism (리퀴드 글래스) 효과
- 🌊 반투명 유리 효과로 현대적인 디자인
- ✨ 부드러운 그라데이션과 블러 효과
- 🎬 자연스러운 애니메이션과 인터랙션
- 💫 동적인 파티클 배경

### Modern UI/UX
- **Interactive Cards**: 호버 시 3D 변환 효과
- **Smooth Animations**: GPU 가속 애니메이션
- **Gradient Background**: 자동으로 변화하는 그라데이션
- **Glass Navigation**: 모던한 사이드바 네비게이션
- **Emoji Icons**: 직관적인 이모지 아이콘 시스템

## 🚀 Live Demo

**Production**: [https://kyungmin-resume.surge.sh](https://kyungmin-resume.surge.sh)

## 🛠 Tech Stack

### Core
- **Gridsome** - Vue.js & GraphQL 기반 정적 사이트 생성기
- **Vue.js 2.7** - 반응형 프론트엔드 프레임워크
- **Bootstrap 4** - 반응형 레이아웃
- **Sass (Dart Sass)** - 모던 CSS 전처리기

### Styling
- **Glassmorphism** - backdrop-filter, blur effects
- **CSS Animations** - keyframes, transitions
- **Gradient Mesh** - 다층 그라데이션 효과
- **Flexbox & Grid** - 현대적 레이아웃

### Tools & Utilities
- **Font Awesome** - 아이콘 라이브러리
- **Google Analytics** - 사용자 분석
- **Sitemap Generator** - SEO 최적화

## 📦 Installation

### Prerequisites
```bash
# Node.js 20+ (LTS) 필수
node --version  # v20.x.x 이상

# Gridsome CLI 설치
npm install --global @gridsome/cli
```

### Quick Start
```bash
# 1. 저장소 클론
git clone https://github.com/ljlm0402/gridsome-resume.git
cd gridsome-resume

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
# → http://localhost:8080
```

### Build & Deploy
```bash
# 프로덕션 빌드
npm run build

# 빌드 결과물: dist/ 폴더
npm run serve  # 로컬에서 프로덕션 빌드 테스트
```

## 🎯 Key Features

### 📱 완벽한 반응형
- ✅ Mobile First 디자인
- ✅ 태블릿 최적화
- ✅ 데스크톱 레이아웃
- ✅ 고해상도 디스플레이 지원

### ⚡ 성능 최적화
- ✅ Static Site Generation (SSG)
- ✅ Code Splitting
- ✅ Lazy Loading
- ✅ GPU 가속 애니메이션
- ✅ 최적화된 이미지

### 🎨 현대적 디자인
- ✅ 2025년 디자인 트렌드 반영
- ✅ Glassmorphism 효과
- ✅ 부드러운 마이크로 인터랙션
- ✅ 고급스러운 타이포그래피
- ✅ 다크 모드 준비 (향후 지원)

## 📂 Project Structure

```
gridsome-resume/
├── src/
│   ├── assets/
│   │   ├── images/          # 이미지 리소스
│   │   └── styles/          # SCSS 스타일
│   │       ├── _variables.scss   # 디자인 토큰
│   │       ├── _global.scss      # 글로벌 스타일
│   │       └── main.scss         # 메인 스타일시트
│   ├── components/          # Vue 컴포넌트
│   │   ├── About.vue        # 인트로 섹션 (Glassmorphism)
│   │   ├── Nav.vue          # 네비게이션 (Glass Effect)
│   │   ├── Skills.vue       # 스킬 섹션
│   │   ├── Experience.vue   # 경력 사항
│   │   ├── Project.vue      # 프로젝트
│   │   └── Community.vue    # 커뮤니티 활동
│   ├── layouts/
│   │   └── Default.vue      # 기본 레이아웃
│   ├── pages/
│   │   ├── Index.vue        # 메인 페이지
│   │   └── 404.vue          # 404 페이지
│   └── main.js              # 엔트리 포인트
├── static/                  # 정적 파일
├── gridsome.config.js       # Gridsome 설정
├── package.json
└── README.md
```

## 🎨 Customization

### 색상 변경
```scss
// src/assets/styles/_variables.scss
$blue: #667eea;      // 메인 색상
$purple: #9333ea;    // 액센트 색상
$pink: #ec4899;      // 포인트 색상
```

### 콘텐츠 수정
각 섹션은 독립된 Vue 컴포넌트로 구성되어 있습니다:
- `src/components/About.vue` - 자기소개
- `src/components/Skills.vue` - 기술 스택
- `src/components/Experience.vue` - 경력
- `src/components/Project.vue` - 프로젝트
- `src/components/Community.vue` - 활동

## 🚀 Deployment

### Surge.sh (추천)
```bash
# Surge CLI 설치
npm install --global surge

# 빌드
npm run build

# 배포
surge dist/

# 커스텀 도메인 배포
surge dist/ your-domain.surge.sh
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

### Vercel
```bash
# Build command
npm run build

# Output directory
dist
```

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

**Note**: Glassmorphism 효과 (backdrop-filter)는 최신 브라우저에서 지원됩니다.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**임경민 (Kyungmin Lim)**

- GitHub: [@ljlm0402](https://github.com/ljlm0402)
- Email: ljlm0402@gmail.com
- Blog: [https://ljlm0402.netlify.app/](https://ljlm0402.netlify.app/)

## 🙏 Acknowledgments

- [Gridsome](https://gridsome.org/) - Amazing static site generator
- [Bootstrap](https://getbootstrap.com/) - Responsive framework
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Glassmorphism.com](https://glassmorphism.com/) - Design inspiration

---

⭐ Star this repo if you found it helpful!
