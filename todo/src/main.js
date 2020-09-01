import { createApp } from 'vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import App from './App.vue'

createApp(App).mount('#app')

new Vue({
    el: '#app',
    render: (h) => h(CThemeProvider, [h(CReset)], [h(App)])
  }).$mount()