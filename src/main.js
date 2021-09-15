import { createApp } from 'vue'
import App from './App.vue'
import Toaster from '@meforma/vue-toaster';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./router/index.js";
createApp(App).use(router).use(Toaster).mount("#app");
