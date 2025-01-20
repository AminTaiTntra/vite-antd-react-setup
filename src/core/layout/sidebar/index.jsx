import { Fragment, useState } from "react";
import { Menu, Layout } from "antd";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/react.svg";
import brandicon from "../../../assets/react.svg";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import {
  setSideMenuStatus,
  setSubMenuStatus,
} from "../../../redux/actions/sidebar";
import getMenuIcon from "../theme/icons";
import { CustomControlledInput } from "../../components/common";

const { Sider } = Layout;

const Sidebar = ({ sidebarHighlightKey = null }) => {
  const sideMenuStatus = useSelector(
    (state) => state?.sidebarMenu?.sideMenuStatus
  );
  const activeMenu = useSelector((state) => state?.sidebarMenu?.activeMenu);
  const userPermissionMenuList = useSelector(
    (state) => state?.userPermissionMenu?.userPermissionsMenuList
  );
  const [searchItem, setSearchItem] = useState("");

  const dispatch = useDispatch();

  const getMenuItems = (menuArray) => {
    return menuArray.map((item) => {
      const { key, icon, label, children } = item;
      if (!children) {
        return {
          key,
          icon: getMenuIcon(icon),
          label: <Link to={key}>{label}</Link>,
          labelText: label,
        };
      }
      // If children under the children exist
      const childrenItems = getMenuItems(children);
      return {
        key,
        icon: getMenuIcon(icon),
        label: label,
        labelText: label,
        children: childrenItems,
      };
    });
  };

  const filterMenuItems = (items, searchItem) => {
    if (!searchItem) return items;
    return items
      .map((item) => {
        const hasMatchingLabel = item.labelText
          .toLowerCase()
          .includes(searchItem.toLowerCase());
        // filter the childrens recursively
        if (item.children) {
          const filteredChildren = filterMenuItems(item.children, searchItem);
          if (hasMatchingLabel || filteredChildren.length > 0) {
            return { ...item, children: filteredChildren };
          }
        }
        return hasMatchingLabel ? item : null;
      })
      .filter(Boolean);
  };

  const menuItems = !userPermissionMenuList?.menus.length
    ? getMenuItems(userPermissionMenuList?.menus)
    : [];

  const filteredMenuItems = filterMenuItems(menuItems, searchItem);

  const location = useLocation();
  const { pathname } = location;

  const getKeysWithChildren = (arr) => {
    let result = [];
    arr.forEach((item) => {
      if (item.children) {
        result.push(item.key);
      }
    });
    return result;
  };

  const rootSubmenuKeys = getKeysWithChildren(menuItems);

  const onOpenChange = (keys) => {
    //! Here we need to close the open menu's when we change the active open menu.
    const latestOpenKey =
      keys.find((key) => activeMenu.indexOf(key) === -1) || keys.at(-1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      dispatch(setSubMenuStatus(keys));
    } else {
      dispatch(setSubMenuStatus(latestOpenKey ? [latestOpenKey] : []));
    }
  };

  const handleDrawerToggle = () => {
    dispatch(setSideMenuStatus(!sideMenuStatus));
    if (document.body.classList.contains("collapse-menu")) {
      document.body.classList.remove("collapse-menu");
    } else {
      document.body.classList.add("collapse-menu");
    }
  };

  return (
    <Fragment>
      <Sider
        collapsible
        trigger={null}
        collapsed={sideMenuStatus}
        breakpoint={"xl"}
        onBreakpoint={(status) => status && dispatch(setSideMenuStatus(status))}
        width={250}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: "0",
          top: "0",
        }}
      >
        <div className={"branding"}>
          <span className={"brand-logo"}>
            <img
              alt={"Setu"}
              className={"logo"}
              src={logo}
              width={104}
              height={38}
            />
          </span>
          <span className={"brand-icon"}>
            <img
              alt={"Brand"}
              className={"brand-icon"}
              src={brandicon}
              width={40}
              height={40}
            />
          </span>
        </div>
        <CustomControlledInput
          type="search"
          name="search"
          size="small"
          allowClear={true}
          prefix={
            <SearchOutlined
              onClick={() => sideMenuStatus && handleDrawerToggle()}
            />
          }
          placeholder="Search"
          onChange={(e) => setSearchItem(e.target.value)}
          className={"sidebar-search"}
        />
        <Menu
          theme={"dark"}
          mode={"inline"}
          items={filteredMenuItems}
          openKeys={activeMenu}
          defaultOpenKeys={activeMenu}
          defaultSelectedKeys={pathname}
          selectedKeys={sidebarHighlightKey ?? pathname}
          onOpenChange={onOpenChange}
        />
      </Sider>
      <div className={"overlay"} onClick={() => handleDrawerToggle()} />
    </Fragment>
  );
};

export default Sidebar;
