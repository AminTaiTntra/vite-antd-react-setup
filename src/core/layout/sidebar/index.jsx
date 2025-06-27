import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const SideBarLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const SideMenuList = [
    {
      key: "admin-dashboard",
      icon: <UserOutlined />,
      label: "Admin Dashboard",
      path: "/dashboard",
    },
    {
      key: "user-management",
      icon: <VideoCameraOutlined />,
      label: "User Management",
      path: "/user-list",
    },
    {
      key: "regulatory-requirements",
      icon: <UploadOutlined />,
      label: "Regulatory Requirements",
      path: "regulatory-requirements",
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* Logo Area */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            backgroundColor: "white",
          }}
        >
          <img
            src='/logo2.png'
            alt='Logo'
            style={{
              height: 80,
              objectFit: "contain",
              transition: "all 0.3s",
              ...(collapsed && { width: 64 }),
            }}
          />
        </div>

        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={SideMenuList.at(0).key}
          items={SideMenuList.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: () => navigate(item.path),
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBarLayout;
