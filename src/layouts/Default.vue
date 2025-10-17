<template>
  <div class="layout">
    <ScrollProgress />
    <LoadingScreen />
    <slot />
  </div>
</template>

<script>
import LoadingScreen from '~/components/LoadingScreen.vue'
import ScrollProgress from '~/components/ScrollProgress.vue'

export default {
  components: {
    LoadingScreen,
    ScrollProgress
  },
};
</script>

<style lang="scss">
.layout {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
</style>
