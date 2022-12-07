import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingsView from "../views/SettingsView.vue";
import SettingsUser from "../components/SettingsUser.vue";
import SettingsApp from "../components/SettingsApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "home/:taskID",
          component: HomeView,
        },
      ],
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      children: [
        {
          path: "app",
          component: SettingsApp,
        },
        {
          path: "user",
          component: SettingsUser,
        },
      ],
    },
  ],
});

export default router;
