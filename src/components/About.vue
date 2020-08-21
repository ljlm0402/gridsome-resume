<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        임경민
      </h1>
      <div class="subheading mb-5">
        <a href="mailto:ljlm0402@gmail.com">ljlm0402@gmail.com</a>
      </div>
      <p class="lead mb-5">
        안녕하세요. 자바스크립트, 타입스트립트 개발자 임경민입니다.
      </p>
      <p class="lead mb-5">
        해당 포트폴리오 사이트 Repo :
        <a
          href="https://github.com/ljlm0402"
          target="_blank"
          rel="noopener noreferrer"
        >Here</a>.
      </p>
      <div class="social-icons">
        <a href="https://github.com/ljlm0402" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://www.npmjs.com/~limkyungmin" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'npm']"/>
        </a>
        <a href="https://ljlm0402.netlify.app/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'dev']"/>
        </a>
        <a href="https://ljlm0402.github.io/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fas', 'link']"/>
        </a>
        <a href="https://stackshare.io/kyungmin/tech-stack" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'stackpath']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--light);
}
</style>
