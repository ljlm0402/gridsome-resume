<template>
  <Layout>
    <div class="modern-app-layout">
      <!-- Top Navigation Bar -->
      <nav class="top-nav glass-card">
        <div class="nav-content">
          <div class="profile-mini">
            <g-image
              alt="Profile"
              src="@/assets/images/profile.png"
              class="profile-avatar"
            />
            <div class="profile-info">
              <h4>임경민</h4>
              <p>Full Stack Developer</p>
            </div>
          </div>
          
          <div class="nav-links">
            <a v-on:click.prevent="scrollToSection('about')" class="nav-btn">
              <span>👤</span>
            </a>
            <a v-on:click.prevent="scrollToSection('skills')" class="nav-btn">
              <span>⚡</span>
            </a>
            <a v-on:click.prevent="scrollToSection('experience')" class="nav-btn">
              <span>💼</span>
            </a>
            <a v-on:click.prevent="scrollToSection('projects')" class="nav-btn">
              <span>🚀</span>
            </a>
          </div>
        </div>
      </nav>

      <!-- Floating Particles Background -->
      <div class="particles-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>

      <!-- Main Content Grid -->
      <div class="app-grid-container">
        <!-- About Card - Hero -->
        <section id="about" class="grid-item grid-hero">
          <About />
        </section>

        <!-- Interests Card -->
        <section id="interests" class="grid-item grid-medium">
          <Interests />
        </section>

        <!-- Skills Card -->
        <section id="skills" class="grid-item grid-large">
          <Skills />
        </section>

        <!-- Experience Cards -->
        <section id="experience" class="grid-item grid-full">
          <Experience />
        </section>

        <!-- Projects Card -->
        <section id="projects" class="grid-item grid-large">
          <Project />
        </section>

        <!-- Community Card -->
        <section id="community" class="grid-item grid-medium">
          <Community />
        </section>
      </div>

      <!-- Floating Action Button -->
      <button class="fab glass-card" v-on:click="scrollToTop">
        <span>↑</span>
      </button>

      <!-- Theme Toggle Button -->
      <ThemeToggle />
    </div>
  </Layout>
</template>

<script>
import About from "@/components/About";
import Interests from "@/components/Interests";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Community from "@/components/Community";
import ThemeToggle from "@/components/ThemeToggle";

export default {
  components: {
    About,
    Interests,
    Skills,
    Experience,
    Project,
    Community,
    ThemeToggle,
  },
  metaInfo: {
    title: "임경민 - Full Stack Developer",
    titleTemplate: "%s | Portfolio",
    meta: [
      {
        name: 'description',
        content: '사용자 경험을 최우선하는 Full Stack Developer. TypeScript, Node.js, React 전문. 확장 가능한 아키텍처와 클린 코드를 추구합니다.'
      },
      {
        name: 'keywords',
        content: 'Full Stack Developer, TypeScript, Node.js, React, Next.js, 개발자, 프론트엔드, 백엔드, 풀스택, 임경민, Kyungmin Lim'
      },
      {
        name: 'author',
        content: '임경민 (Kyungmin Lim)'
      },
      // Open Graph
      {
        property: 'og:title',
        content: '임경민 - Full Stack Developer Portfolio'
      },
      {
        property: 'og:description',
        content: '사용자 경험을 최우선하는 Full Stack Developer의 포트폴리오입니다.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://kyungmin-resume.surge.sh'
      },
      {
        property: 'og:image',
        content: 'https://kyungmin-resume.surge.sh/og-image.png'
      },
      {
        property: 'og:locale',
        content: 'ko_KR'
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:creator',
        content: '@ljlm0402'
      },
      {
        name: 'twitter:title',
        content: '임경민 - Full Stack Developer'
      },
      {
        name: 'twitter:description',
        content: '사용자 경험을 최우선하는 Full Stack Developer의 포트폴리오'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://kyungmin-resume.surge.sh'
      }
    ]
  },
  methods: {
    scrollToSection(id) {
      this.$scrollTo(`#${id}`, 800, {
        offset: -100,
      });
    },
    scrollToTop() {
      this.$scrollTo('#about', 800);
    },
  },
};
</script>

<style lang="scss" scoped>
.modern-app-layout {
  min-height: 100vh;
  padding: 0;
  position: relative;
}

// Top Navigation
.top-nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 1rem 2rem;
  width: calc(100% - 40px);
  max-width: 1400px;
  
  @media (max-width: 768px) {
    top: 10px;
    width: calc(100% - 20px);
    padding: 0.75rem 1rem;
  }
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.profile-mini {
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
}

.profile-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
}

.profile-info {
  h4 {
    margin: 0;
    font-size: 1.1rem;
    color: #2d3748;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    color: rgba(45, 55, 72, 0.7);

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
}

.nav-links {
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
}

.nav-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.3rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    font-size: 1.1rem;
  }
}

// Particles Background
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  animation: float-particle 20s infinite ease-in-out;

  &:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
    animation-duration: 15s;
  }

  &:nth-child(2) {
    width: 60px;
    height: 60px;
    top: 60%;
    left: 80%;
    animation-delay: 2s;
    animation-duration: 18s;
  }

  &:nth-child(3) {
    width: 100px;
    height: 100px;
    top: 40%;
    left: 40%;
    animation-delay: 4s;
    animation-duration: 20s;
  }

  &:nth-child(4) {
    width: 50px;
    height: 50px;
    top: 80%;
    left: 20%;
    animation-delay: 6s;
    animation-duration: 16s;
  }

  &:nth-child(5) {
    width: 70px;
    height: 70px;
    top: 20%;
    left: 70%;
    animation-delay: 8s;
    animation-duration: 22s;
  }
}

@keyframes float-particle {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translate(100px, -100px) rotate(90deg);
    opacity: 0.6;
  }
  50% {
    transform: translate(50px, 100px) rotate(180deg);
    opacity: 0.3;
  }
  75% {
    transform: translate(-50px, -50px) rotate(270deg);
    opacity: 0.6;
  }
}

// App Grid Container - Mobile App Style with Unified Card Sizes
.app-grid-container {
  padding: 120px 20px 100px;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 100px 15px 80px;
    gap: 15px;
  }
  
  // 모든 카드의 기본 높이 통일
  .grid-item {
    animation: fadeInUp 0.6s ease-out backwards;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
    &:nth-child(6) { animation-delay: 0.6s; }
  }
  
  // About과 Experience를 제외한 카드들에만 최소 높이 적용
  .grid-item:not(#about):not(#experience) {
    > * {
      height: 100%;
      min-height: 500px;
      
      @media (max-width: 768px) {
        min-height: auto;
      }
    }
  }
}

// Grid Item Sizes
.grid-hero {
  grid-column: span 12;
  
  @media (max-width: 768px) {
    grid-column: span 4;
  }
}

.grid-full {
  grid-column: span 12;
  
  @media (max-width: 768px) {
    grid-column: span 4;
  }
}

.grid-large {
  grid-column: span 8;
  
  @media (max-width: 1200px) {
    grid-column: span 8;
  }
  
  @media (max-width: 768px) {
    grid-column: span 4;
  }
}

.grid-medium {
  grid-column: span 4;
  
  @media (max-width: 1200px) {
    grid-column: span 8;
  }
  
  @media (max-width: 768px) {
    grid-column: span 4;
  }
}

.grid-small {
  grid-column: span 3;
  
  @media (max-width: 1200px) {
    grid-column: span 4;
  }
  
  @media (max-width: 768px) {
    grid-column: span 4;
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

// Floating Action Button
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  z-index: 999;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.1);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>
