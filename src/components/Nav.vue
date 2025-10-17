<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top modern-nav"
    id="sideNav"
  >
    <div v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
      <span class="d-block d-lg-none brand-mobile">임경민</span>
      <span class="d-none d-lg-block">
        <div class="profile-wrapper">
          <g-image
            alt="Profile"
            src="@/assets/images/profile.png"
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
          />
          <div class="profile-glow"></div>
        </div>
      </span>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link glass-nav-link" v-on:click.prevent="$scrollTo('#about')">
            <span class="nav-icon">👤</span>
            <span class="nav-text">About</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link glass-nav-link" v-on:click.prevent="$scrollTo('#interests')">
            <span class="nav-icon">💫</span>
            <span class="nav-text">Interests</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link glass-nav-link" v-on:click.prevent="$scrollTo('#skills')">
            <span class="nav-icon">⚡</span>
            <span class="nav-text">Skills</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link glass-nav-link" v-on:click.prevent="$scrollTo('#experience')">
            <span class="nav-icon">💼</span>
            <span class="nav-text">Experience</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link glass-nav-link" v-on:click.prevent="$scrollTo('#project')">
            <span class="nav-icon">🚀</span>
            <span class="nav-text">Project</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link glass-nav-link" v-on:click.prevent="$scrollTo('#community')">
            <span class="nav-icon">🌐</span>
            <span class="nav-text">Community</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.modern-nav {
  background: rgba(102, 126, 234, 0.15) !important;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-right: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
}

.brand-mobile {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-wrapper {
  position: relative;
  display: inline-block;
}

.img-profile {
  position: relative;
  z-index: 2;
  border: 0.5rem solid rgba(255, 255, 255, 0.3) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.5) !important;
  }
}

.profile-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.navbar-brand,
.nav-item {
  cursor: pointer;
}

.navbar-nav {
  width: 100%;
}

.nav-item {
  margin: 0.5rem 0;
}

.glass-nav-link {
  display: flex !important;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem !important;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-weight: 700 !important;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &::before {
      left: 100%;
    }

    .nav-icon {
      transform: scale(1.2) rotate(10deg);
    }
  }

  &:active {
    transform: translateX(3px) scale(0.98);
  }
}

.nav-icon {
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.nav-text {
  flex: 1;
}

#sideNav .navbar-toggler {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.5);
  }
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
    padding-top: 2rem;
  }

  #sideNav .navbar-brand {
    display: flex;
    margin: 0 auto 2rem;
    padding: 0.5rem;
  }

  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
  }

  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
    padding: 0 1rem;
  }

  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
    width: 100%;
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: flex;
  }
}

@media (max-width: 991px) {
  .modern-nav {
    background: rgba(102, 126, 234, 0.25) !important;
  }
}
</style>
