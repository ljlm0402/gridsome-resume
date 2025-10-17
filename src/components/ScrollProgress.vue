<template>
  <div class="scroll-progress-wrapper">
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  data() {
    return {
      scrollProgress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.scrollProgress = scrolled
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-progress-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 10001;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #FDB750 0%, #FFCC4D 50%, #FFE179 100%);
  transition: width 0.15s ease-out;
  box-shadow: 
    0 0 15px rgba(253, 183, 80, 0.8),
    0 2px 8px rgba(253, 183, 80, 0.4);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: #FDB750;
    border-radius: 50%;
    box-shadow: 
      0 0 20px rgba(253, 183, 80, 1),
      0 0 40px rgba(253, 183, 80, 0.5);
    animation: pulse-dot 1.5s ease-in-out infinite;
  }
}

@keyframes pulse-dot {
  0%, 100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-50%) scale(1.3);
    opacity: 0.8;
  }
}
</style>
