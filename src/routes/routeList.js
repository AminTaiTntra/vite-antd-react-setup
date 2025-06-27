import Login from "../modules/authentication/login";
import Dashboard from "../modules/dashboard";
import UserManagement from "../modules/userManagement";
import ROUTES from "./routeMapper";

const adminRouteList = [
  {
    path: ROUTES.userList,
    component: UserManagement,
    pageTitle: "User List",
  },
];

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
  ...adminRouteList,
];
