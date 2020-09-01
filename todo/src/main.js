// import Vue from 'vue'
import { createApp } from 'vue'
// import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import App from './App.vue'

createApp(App).mount('#app')
// Vue.use(Chakra)

// new Vue({
//     el: '#app',
//     render: (h) => h(CThemeProvider, [h(CReset), h(App)])
//   }).$mount()