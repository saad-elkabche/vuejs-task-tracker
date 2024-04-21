import { createApp } from "vue";
import app from "./app.vue";
import router from './routes.js';

createApp(app).use(router).mount("#app")