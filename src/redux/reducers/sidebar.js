import {
  ACTIVE_MENU,
  ACTIVE_REPORT_TAB_TITLE,
  COLLAPSE_MENU,
  SIDE_MENU_STATUS,
} from "../actions/sidebar";

const initialState = {
  activeName: "",
  activeMenu: [],
  sideMenuStatus: false,
};
// eslint-disable-next-line default-param-last
const SidebarMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_MENU: {
      return {
        ...state,
        activeName: action?.payload,
      };
    }
    case COLLAPSE_MENU: {
      return {
        ...state,
        activeMenu: action?.payload,
      };
    }
    case SIDE_MENU_STATUS: {
      return {
        ...state,
        sideMenuStatus: action?.payload,
      };
    }
    case ACTIVE_REPORT_TAB_TITLE: {
      return {
        ...state,
        activeReportTabTitle: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default SidebarMenuReducer;
