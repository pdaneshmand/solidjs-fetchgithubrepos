import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import Home from "./home";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./home")),
  },
];

// const GeneralRoutes: Component = () => {
//   return <Route path="/" element={<Home />} />;
// };

export { routes as generalRoutes};
