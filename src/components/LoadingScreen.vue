<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <img 
          src="@/assets/images/agumon-pixel.gif" 
          alt="Loading..." 
          class="loading-agumon"
        />
        <div class="loading-text">
          <h2 class="loading-title">Loading Portfolio</h2>
          <div class="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    // 최소 1.5초 로딩 화면 표시
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #FDB750 0%, #FFCC4D 50%, #FFE179 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.loading-agumon {
  width: 128px;
  height: 128px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  animation: bounce 1.2s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    width: 96px;
    height: 96px;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.05);
  }
}

.loading-text {
  text-align: center;
}

.loading-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: pulse 1.5s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.loading-dots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  span {
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    animation: dotPulse 1.4s ease-in-out infinite;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

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

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
