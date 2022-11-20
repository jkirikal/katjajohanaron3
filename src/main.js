import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

createApp(App).use(Vuelidate).use(store).use(router).mount('#app')
