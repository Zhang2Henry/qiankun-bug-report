import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { registerMicroApps, start } from "qiankun";
import "element-plus/dist/index.css";

createApp(App).use(router).mount("#app");

const biBase = "/bi";

registerMicroApps([
  {
    name: "bi", // app name registered
    entry: "//localhost:8080/bi/",
    container: "#qiankunView",
    activeRule: (location) => location.hash.startsWith("#/bi"),
    props: {
      qiankunAppName: biBase,
    },
  },
]);

start();
