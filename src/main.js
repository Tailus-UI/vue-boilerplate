import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailus.css";
import "./assets/fonts.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
