import { createApp, markRaw } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './axios';
import './assets/main.css';

const pinia = createPinia();
pinia.use(({store})=>{
    store.router = markRaw(router); //giving router access to all JS store
});

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
