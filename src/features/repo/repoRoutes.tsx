import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import SavedRepos from "./savedRepos";

// const RepoRoutes: Component = () => {
//   return (
//     <Route path="/repos">
//       <Route path="saved" element={<SavedRepos />} />
//     </Route>
//   );
// };

const routes = [
  {
    path: "/repos",
    children: [
      { path: "/saved", component: lazy(() => import("./savedRepos")) },
    ],
  },
];

export { routes as repoRoutes};
