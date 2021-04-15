import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import CreateComponent2 from "@/components/Create2Component.vue";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import EditComponent2 from "@/components/Edit2Component.vue";
import ListComponent from "@/components/ListComponent.vue";
import ListComponent2 from "@/components/List2Component.vue";
import ListComponent3 from "@/components/List3Component.vue";
import AdminComponent from "@/components/AdminComponent.vue";
import Login from "@/components/Login.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/Create",
    name: "Create",
    component: CreateComponent,
  },
  {
    path: "/Create2",
    name: "Create2",
    component: CreateComponent2,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/view2",
    name: "view2",
    component: ListComponent2,
  },
  {
    path: "/view3",
    name: "view3",
    component: ListComponent3,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
  {
    path: "/edit2/:id",
    name: "edit2",
    component: EditComponent2,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;