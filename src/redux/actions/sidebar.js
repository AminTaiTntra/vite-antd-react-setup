export const ACTIVE_MENU = "ACTIVE_MENU";
export const COLLAPSE_MENU = "COLLAPSE_MENU";
export const SIDE_MENU_STATUS = "SIDE_MENU_STATUS";

export const ACTIVE_REPORT_TAB_TITLE = "ACTIVE_REPORT_TAB_TITLE";

// this function is responsible for highlighting active class of menu
export const setActiveMenu = (data) => (dispatch) => {
  dispatch({
    type: ACTIVE_MENU,
    payload: data,
  });
};

// this function is responsible for toggling sub-menus
export const setSubMenuStatus = (keys) => (dispatch) => {
  dispatch({
    type: COLLAPSE_MENU,
    payload: keys,
  });
};

// this function is responsible for popup sidebar-menu
export const setSideMenuStatus = (status) => (dispatch) => {
  dispatch({
    type: SIDE_MENU_STATUS,
    payload: status,
  });
};

export const setReportCodeTitle = (activeTitle) => (dispatch) => {
  dispatch({
    type: ACTIVE_REPORT_TAB_TITLE,
    payload: activeTitle,
  });
};
