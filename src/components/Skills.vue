<template>
  <section
    class="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'node-js']" />
        </li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item"></li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'npm']" />
        </li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Language : JavaScript, TypeScript
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          FrontEnd : Angular, Vue.js
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          BackEnd : Node.js(Express, Nest)
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          DataBase : MySQL(SQL), MariaDB(SQL), PostgreSQL(SQL), MongoDB(NoSQL)
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          CI / CD : AWS CodeBuild, Github Action, Travis CI
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']" />
          Cloud : AWS - Cluster(ECS), Kubernetes(EKS)
        </li>
      </ul>
    </div>
  </section>
</template>
