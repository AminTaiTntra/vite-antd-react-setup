import {
  AppstoreOutlined,
  BuildOutlined,
  ContainerOutlined,
  FilePptOutlined,
  IdcardOutlined,
  MinusOutlined,
  ProfileOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  RetweetOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

const menuElements = {
  AppstoreOutlined: <AppstoreOutlined />,
  MinusOutlined: <MinusOutlined />,
  UsergroupAddOutlined: <UsergroupAddOutlined />,
  ProfileOutlined: <ProfileOutlined />,
  IdcardOutlined: <IdcardOutlined />,
  ContainerOutlined: <ContainerOutlined />,
  FilePptOutlined: <FilePptOutlined />,
  BuildOutlined: <BuildOutlined />,
  TeamOutlined: <TeamOutlined />,
  RetweetOutlined: <RetweetOutlined />,
  UserSwitchOutlined: <UserSwitchOutlined />,
};

function getMenuIcon(name) {
  return menuElements[name] || null;
}

export default getMenuIcon;
