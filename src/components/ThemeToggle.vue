<template>
  <button 
    class="theme-toggle glass-card" 
    @click="toggleTheme"
    :aria-label="isDark ? '라이트 모드로 전환' : '다크 모드로 전환'"
  >
    <transition name="fade" mode="out-in">
      <span v-if="isDark" key="sun" class="theme-icon">☀️</span>
      <span v-else key="moon" class="theme-icon">🌙</span>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    // 로컬 스토리지에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.isDark = savedTheme === 'dark'
      this.applyTheme()
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.applyTheme()
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 998;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: translateY(-5px) scale(1.1) rotate(10deg);
  }

  @media (max-width: 768px) {
    bottom: 90px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
}

.theme-icon {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter {
  opacity: 0;
  transform: scale(0.5) rotate(-180deg);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
}
</style>
