import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/styles/index.scss';
import Icon from './components/Icon.vue';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';
import router from './router';

createApp(App)
  .component('icon', Icon)
  .use(router)
  .use(createPinia())
  .mount('#app');
