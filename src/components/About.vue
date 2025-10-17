<template>
  <section
    class="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  >
    <div class="w-100">
      <h1 class="mb-0">임경민</h1>
      <div class="subheading mb-3">
        <a href="mailto:ljlm0402@gmail.com">ljlm0402@gmail.com</a>
      </div>
      <p class="lead mb-3">
        저는 <span style="color: #eed81a">JavaScript</span>와 <span style="color: #2f74bf">TypeScript</span> 기반의 개발을 전문으로 하는 엔지니어입니다.
        <img src="@/assets/images/wave.gif" width="30px" />
      </p>
      <p>
        단순히 코드를 작성하는 것에 그치지 않고, Best Practice를 통해 최고의 퍼포먼스를 구현하는 것을 목표로 합니다.
      </p>
      <p class="lead mb-3" style="font-weight: bold">
        🚀 퍼포먼스 중심의 실용적 개발자<br />
        🛠️ 관심분야: Architecture · Clean Code · Design Pattern
      </p>
      <p class="lead mb-4">
      가독성과 성능, 그리고 트렌드를 핵심 가치로 두고 <br />
      ‘읽기 쉽고 유지보수하기 좋은 코드’, ‘유연한 구조’, ‘최신 기술 트렌드의 합리적 도입’을 지향합니다. <br />
      항상 협업과 성장에 열린 마음으로, 함께 발전하는 개발 문화를 만들어갑니다.
      </p>
      <p class="lead mb-5">
        포트폴리오 사이트 저장소 :
        <a
          href="https://github.com/ljlm0402/gridsome-resume"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfolio"
        >
          <img
            src="https://img.shields.io/static/v1?label=gridsome-resume&message=%20&color=000605&logo=github&logoColor=white&labelColor=000605"
          />
        </a>
      </p>

      <div class="social-icons">
        <a
          href="https://github.com/ljlm0402"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.npmjs.com/~limkyungmin"
          target="_blank"
          rel="noopener noreferrer"
          title="NPM Packages"
        >
          <font-awesome :icon="['fab', 'npm']" />
        </a>
        <a
          href="https://ljlm0402.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Tech Blog"
        >
          <font-awesome :icon="['fab', 'dev']" />
        </a>
        <a
          href="https://ljlm0402.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Pages"
        >
          <font-awesome :icon="['fas', 'link']" />
        </a>
        <a
          href="https://stackshare.io/kyungmin/tech-stack"
          target="_blank"
          rel="noopener noreferrer"
          title="Tech Stack"
        >
          <font-awesome :icon="['fab', 'stackpath']" />
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
