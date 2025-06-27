import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import SideBarLayout from "../sidebar";
import CustomHeader from "../header";

const { Content, Header } = Layout;

const WithAuthenticationLayout = () => {
  const [{ pageTitle, sidebarHighlightKey }, setState] = useState({
    pageTitle: null,
    sidebarHighlightKey: null,
  });

  const reportTabTitle = useSelector((state) => state.sidebarMenu.activeReportTabTitle);
  
  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <SideBarLayout sidebarHighlightKey={sidebarHighlightKey}>
        <Content style={{ padding: "24px", height: "100%", overflow: "auto" }}>
          <Outlet context={{ setState }} />
        </Content>
      </SideBarLayout>
    </Layout>
  );
};

export default WithAuthenticationLayout;
