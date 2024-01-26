import HomePage from "../pages/home/index.vue";
import ShortPage from "../pages/short/index.vue";
import SmartPage from "../pages/smart/index.vue";
import AuthPage from "../pages/auth/index.vue";
import RefPage from "../pages/ref/index.vue";

export const routes = [
  { path: "/", component: SmartPage },
  { path: "/full", component: HomePage },
  { path: "/short", component: ShortPage },
  { path: "/auth/:provider", component: AuthPage },
  { path: "/ref/:link", component: RefPage },
];
