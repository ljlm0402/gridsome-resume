<template>
  <div class="interests-card glass-card">
    <div class="card-header">
      <h2 class="card-title">💫 Interests & Philosophy</h2>
      <p class="card-subtitle">개발 철학과 관심사</p>
    </div>

    <!-- Philosophy Quote -->
    <div class="quote-section glass-card-compact">
      <div class="quote-icon">💡</div>
      <p class="quote-text">
        "좋은 코드가 좋은 협업을 만든다"
      </p>
      <p class="quote-subtext">
        꾸준한 학습과 실험을 통해<br />더 나은 코드와 구조를 탐구합니다
      </p>
    </div>

    <!-- Core Principles -->
    <div class="principles-grid">
      <div class="principle-card glass-card-compact">
        <div class="principle-icon">📖</div>
        <h3 class="principle-title">가독성</h3>
        <p class="principle-desc">
          명확한 코드 스타일로<br />
          협업 속도 향상과<br />
          유지보수 단순화
        </p>
      </div>

      <div class="principle-card glass-card-compact">
        <div class="principle-icon">⚡</div>
        <h3 class="principle-title">성능</h3>
        <p class="principle-desc">
          사용자 경험의 본질,<br />
          알고리즘 최적화와<br />
          비동기 처리 튜닝
        </p>
      </div>

      <div class="principle-card glass-card-compact">
        <div class="principle-icon">🚀</div>
        <h3 class="principle-title">트렌드 감각</h3>
        <p class="principle-desc">
          선택과 집중으로<br />
          프로젝트 적합 기술 선정,<br />
          안정성과 혁신의 균형
        </p>
      </div>
    </div>

    <!-- Focus Areas -->
    <div class="focus-section">
      <h3 class="section-title">🎯 현재 집중 분야</h3>
      <div class="focus-tags">
        <div class="focus-tag">아키텍처 설계</div>
        <div class="focus-tag">클린 코드</div>
        <div class="focus-tag">디자인 패턴</div>
        <div class="focus-tag">시스템 설계</div>
        <div class="focus-tag">성능 최적화</div>
        <div class="focus-tag">테스트 자동화</div>
      </div>
    </div>

    <!-- Personal Activities -->
    <div class="activities-section glass-card-compact">
      <h3 class="section-title">✨ 개발 외 활동</h3>
      <div class="activities-grid">
        <div class="activity-item">
          <span class="activity-icon">📚</span>
          <span class="activity-text">기술 서적 독서</span>
        </div>
        <div class="activity-item">
          <span class="activity-icon">✍️</span>
          <span class="activity-text">기술 블로그 작성</span>
        </div>
        <div class="activity-item">
          <span class="activity-icon">🎤</span>
          <span class="activity-text">컨퍼런스 참여</span>
        </div>
        <div class="activity-item">
          <span class="activity-icon">💬</span>
          <span class="activity-text">개발 커뮤니티 활동</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.interests-card {
  padding: 2.5rem;
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: auto;
  }
}

.card-header {
  text-align: center;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

.card-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin: 0;
}

// Quote Section
.quote-section {
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    animation: pulse 4s ease-in-out infinite;
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.quote-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.quote-subtext {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  position: relative;
  z-index: 1;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}

// Principles Grid
.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.principle-card {
  text-align: center;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);

    .principle-icon {
      transform: scale(1.2) rotate(10deg);
    }
  }
}

.principle-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  transition: all 0.3s ease;
}

.principle-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.principle-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
}

// Focus Section
.focus-section {
  margin-top: 1rem;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.focus-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.focus-tag {
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}

// Activities Section
.activities-section {
  padding: 1.5rem;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
  }
}

.activity-icon {
  font-size: 1.5rem;
}

.activity-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
}
</style>
