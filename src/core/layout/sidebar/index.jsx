import { Layout, Menu } from 'antd';
import {
  Gauge,
  CalendarCheck,
  User2,
  Users2,
  ChevronRight,
  X,
  ChevronRightCircle,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const { Sider } = Layout;

const SideBarLayout = ({ collapsed, setCollapsed }) => {
  const route = useLocation();
  const [toggled, setToggled] = useState(false);

  const menuItems = [
    {
      key: '/',
      icon: <Gauge className="text-xl" />,
      label: 'Dashboard',
    },
    {
      key: '/analytics',
      icon: <ChevronRightCircle className="text-xl" />,
      label: 'Analytics',
    },
    {
      key: '/calendar',
      icon: <CalendarCheck className="text-xl" />,
      label: 'Calendar',
    },
    {
      key: '/profile',
      icon: <User2 className="text-xl" />,
      label: 'Profile',
    },
    {
      key: 'users',
      icon: <Users2 className="text-xl" />,
      label: 'Users',
      children: [
        { key: '/users/customer', label: 'Customer' },
        { key: '/users/manager', label: 'Manager' },
        { key: '/users/secretary', label: 'Secretary' },
      ],
    },
    {
      key: 'ecommerce',
      icon: <ChevronRight className="text-xl" />,
      label: 'E-commerce',
      children: [
        { key: '/ecommerce/products', label: 'Products' },
        { key: '/ecommerce/orders', label: 'Orders' },
      ],
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{
        height: '100vh',
        backgroundColor: '#1e293b',
        color: '#ffffff',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          padding: '16px',
          textAlign: 'center',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
      >
        {collapsed ? 'MBK' : 'Mohammad Baqer Kohie'}
      </div>

      {/* Menu Section */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[route.pathname]}
        items={menuItems}
        style={{
          backgroundColor: '#1e293b',
          color: '#ffffff',
        }}
      />
    </Sider>
  );
};

export default SideBarLayout;