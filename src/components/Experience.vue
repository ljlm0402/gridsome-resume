<template>
  <div class="experience-section">
    <div class="section-header glass-card-compact">
      <h2 class="section-title">💼 Work Experience</h2>
      <p class="section-subtitle">주요 경력 및 프로젝트 이력</p>
    </div>

    <div class="timeline">
      <!-- 안랩 - XTD -->
      <div class="timeline-item glass-card">
        <div class="timeline-marker">🧠</div>
        
        <div class="experience-header">
          <div class="company-info">
            <h3 class="company-name">AhnLab Inc. (주)안랩</h3>
            <span class="period">2025.04 ~ 현재</span>
          </div>
          <a href="https://www.ahnlab.com/ko/product/ot-ids" class="project-link" target="_blank">
            XTD - OT 가시성 및 위협 탐지 모니터링 솔루션
          </a>
        </div>

        <div class="tech-badges">
          <picture>
            <source srcset="@/assets/images/stacks/typescript.webp" type="image/webp">
            <img src="@/assets/images/stacks/typescript.png" alt="TypeScript" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/react.webp" type="image/webp">
            <img src="@/assets/images/stacks/react.png" alt="React" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/nextjs.webp" type="image/webp">
            <img src="@/assets/images/stacks/nextjs.png" alt="Next.js" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/nodejs.webp" type="image/webp">
            <img src="@/assets/images/stacks/nodejs.png" alt="Node.js" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/mariadb.webp" type="image/webp">
            <img src="@/assets/images/stacks/mariadb.png" alt="MariaDB" class="tech-badge" loading="lazy" />
          </picture>
        </div>

        <div class="highlights">
          <div class="highlight-item">
            <span class="highlight-label">주요 역할</span>
            <span class="highlight-value">프론트엔드 & 백엔드 개발</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">주요 성과</span>
            <span class="highlight-value">실시간 토폴로지 성능 30% 개선</span>
          </div>
        </div>

        <div class="tags-group">
          <span class="tag">#Next.js</span>
          <span class="tag">#React</span>
          <span class="tag">#Node.js</span>
          <span class="tag">#MariaDB</span>
        </div>

        <ul class="achievements">
          <li>Next.js + Node.js 기반 모니터링 솔루션 구축</li>
          <li>Cytoscape, Highcharts 기반 데이터 시각화</li>
          <li>Tailwind, pnpm, Turborepo 등 최신 스택 도입</li>
        </ul>

        <details class="architecture-details">
          <summary>Architecture & Preview</summary>
          <picture>
            <source srcset="@/assets/images/architecture/xtd-arch.webp" type="image/webp">
            <img src="@/assets/images/architecture/xtd-arch.png" alt="XTD Architecture" class="architecture-img" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/experience/xtd.webp" type="image/webp">
            <img src="@/assets/images/experience/xtd.png" alt="XTD Preview" class="preview-img" loading="lazy" />
          </picture>
        </details>
      </div>

      <!-- 안랩 - ICM -->
      <div class="timeline-item glass-card">
        <div class="timeline-marker">⚙️</div>
        
        <div class="experience-header">
          <div class="company-info">
            <h3 class="company-name">AhnLab Inc. (주)안랩</h3>
            <span class="period">2020.03 ~ 2025.03</span>
          </div>
          <a href="https://www.ahnlab.com/ko/product/cps-protection-management" class="project-link" target="_blank">
            ICM - CPS 보안 중앙 모니터링 및 통합 관리 시스템
          </a>
        </div>

        <div class="tech-badges">
          <picture>
            <source srcset="@/assets/images/stacks/typescript.webp" type="image/webp">
            <img src="@/assets/images/stacks/typescript.png" alt="TypeScript" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/vue.webp" type="image/webp">
            <img src="@/assets/images/stacks/vue.png" alt="Vue.js" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/nodejs.webp" type="image/webp">
            <img src="@/assets/images/stacks/nodejs.png" alt="Node.js" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/postgresql.webp" type="image/webp">
            <img src="@/assets/images/stacks/postgresql.png" alt="PostgreSQL" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/kubernetes.webp" type="image/webp">
            <img src="@/assets/images/stacks/kubernetes.png" alt="Kubernetes" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/docker.webp" type="image/webp">
            <img src="@/assets/images/stacks/docker.png" alt="Docker" class="tech-badge" loading="lazy" />
          </picture>
        </div>

        <div class="highlights">
          <div class="highlight-item">
            <span class="highlight-label">주요 역할</span>
            <span class="highlight-value">풀스택, 아키텍처 설계, DevOps</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">주요 성과</span>
            <span class="highlight-value">무중단 배포 / 성능 30% 향상</span>
          </div>
        </div>

        <div class="tags-group">
          <span class="tag">#Vue.js</span>
          <span class="tag">#Node.js</span>
          <span class="tag">#Kubernetes</span>
          <span class="tag">#PostgreSQL</span>
        </div>

        <ul class="achievements">
          <li>Vue.js + Node.js 기반 통합 대시보드 구축</li>
          <li>Kubernetes(k3s) 컨테이너 오케스트레이션 설계</li>
          <li>실시간 모니터링 및 데이터 비주얼라이제이션</li>
        </ul>

        <details class="architecture-details">
          <summary>Architecture & Preview</summary>
          <picture>
            <source srcset="@/assets/images/architecture/icm-arch.webp" type="image/webp">
            <img src="@/assets/images/architecture/icm-arch.png" alt="ICM Architecture" class="architecture-img" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/experience/icm.webp" type="image/webp">
            <img src="@/assets/images/experience/icm.png" alt="ICM Preview" class="preview-img" loading="lazy" />
          </picture>
        </details>
      </div>

      <!-- 열두달 - Fooding -->
      <div class="timeline-item glass-card">
        <div class="timeline-marker">🍱</div>
        
        <div class="experience-header">
          <div class="company-info">
            <h3 class="company-name">Fooding (주)열두달</h3>
            <span class="period">2018.10 ~ 2020.03</span>
          </div>
          <a href="https://fooding.io/" class="project-link" target="_blank">
            Fooding - 단체음식 배송 플랫폼 서비스
          </a>
        </div>

        <div class="tech-badges">
          <picture>
            <source srcset="@/assets/images/stacks/typescript.webp" type="image/webp">
            <img src="@/assets/images/stacks/typescript.png" alt="TypeScript" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/angular.webp" type="image/webp">
            <img src="@/assets/images/stacks/angular.png" alt="Angular" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/nodejs.webp" type="image/webp">
            <img src="@/assets/images/stacks/nodejs.png" alt="Node.js" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/mysql.webp" type="image/webp">
            <img src="@/assets/images/stacks/mysql.png" alt="MySQL" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/aws.webp" type="image/webp">
            <img src="@/assets/images/stacks/aws.png" alt="AWS" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/docker.webp" type="image/webp">
            <img src="@/assets/images/stacks/docker.png" alt="Docker" class="tech-badge" loading="lazy" />
          </picture>
        </div>

        <div class="highlights">
          <div class="highlight-item">
            <span class="highlight-label">주요 역할</span>
            <span class="highlight-value">프론트/백엔드, 아키텍처 설계</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">주요 성과</span>
            <span class="highlight-value">ECS 기반 자동 배포 구축</span>
          </div>
        </div>

        <div class="tags-group">
          <span class="tag">#Angular</span>
          <span class="tag">#Node.js</span>
          <span class="tag">#AWS</span>
          <span class="tag">#MySQL</span>
        </div>

        <ul class="achievements">
          <li>Angular + Node.js 기반 플랫폼 구축</li>
          <li>AWS ECS 기반 CI/CD 파이프라인 설계</li>
          <li>실시간 모니터링 및 자동 알림 시스템</li>
        </ul>

        <details class="architecture-details">
          <summary>Architecture & Demo Videos</summary>
          <picture>
            <source srcset="@/assets/images/architecture/fooding.webp" type="image/webp">
            <img src="@/assets/images/architecture/fooding.png" alt="Fooding Architecture" class="architecture-img" loading="lazy" />
          </picture>
          <div class="video-grid">
            <iframe src="https://www.youtube.com/embed/jQ1YNnLlUKs" class="video-frame" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/jeXTYYE-4JU" class="video-frame" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/-IUGiugc8kM" class="video-frame" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/hcjFL6LDWYQ" class="video-frame" allowfullscreen></iframe>
          </div>
        </details>
      </div>

      <!-- 씨큐프라임 -->
      <div class="timeline-item glass-card">
        <div class="timeline-marker">🖥</div>
        
        <div class="experience-header">
          <div class="company-info">
            <h3 class="company-name">SECUPRIME (주)씨큐프라임</h3>
            <span class="period">2017.12 ~ 2018.10</span>
          </div>
          <a href="http://www.smartfranchise.co.kr/front/kiosk.php" class="project-link" target="_blank">
            E-MORDER KIOSK - All-In-One 무인 결제 키오스크
          </a>
        </div>

        <div class="tech-badges">
          <picture>
            <source srcset="@/assets/images/stacks/javascript.webp" type="image/webp">
            <img src="@/assets/images/stacks/javascript.png" alt="JavaScript" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/nodejs.webp" type="image/webp">
            <img src="@/assets/images/stacks/nodejs.png" alt="Node.js" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/mariadb.webp" type="image/webp">
            <img src="@/assets/images/stacks/mariadb.png" alt="MariaDB" class="tech-badge" loading="lazy" />
          </picture>
          <picture>
            <source srcset="@/assets/images/stacks/raspberry-pi.webp" type="image/webp">
            <img src="@/assets/images/stacks/raspberry-pi.png" alt="Raspberry Pi" class="tech-badge" loading="lazy" />
          </picture>
        </div>

        <div class="highlights">
          <div class="highlight-item">
            <span class="highlight-label">주요 역할</span>
            <span class="highlight-value">풀스택 개발, 시스템 설계</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-label">주요 성과</span>
            <span class="highlight-value">POS 연동 재고·정산 자동화</span>
          </div>
        </div>

        <div class="tags-group">
          <span class="tag">#Express.js</span>
          <span class="tag">#Node.js</span>
          <span class="tag">#MariaDB</span>
        </div>

        <ul class="achievements">
          <li>Express 기반 Kiosk 서비스 개발</li>
          <li>카드리더기·POS기 Serial 통신 결제 모듈</li>
          <li>재고 및 정산 통합 자동화</li>
          <li>설치형(On-Premise) 무중단 서비스 운영</li>
        </ul>

        <details class="architecture-details">
          <summary>Architecture & Demo</summary>
          <picture>
            <source srcset="@/assets/images/architecture/secuprime.webp" type="image/webp">
            <img src="@/assets/images/architecture/secuprime.png" alt="SECUPRIME Architecture" class="architecture-img" loading="lazy" />
          </picture>
          <div class="video-grid">
            <iframe src="https://www.youtube.com/embed/64V7ATPeeyM" class="video-frame" allowfullscreen></iframe>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin: 0;
  padding: 0;
}

.section-header {
  text-align: center;
  padding: 2rem 0;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

.section-subtitle {
  color: rgba(45, 55, 72, 0.7);
  font-size: 1rem;
  margin: 0;
}

// Timeline
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 60px;
    bottom: 60px;
    width: 2px;
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.1), 
      rgba(255, 255, 255, 0.3), 
      rgba(255, 255, 255, 0.1)
    );

    @media (max-width: 768px) {
      left: 20px;
    }
  }
}

.timeline-item {
  padding: 2rem;
  position: relative;
  margin-left: 70px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    margin-left: 50px;
    padding: 1.5rem;
  }
}

.timeline-marker {
  position: absolute;
  left: -102px;
  top: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    left: -72px;
    width: 45px;
    height: 45px;
    font-size: 1.4rem;
  }
}

// Experience Header
.experience-header {
  margin-bottom: 1.5rem;
}

.company-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.company-name {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
}

.period {
  padding: 0.4rem 1rem;
  background: linear-gradient(135deg, #FDB750, #FFCC4D);
  border-radius: 20px;
  color: #1a202c;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(253, 183, 80, 0.3);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}

.project-link {
  color: rgba(45, 55, 72, 0.9);
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: 2px solid rgba(45, 55, 72, 0.3);
  transition: all 0.3s ease;

  &:hover {
    color: #1a202c;
    border-color: #1a202c;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

// Tech Badges
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem;
  transition: all 0.3s ease;
  object-fit: contain;

  &:hover {
    transform: scale(1.15);
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
}

// Highlights
.highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.highlight-label {
  font-size: 0.85rem;
  color: rgba(45, 55, 72, 0.6);
  font-weight: 600;
}

.highlight-value {
  font-size: 0.95rem;
  color: #2d3748;
  font-weight: 500;
}

// Tags
.tags-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.4rem 0.9rem;
  background: rgba(253, 183, 80, 0.3);
  border: 1px solid rgba(253, 183, 80, 0.5);
  border-radius: 15px;
  color: #2d3748;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(253, 183, 80, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(253, 183, 80, 0.3);
  }
}

// Achievements
.achievements {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;

  li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: rgba(45, 55, 72, 0.9);
    font-size: 0.95rem;
    line-height: 1.6;
    position: relative;

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #FDB750;
      font-weight: bold;
    }
  }
}

// Architecture Details
.architecture-details {
  margin-top: 1.5rem;
  cursor: pointer;

  summary {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #2d3748;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: '▶';
      margin-right: 0.5rem;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  &[open] summary::before {
    transform: rotate(90deg);
  }
}

.architecture-img,
.preview-img {
  width: 100%;
  border-radius: 15px;
  margin-top: 1rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.video-frame {
  width: 100%;
  height: 250px;
  border-radius: 15px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 200px;
  }
}
</style>
