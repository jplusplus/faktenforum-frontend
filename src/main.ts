import { createApp } from "vue";

import App from "./App.vue";
//import icons from './lib/icons';
import "./index.css";
import router from "./router";

const app = createApp(App);
app.use(router);
//app.use(icons);

app.mount("#app");
