import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faGithub, 
  faFacebook, 
  faNpm, 
  faDev, 
  faStackpath, 
  faNodeJs,
  faVuejs,
  faAngular,
  faReact,
  faAws,
  faDocker,
  faJs,
  faJenkins,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { 
  faLink, 
  faCheck, 
  faShare, 
  faCheckCircle,
  faArrowRight,
  faExternalLinkAlt,
  faCube,
  faBox,
  faCode,
  faDharmachakra
} from '@fortawesome/free-solid-svg-icons'

library.add(
  // Brands
  faGithub, 
  faNpm, 
  faDev, 
  faStackpath, 
  faFacebook, 
  faNodeJs, 
  faVuejs,
  faAngular,
  faReact,
  faAws,
  faDocker,
  faJs,
  faJenkins,
  faGitAlt,
  // Solid
  faLink,
  faCheck, 
  faShare,
  faCheckCircle,
  faArrowRight,
  faExternalLinkAlt,
  faCube,
  faBox,
  faCode,
  faDharmachakra
)

export default function (Vue, {
  head,
}) {
  Vue.use(VueScrollTo)
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
  })
  
  // 구조화된 데이터 (JSON-LD) for SEO
  head.script.push({
    type: 'application/ld+json',
    json: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: '임경민',
      alternateName: 'Kyungmin Lim',
      url: 'https://kyungmin-resume.surge.sh',
      email: 'ljlm0402@gmail.com',
      jobTitle: 'Full Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'AhnLab Inc.'
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Dongguk University'
      },
      sameAs: [
        'https://github.com/ljlm0402',
        'https://www.npmjs.com/~ljlm0402',
        'https://dev.to/ljlm0402',
        'https://medium.com/@ljlm0402'
      ],
      knowsAbout: [
        'TypeScript',
        'JavaScript',
        'Node.js',
        'React',
        'Next.js',
        'Vue.js',
        'Express.js',
        'NestJS',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'AWS'
      ],
      description: '사용자 경험을 최우선하는 Full Stack Developer. 확장 가능한 아키텍처와 클린 코드를 추구합니다.'
    }
  })
}
