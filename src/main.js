import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faFacebook, faNpm, faDev, faStackpath, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faLink, faCheck, faDownload, faStar, faShare } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faNpm, faDev, faLink, faStackpath, faFacebook, faNodeJs, faCheck, faDownload, faStar, faShare)

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
}
