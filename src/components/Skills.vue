<template>
  <div class="skills-card glass-card">
    <div class="card-header">
      <h2 class="card-title">⚡ Skills & Tech Stack</h2>
      <p class="card-subtitle">전문 기술 및 도구</p>
    </div>

    <!-- Tech Stack Icons Grid -->
    <div class="tech-grid">
      <div
        v-for="(tech, index) in techStack"
        :key="index"
        class="tech-item glass-mini-card"
      >
        <font-awesome :icon="tech.icon" class="tech-icon" :title="tech.name" />
        <span class="tech-name">{{ tech.name }}</span>
      </div>
    </div>

    <!-- Skills Categories -->
    <div class="skills-categories">
      <div
        v-for="(category, index) in skillCategories"
        :key="index"
        class="skill-category glass-card-compact"
      >
        <div class="category-header">
          <span class="category-icon">{{ category.icon }}</span>
          <h3 class="category-title">{{ category.title }}</h3>
        </div>
        <div class="skill-list">
          <div
            v-for="(skill, idx) in category.skills"
            :key="idx"
            class="skill-item"
          >
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar">
              <div
                class="skill-progress"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Workflow Highlights -->
    <div class="workflow-section">
      <h3 class="section-subtitle">💡 워크플로우 & 협업</h3>
      <div class="workflow-grid">
        <div
          v-for="(item, index) in workflowItems"
          :key="index"
          class="workflow-item"
        >
          <font-awesome :icon="['fas', 'check-circle']" class="check-icon" />
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techStack: [
        { icon: ["fab", "js"], name: "JavaScript" },
        { icon: ["fas", "code"], name: "TypeScript" }, // TypeScript
        { icon: ["fab", "vuejs"], name: "Vue.js" },
        { icon: ["fab", "angular"], name: "Angular" },
        { icon: ["fab", "react"], name: "React" },
        { icon: ["fab", "node-js"], name: "Node.js" },
        { icon: ["fab", "npm"], name: "npm" },
        { icon: ["fas", "box"], name: "pnpm" }, // pnpm
        { icon: ["fab", "aws"], name: "AWS" },
        { icon: ["fab", "docker"], name: "Docker" },
        { icon: ["fas", "dharmachakra"], name: "Kubernetes" }, // Kubernetes
        { icon: ["fab", "jenkins"], name: "Jenkins" },
        { icon: ["fab", "git-alt"], name: "Git" },
        { icon: ["fab", "github"], name: "GitHub" },
      ],
      skillCategories: [
        {
          icon: "💻",
          title: "Frontend",
          skills: [
            { name: "JavaScript/TypeScript", level: 95 },
            { name: "Vue.js & Vuex", level: 90 },
            { name: "Angular & RxJS", level: 85 },
            { name: "React & Next.js", level: 80 },
          ],
        },
        {
          icon: "⚙️",
          title: "Backend",
          skills: [
            { name: "Node.js & Express", level: 90 },
            { name: "NestJS", level: 85 },
            { name: "RESTful API", level: 90 },
            { name: "GraphQL", level: 75 },
          ],
        },
        {
          icon: "🗄️",
          title: "Database",
          skills: [
            { name: "MySQL/PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "DynamoDB", level: 75 },
            { name: "Redis", level: 70 },
          ],
        },
        {
          icon: "☁️",
          title: "DevOps",
          skills: [
            { name: "AWS (EC2, ECS, EKS)", level: 85 },
            { name: "Docker & Kubernetes", level: 80 },
            { name: "CI/CD Pipeline", level: 85 },
            { name: "GitHub Actions", level: 90 },
          ],
        },
      ],
      workflowItems: [
        "애자일 스크럼 방법론",
        "Git Flow & 코드 리뷰",
        "TDD & 단위 테스트",
        "문서화 & 지식 공유",
        "성능 최적화 & 모니터링",
        "보안 & 베스트 프랙티스",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skills-card {
  padding: 2.5rem;
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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

// Tech Stack Grid
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

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

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.25);

    .tech-icon {
      transform: scale(1.2);
      color: #FDB750;
    }
  }
}

.tech-icon {
  font-size: 2.5rem;
  color: rgba(45, 55, 72, 0.9);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.tech-name {
  font-size: 0.85rem;
  color: rgba(45, 55, 72, 0.8);
  text-align: center;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
}

// Skills Categories
.skills-categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.category-icon {
  font-size: 1.8rem;
}

.category-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  font-size: 0.95rem;
  color: rgba(45, 55, 72, 0.9);
  font-weight: 500;
}

.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #FDB750, #FFCC4D);
  border-radius: 10px;
  transition: width 1s ease-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

// Workflow Section
.workflow-section {
  margin-top: 1rem;
}

.section-subtitle {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.workflow-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(45, 55, 72, 0.9);
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
  }
}

.check-icon {
  color: #4ade80;
  font-size: 1.1rem;
}
</style>
