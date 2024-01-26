import { createApp } from "vue";
import { createVfm } from "vue-final-modal";

import "./style.css";
import "vue-toast-notification/dist/theme-default.css";
import "vue-final-modal/style.css";

import App from "./App.vue";
import ToastPlugin from "vue-toast-notification";
import VueGtag from "vue-gtag";
import * as VueRouter from "vue-router";
import { web3modalConfig } from "./wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/vue";
import { createPinia } from "pinia";
import { routes } from "./routes";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const pinia = createPinia();

createWeb3Modal(web3modalConfig);

const app = createApp(App);
const vfm = createVfm();

app.use(vfm);
app.use(pinia);
app.use(router);
app.use(ToastPlugin);
app.use(VueGtag, {
  config: {
    id: "GTM-5GGMJWJ",
  },
});

app.mount("#app");
