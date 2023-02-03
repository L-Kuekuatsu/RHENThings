import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/LoginPage.vue";
import Signup from "../views/SignupPage.vue";
import About from "../views/AboutPage.vue";
import Home from "../views/HomePage.vue";
import Favourites from "../views/Favourites.vue";
import MyItems from "../views/MyItems.vue";
import MyAccount from "../views/MyAccount.vue";
import AddItem from "../views/AddItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "login-page",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup-page",
      component: Signup,
    },
    {
      path: "/about",
      name: "about-page",
      component: About,
    },
    {
      path: "/home",
      name: "home-page",
      component: Home,
    },
    {
      path: "/favourites",
      name: "favourites",
      component: Favourites,
    },
    {
      path: "/myitems",
      name: "my-items",
      component: MyItems,
    },
    {
      path: "/myaccount",
      name: "my-account",
      component: MyAccount,
    },
    {
      path: "/additem",
      name: "add-item",
      component: AddItem,
    },
  ],
});

export default router;
