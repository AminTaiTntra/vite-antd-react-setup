import { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

const SideBarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar collapsed={collapsed} style={{ height: "100vh" }}>
      <div className='flex justify-between items-center px-4 py-3'>
        {!collapsed && <h1 className='text-xl font-bold'>iKyzen</h1>}
        <button className='text-lg' onClick={() => setCollapsed((prev) => !prev)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>

      <Menu>
        <MenuItem icon={<PieChartOutlined />}>Admin Dashboard</MenuItem>
        <MenuItem icon={<DesktopOutlined />}>Updates, News & Events</MenuItem>

        <SubMenu label='Regulatory Requirements' icon={<MailOutlined />}>
          <MenuItem>Option 5</MenuItem>
          <MenuItem>Option 6</MenuItem>
          <MenuItem>Option 7</MenuItem>
          <MenuItem>Option 8</MenuItem>
        </SubMenu>
        <MenuItem icon={<DesktopOutlined />}>Group Legislations</MenuItem>
        <MenuItem icon={<DesktopOutlined />}>Organisations</MenuItem>
        <MenuItem icon={<DesktopOutlined />}>Activity Logs</MenuItem>
        <MenuItem icon={<DesktopOutlined />}>Countries</MenuItem>
        <MenuItem icon={<DesktopOutlined />}>Users</MenuItem>
        <MenuItem icon={<DesktopOutlined />}>Companies</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBarLayout;
