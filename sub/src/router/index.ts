import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GisqbiViewer from "@/components/GisqbiViewer.vue";
import GisqbiListViewer from "@/components/GisqbiListViewer.vue";

type MyRouteRecordRaw = RouteRecordRaw & {
  _path?: string;
};

const routes: Array<MyRouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: AboutView,
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/viewer",
    name: "viewer",
    component: GisqbiViewer,
    // component: () => import("../components/GisqbiViewer.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: GisqbiListViewer,
    // component: () => import("../components/GisqbiListViewer.vue"),
  },
];

export function createAppRouter(qiankunAppName?: string) {
  if (qiankunAppName) {
    routes.forEach((r) => {
      if (!r._path) {
        r._path = r.path;
      }

      r.path = qiankunAppName + r._path;
    });
  }

  console.log(routes);

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  /* 在beforeEach 中处理
  router.beforeEach((to, from, next) => {
    console.log(to, from);
    //   debugger;
    if (qiankunAppName && to?.path?.startsWith(qiankunAppName)) {
      next({ path: to.path.substring(qiankunAppName.length) });
    } else {
      next();
    }
  });
   */

  return router;
}
