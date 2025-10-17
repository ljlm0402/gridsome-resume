<template>
  <div class="glass-card hero-card">
    <div class="hero-content">
      <h1 class="mb-4 animate-title">
        임경민
      </h1>
          
          <div class="subheading mb-4 gradient-text">
            <a href="mailto:ljlm0402@gmail.com" class="email-link">
              ✉️ ljlm0402@gmail.com
            </a>
          </div>

          <div class="intro-cards">
            <div class="glass-card mini-card">
              <div class="card-icon">💻</div>
              <p class="lead mb-0">
                사용자 경험을 최우선하는<br />
                <span class="highlight-js">JavaScript</span> Developer
              </p>
            </div>

            <div class="glass-card mini-card">
              <div class="card-icon">🚀</div>
              <p class="lead mb-0">
                <strong>확장 가능한 아키텍처</strong>와<br />
                <strong>클린 코드</strong>를 추구합니다
              </p>
            </div>

            <div class="glass-card mini-card">
              <div class="card-icon">🛠️</div>
              <p class="lead mb-0">
                <strong>관심분야:</strong><br />
                Architecture · Clean Code · Design Pattern
              </p>
            </div>
          </div>

          <div class="philosophy-section glass-card">
            <h3 class="section-title">💡 개발 철학</h3>
            <div class="philosophy-grid">
              <div class="philosophy-item">
                <div class="icon-badge">📖</div>
                <h4>가독성</h4>
                <p>읽기 쉽고 유지보수하기 좋은 코드</p>
              </div>
              <div class="philosophy-item">
                <div class="icon-badge">🏗️</div>
                <h4>유연한 구조</h4>
                <p>확장 가능한 아키텍처 설계</p>
              </div>
              <div class="philosophy-item">
                <div class="icon-badge">⚡</div>
                <h4>최신 기술</h4>
                <p>트렌드의 합리적 도입</p>
              </div>
              <div class="philosophy-item">
                <div class="icon-badge">🤝</div>
                <h4>협업과 성장</h4>
                <p>함께 발전하는 개발 문화</p>
              </div>
            </div>
          </div>

          <div class="portfolio-link glass-card">
            <p class="mb-2">
              <strong>📂 포트폴리오 저장소</strong>
            </p>
            <a
              href="https://github.com/ljlm0402/gridsome-resume"
              target="_blank"
              rel="noopener noreferrer"
              title="Portfolio"
              class="github-badge"
            >
              <img
                src="https://img.shields.io/static/v1?label=gridsome-resume&message=%20&color=FDB750&logo=github&logoColor=white&labelColor=FFCC4D"
              />
            </a>
          </div>

          <div class="social-section glass-card">
            <h4 class="social-title">🔗 Connect with me</h4>
            <div class="social-grid">
              <a
                href="https://github.com/ljlm0402"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                class="social-item glass-mini-card"
              >
                <font-awesome :icon="['fab', 'github']" class="social-icon" />
                <span class="social-name">GitHub</span>
              </a>
              <a
                href="https://www.npmjs.com/~limkyungmin"
                target="_blank"
                rel="noopener noreferrer"
                title="NPM Packages"
                class="social-item glass-mini-card"
              >
                <font-awesome :icon="['fab', 'npm']" class="social-icon" />
                <span class="social-name">NPM</span>
              </a>
              <a
                href="https://ljlm0402.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Tech Blog"
                class="social-item glass-mini-card"
              >
                <font-awesome :icon="['fab', 'dev']" class="social-icon" />
                <span class="social-name">Blog</span>
              </a>
              <a
                href="https://ljlm0402.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Pages"
                class="social-item glass-mini-card"
              >
                <font-awesome :icon="['fas', 'link']" class="social-icon" />
                <span class="social-name">Pages</span>
              </a>
              <a
                href="https://stackshare.io/kyungmin/tech-stack"
                target="_blank"
                rel="noopener noreferrer"
                title="Tech Stack"
                class="social-item glass-mini-card"
              >
                <font-awesome :icon="['fab', 'stackpath']" class="social-icon" />
                <span class="social-name">Stack</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-card {
  animation: fadeInUp 0.8s ease-out;
  
  // 상단 nav와 동일한 너비를 위해 좌우 padding 제거
  padding-left: 0 !important;
  padding-right: 0 !important;
  
  // 내부 컨텐츠에만 padding 적용
  .hero-content {
    padding: 0 2rem;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-title {
  animation: slideInLeft 0.8s ease-out;
  position: relative;
  display: inline-block;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.wave-emoji {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
  font-size: 4rem;
  margin-left: 1rem;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
}

.email-link {
  color: rgba(45, 55, 72, 0.95);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #1a202c;
    text-shadow: 0 0 10px rgba(253, 183, 80, 0.5);
  }
}

.intro-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 0 2rem;
}

.mini-card {
  padding: 1.5rem !important;
  text-align: center;
  animation: fadeInUp 0.8s ease-out backwards;
  
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  animation: float 3s ease-in-out infinite;
}

.highlight-js {
  color: #675d0eff;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(94, 93, 83, 0.5);
}

.highlight-ts {
  color: #3178c6;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(49, 120, 198, 0.5);
}

.philosophy-section {
  margin: 2rem 0;
  padding: 2rem 4rem !important;
  animation: fadeInUp 0.8s ease-out 0.8s backwards;
}

.section-title {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.philosophy-item {
  text-align: center;
  padding: 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }

  h4 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: rgba(45, 55, 72, 0.95);
  }

  p {
    font-size: 0.9rem;
    color: rgba(45, 55, 72, 0.8);
    margin: 0;
  }
}

.icon-badge {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  animation: float 3s ease-in-out infinite;
  
  .philosophy-item:nth-child(2) & { animation-delay: 0.5s; }
  .philosophy-item:nth-child(3) & { animation-delay: 1s; }
  .philosophy-item:nth-child(4) & { animation-delay: 1.5s; }
}

.portfolio-link {
  margin: 2rem 0;
  padding: 1.5rem 4rem !important;
  text-align: center;
  animation: fadeInUp 0.8s ease-out 1s backwards;
}

.github-badge {
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 28px;
  }
}

.social-section {
  margin-top: 2rem;
  padding: 2.5rem 4rem !important;
  animation: fadeInUp 0.8s ease-out 1.2s backwards;
}

.social-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: rgba(45, 55, 72, 0.95);
  font-weight: 700;
}

// Social Grid - Skills의 tech-grid 스타일과 동일
.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: #2d3748;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.25);

    .social-icon {
      transform: scale(1.2);
      color: #FDB750;
    }
  }
}

.social-icon {
  font-size: 2.5rem;
  color: rgba(45, 55, 72, 0.9);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.social-name {
  font-size: 0.85rem;
  color: rgba(45, 55, 72, 0.8);
  text-align: center;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>
