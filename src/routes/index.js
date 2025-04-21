import { useEffect } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import ROUTES from "./routeMapper";
import { RouteList } from "./routeList";
import WithAuthenticationLayout from "../core/layout/theme";
import PrivateRoute from "./privateRoute";
import RouteFallback from "../core/layout/theme/fallbackRoute";
import CustomErrorBoundary from "../core/layout/theme/errorBoundary";
import { Posts } from "../modules/posts";
import { CreatePost } from "../modules/posts/createPosts";
import { PostById } from "../modules/posts/productsById";

// const ResetPassword = loadable(
//   () => import("../modules/authentication/resetPassword/resetPassword"),
//   { fallback: <RouteFallback /> }
// );
// const ForgotPassword = loadable(
//   () => import("../modules/authentication/forgotPassword/forgotPassword"),
//   { fallback: <RouteFallback /> }
// );
// const PageNotFound = loadable(() => import("../modules/pageNotFound"), {
//   fallback: <RouteFallback />,
// });
const Login = loadable(() => import("../modules/authentication/login"), {
  fallback: <RouteFallback />,
});

const AppRoutes = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => Boolean(state?.login?.accessToken));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <ErrorBoundary key='/' FallbackComponent={CustomErrorBoundary}>
              <Login />
            </ErrorBoundary>
          }
        />
        <Route element={<WithAuthenticationLayout />}>
          {RouteList?.map(
            (
              {
                path,
                component,
                pageTitle,
                screenPermissions,
                bypassPermission,
                sidebarHighlightKey,
              },
              index,
            ) => {
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <ErrorBoundary key={path} FallbackComponent={CustomErrorBoundary}>
                      <PrivateRoute
                        isAuthenticated={isAuthenticated}
                        component={component}
                        pageTitle={pageTitle}
                        // screenPermissions={screenPermissions}
                        // bypassPermission={bypassPermission}
                        sidebarHighlightKey={sidebarHighlightKey}
                      />
                    </ErrorBoundary>
                  }
                />
              );
            },
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
