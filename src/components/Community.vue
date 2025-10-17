<template>
  <div class="community-card glass-card">
    <div class="card-header">
      <h2 class="card-title">🌐 Community & Activities</h2>
      <p class="card-subtitle">커뮤니티 활동 및 기여</p>
    </div>

    <!-- Facebook Groups -->
    <div class="activity-section glass-card-compact">
      <div class="section-icon">📱</div>
      <h3 class="section-title">Facebook 그룹 운영</h3>
      <p class="section-desc">다양한 개발 지식을 공유하는 오픈 커뮤니티 운영</p>
      
      <div class="activity-list">
        <a
          href="https://www.facebook.com/groups/765872100510405/"
          target="_blank"
          class="activity-item"
        >
          <font-awesome :icon="['fab', 'facebook']" class="item-icon facebook" />
          <div class="item-content">
            <h4 class="item-title">DEVLOG</h4>
            <p class="item-desc">개발자 커뮤니티 그룹</p>
          </div>
          <font-awesome :icon="['fas', 'arrow-right']" class="arrow-icon" />
        </a>

        <a
          href="https://www.facebook.com/groups/smcoding/"
          target="_blank"
          class="activity-item"
        >
          <font-awesome :icon="['fab', 'facebook']" class="item-icon facebook" />
          <div class="item-content">
            <h4 class="item-title">실무코딩</h4>
            <p class="item-desc">실무 개발 지식 공유</p>
          </div>
          <font-awesome :icon="['fas', 'arrow-right']" class="arrow-icon" />
        </a>
      </div>
    </div>

    <!-- Boostcamp Mentoring -->
    <div class="activity-section glass-card-compact">
      <div class="section-icon">🎓</div>
      <h3 class="section-title">부스트캠프 멘토 활동</h3>
      <p class="section-desc">지속 가능한 개발자를 위한 커뮤니티 멘토링</p>
      
      <div class="mentor-grid">
        <a
          href="https://github.com/boostcampwm-2022"
          target="_blank"
          class="mentor-badge"
        >
          <font-awesome :icon="['fab', 'github']" class="badge-icon" />
          <span class="badge-text">웹·모바일 7기</span>
          <span class="badge-year">2022</span>
        </a>

        <a
          href="https://github.com/boostcampwm2023"
          target="_blank"
          class="mentor-badge"
        >
          <font-awesome :icon="['fab', 'github']" class="badge-icon" />
          <span class="badge-text">웹·모바일 8기</span>
          <span class="badge-year">2023</span>
        </a>

        <a
          href="https://github.com/boostcampwm-2024"
          target="_blank"
          class="mentor-badge"
        >
          <font-awesome :icon="['fab', 'github']" class="badge-icon" />
          <span class="badge-text">웹·모바일 9기</span>
          <span class="badge-year">2024</span>
        </a>
      </div>
    </div>

    <!-- Beta Reading -->
    <div class="activity-section glass-card-compact">
      <div class="section-icon">📚</div>
      <h3 class="section-title">베타리딩</h3>
      <p class="section-desc">출간 서적 베타리딩 참여</p>
      
      <div class="books-list">
        <a
          href="https://www.yes24.com/Product/Goods/133974034"
          target="_blank"
          class="book-item"
        >
          <div class="book-icon">📖</div>
          <div class="book-content">
            <h4 class="book-title">러닝 Vue.js</h4>
            <p class="book-publisher">베타리딩 참여</p>
          </div>
          <font-awesome :icon="['fas', 'external-link-alt']" class="link-icon" />
        </a>

        <a
          href="https://www.yes24.com/product/goods/91213376"
          target="_blank"
          class="book-item"
        >
          <div class="book-icon">📖</div>
          <div class="book-content">
            <h4 class="book-title">Node.js 교과서 개정 2판</h4>
            <p class="book-publisher">베타리딩 참여</p>
          </div>
          <font-awesome :icon="['fas', 'external-link-alt']" class="link-icon" />
        </a>
      </div>
    </div>

    <!-- Stats Summary -->
    <div class="stats-summary">
      <div class="stat-card glass-mini-card">
        <div class="stat-value">2</div>
        <div class="stat-label">커뮤니티 그룹</div>
      </div>
      <div class="stat-card glass-mini-card">
        <div class="stat-value">3</div>
        <div class="stat-label">멘토링 활동</div>
      </div>
      <div class="stat-card glass-mini-card">
        <div class="stat-value">2</div>
        <div class="stat-label">베타리딩</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.community-card {
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
  color: #1a202c;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

.card-subtitle {
  color: rgba(45, 55, 72, 0.7);
  font-size: 1rem;
  margin: 0;
}

// Activity Section
.activity-section {
  padding: 1.5rem;
  position: relative;
}

.section-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
  text-align: center;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.section-desc {
  color: rgba(45, 55, 72, 0.7);
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
}

// Activity List
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(10px);
    border-color: rgba(102, 126, 234, 0.5);
  }
}

.item-icon {
  font-size: 2rem;
  
  &.facebook {
    color: #1877f2;
  }
}

.item-content {
  flex: 1;
}

.item-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.3rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.item-desc {
  font-size: 0.85rem;
  color: rgba(45, 55, 72, 0.7);
  margin: 0;
}

.arrow-icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  transition: all 0.3s ease;

  .activity-item:hover & {
    color: #1a202c;
    transform: translateX(5px);
  }
}

// Mentor Grid
.mentor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.mentor-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.5);
  }
}

.badge-icon {
  font-size: 2.5rem;
  color: #2d3748;
}

.badge-text {
  color: #2d3748;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
}

.badge-year {
  padding: 0.3rem 0.8rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
}

// Books List
.books-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.book-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
    border-color: rgba(102, 126, 234, 0.5);
  }
}

.book-icon {
  font-size: 2rem;
}

.book-content {
  flex: 1;
}

.book-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.3rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.book-publisher {
  font-size: 0.85rem;
  color: rgba(45, 55, 72, 0.7);
  margin: 0;
}

.link-icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  transition: all 0.3s ease;

  .book-item:hover & {
    color: #1a202c;
  }
}

// Stats Summary
.stats-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  text-align: center;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.95rem;
  color: rgba(45, 55, 72, 0.8);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
}
</style>
