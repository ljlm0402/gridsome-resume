<template>
  <section
    class="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'js-square']" title="JavaScript" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'vuejs']" title="Vue.js" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'angular']" title="Angular" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'node-js']" title="Node.js" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'npm']" title="npm" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'aws']" title="AWS" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'docker']" title="Docker" />
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'github']" title="GitHub" />
        </li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Languages: JavaScript, TypeScript
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Frontend: Angular, Vue.js, React, Next.js (SPA, SSR, 컴포넌트 기반
          설계)
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Backend: Node.js (Express, Nest - RESTful API, 실시간 처리)
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Database: MySQL, MariaDB, PostgreSQL, MongoDB, DynamoDB
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          DevOps/Infra: AWS (EC2, ECS, EKS), Docker, Kubernetes
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          CI/CD: GitHub Actions, Jenkins, AWS CodeBuild, Travis CI
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Collaboration: Git, Slack, Jira, Notions, Trello
        </li>
      </ul>
    </div>
  </section>
</template>
