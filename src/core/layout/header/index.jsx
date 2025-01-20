import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { setSideMenuStatus } from "../../../redux/actions/sidebar";
// import Notification from "./notification";
// import Profile from "./profile";
// import useHeader from "./hooks/useHeader";

const { Header } = Layout;

const CustomHeader = ({ pageTitle = null }) => {
  //   const [
  //     { isNotifDropdownOpen, isNotifTooltipOpen, isProfileDropdownOpen },
  //     {
  //       handleNotifDropdownChange,
  //       handleNotifTooltipChange,
  //       handleProfileDropdownChange,
  //     },
  //   ] = useHeader();

  const sideMenuStatus = useSelector(
    (state) => state?.sidebarMenu?.sideMenuStatus
  );

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(setSideMenuStatus(!sideMenuStatus));
    if (document.body.classList.contains("collapse-menu")) {
      document.body.classList.remove("collapse-menu");
    } else {
      document.body.classList.add("collapse-menu");
    }
  };

  return (
    <Header className={"site-layout-background"}>
      <div className={"header-topbar-left"}>
        <a className={"trigger"} onClick={() => handleDrawerToggle()}>
          {sideMenuStatus ? <RightOutlined /> : <LeftOutlined />}
        </a>
        <h1 className={"header-main-title"}>{pageTitle}</h1>
      </div>
      {/* <div className={"header-topbar-right"}>
        <Notification
          isNotifDropdownOpen={isNotifDropdownOpen}
          isNotifTooltipOpen={isNotifTooltipOpen}
          handleNotifDropdownChange={handleNotifDropdownChange}
          handleNotifTooltipChange={handleNotifTooltipChange}
        />
        <Profile
          isProfileDropdownOpen={isProfileDropdownOpen}
          handleProfileDropdownChange={handleProfileDropdownChange}
        />
      </div> */}
    </Header>
  );
};
export default CustomHeader;
