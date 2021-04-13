import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CreateComponent,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;