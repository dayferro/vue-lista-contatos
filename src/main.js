import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import VueTheMask from 'vue-the-mask'

import ListaContatosPage from './components/ListaContatosPage.vue'
import PainelPage from './components/PainelPage.vue'

Vue.use(VueTheMask)
Vue.use (VueRouter)

const routes = [
  { path: '/lista-contatos', component: ListaContatosPage },
  { path: '/', component: PainelPage },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
