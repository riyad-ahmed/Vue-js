import App from './App.vue'
import { createApp, ref } from 'vue'


createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
})

createApp(App).mount('#app')
