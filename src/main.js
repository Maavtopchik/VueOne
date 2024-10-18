// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import Com from './UpInComponens.vue';



const app = createApp(App);
app.use(router);
app.mount('#app');

// Home для Мне нужно проснуться в...
// App для Я лягу спать в...


