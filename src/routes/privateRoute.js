import { useEffect } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
// import PermissionNotFound from "../modules/permissionNotFound";

const PrivateRoute = ({
  isAuthenticated = false,
  component: Component,
  pageTitle = null,
  screenPermissions = [],
  bypassPermission = false,
  sidebarHighlightKey = null,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  const permissions = useSelector(
    (state) => state?.userPermissionMenu?.userPermissionsMenuList?.permissions
  );

  const screenPermissionPresent = permissions?.some((item) =>
    screenPermissions.includes(item)
  );

  const { setState } = useOutletContext();

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      pageTitle: pageTitle,
      sidebarHighlightKey: sidebarHighlightKey,
    }));
  }, [pageTitle, sidebarHighlightKey]);

  // return screenPermissionPresent || bypassPermission ? (
  //   <Component />
  // ) : (
  //   <PermissionNotFound />
  // );

  return <Component />;
};

export default PrivateRoute;
