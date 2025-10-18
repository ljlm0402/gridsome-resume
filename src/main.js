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

  // Preconnect to Google Fonts for better performance
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  })
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: 'anonymous'
  })
  
  // Google Fonts with display=swap
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i&display=swap'
  })
  
  // SEO Meta Tags
  head.meta.push({
    name: 'description',
    content: '사용자 경험을 최우선하는 Full Stack Developer. TypeScript, Node.js, React 전문. 확장 가능한 아키텍처와 클린 코드를 추구합니다.'
  })
  
  head.meta.push({
    name: 'keywords',
    content: 'Full Stack Developer, TypeScript, Node.js, React, Next.js, 개발자, 프론트엔드, 백엔드, 풀스택, 임경민, Kyungmin Lim'
  })
  
  head.meta.push({
    name: 'author',
    content: '임경민 (Kyungmin Lim)'
  })
  
  // Open Graph Tags
  head.meta.push({
    property: 'og:type',
    content: 'website'
  })
  
  head.meta.push({
    property: 'og:url',
    content: 'https://kyungmin-resume.surge.sh'
  })
  
  head.meta.push({
    property: 'og:title',
    content: '임경민 - Full Stack Developer Portfolio'
  })
  
  head.meta.push({
    property: 'og:description',
    content: '사용자 경험을 최우선하는 Full Stack Developer의 포트폴리오입니다.'
  })
  
  head.meta.push({
    property: 'og:image',
    content: 'https://kyungmin-resume.surge.sh/og-image.png'
  })
  
  // Twitter Card Tags
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })
  
  head.meta.push({
    name: 'twitter:creator',
    content: '@ljlm0402'
  })
  
  head.meta.push({
    name: 'twitter:title',
    content: '임경민 - Full Stack Developer'
  })
  
  head.meta.push({
    name: 'twitter:description',
    content: '사용자 경험을 최우선하는 Full Stack Developer의 포트폴리오'
  })
  
  // Canonical URL
  head.link.push({
    rel: 'canonical',
    href: 'https://kyungmin-resume.surge.sh'
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
