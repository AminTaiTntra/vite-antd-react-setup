import Login from "../modules/authentication/login";
import Dashboard from "../modules/dashboard";
import ROUTES from "./routeMapper";

export const RouteList = [
  {
    path: ROUTES.login,
    component: Login,
    pageTitle: "Login",
  },
  {
    path: ROUTES.dashboard,
    component: Dashboard,
    pageTitle: "Dashboard",
  },
];
