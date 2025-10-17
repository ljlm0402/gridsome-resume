<template>
  <Layout>
    <div class="error-page">
      <div class="error-content glass-card">
        <div class="error-animation">
          <img 
            src="@/assets/images/agumon-pixel.gif" 
            alt="Agumon" 
            class="agumon-error"
          />
          <div class="question-marks">
            <span>?</span>
            <span>?</span>
            <span>?</span>
          </div>
        </div>
        
        <h1 class="error-code">404</h1>
        <h2 class="error-title">길을 잃으셨나요?</h2>
        <p class="error-message">
          찾으시는 페이지가 존재하지 않습니다.<br />
          아구몬도 당황했어요! 🦖
        </p>
        
        <div class="error-actions">
          <g-link to="/" class="btn-home glass-mini-card">
            <span class="btn-icon">🏠</span>
            <span class="btn-text">홈으로 돌아가기</span>
          </g-link>
        </div>
        
        <div class="error-suggestions">
          <p class="suggestions-title">추천 링크</p>
          <div class="suggestions-grid">
            <g-link to="/#about" class="suggestion-link">
              <span>👤</span>
              <span>About</span>
            </g-link>
            <g-link to="/#skills" class="suggestion-link">
              <span>⚡</span>
              <span>Skills</span>
            </g-link>
            <g-link to="/#experience" class="suggestion-link">
              <span>💼</span>
              <span>Experience</span>
            </g-link>
            <g-link to="/#projects" class="suggestion-link">
              <span>🚀</span>
              <span>Projects</span>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
}

.error-animation {
  position: relative;
  margin-bottom: 2rem;
  display: inline-block;
}

.agumon-error {
  width: 150px;
  height: 150px;
  image-rendering: pixelated;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  animation: shake 0.8s ease-in-out infinite;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(-10px) rotate(-5deg);
  }
  75% {
    transform: translateX(10px) rotate(5deg);
  }
}

.question-marks {
  position: absolute;
  top: -20px;
  right: -30px;
  display: flex;
  gap: 0.5rem;
  
  span {
    font-size: 2rem;
    color: white;
    animation: float 2s ease-in-out infinite;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    &:nth-child(1) {
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.5;
  }
}

.error-code {
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(135deg, #FDB750, #FFCC4D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }
}

.error-title {
  font-size: 2rem;
  color: white;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.error-message {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.error-actions {
  margin-bottom: 2rem;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(253, 183, 80, 0.3);
  border: 2px solid rgba(253, 183, 80, 0.5);
  border-radius: 50px;
  color: white !important;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(253, 183, 80, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(253, 183, 80, 0.4);
    color: white !important;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.875rem 1.5rem;
  }
}

.btn-icon {
  font-size: 1.5rem;
}

.error-suggestions {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.suggestions-title {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.suggestions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.suggestion-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: white !important;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  span:first-child {
    font-size: 1.5rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    color: white !important;
  }
}
</style>
