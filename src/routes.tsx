import { useRoutes } from "solid-app-router";
import { Component } from "solid-js";
import { generalRoutes } from "./features/general/generalRoutes";
import { repoRoutes } from "./features/repo/repoRoutes";

const allCustomRoutes = [...repoRoutes, ...generalRoutes];
const Routes = useRoutes(allCustomRoutes);

export { Routes };
