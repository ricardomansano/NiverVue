import Vue from 'vue'
import App from './App.vue'
import store from './store'

// [*Router] Componentes do roteamento
import router from './router'

// [*Material_UI]
import { MdToolbar, MdMenu, MdButton, MdIcon, MdField, MdSwitch, MdTooltip } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdToolbar)
Vue.use(MdMenu)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdSwitch)
Vue.use(MdTooltip)

Vue.config.productionTip = false

new Vue({
  router, // [*Router: propagacao]
  store,
  render: h => h(App)
}).$mount('#app')
