import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar";
import CustomHeader from "../header";

const { Content } = Layout;

const WithAuthenticationLayout = () => {
  const [{ pageTitle, sidebarHighlightKey }, setState] = useState({
    pageTite: null,
    sidebarHighlightKey: null,
  });

  const reportTabTitle = useSelector(
    (state) => state.sidebarMenu.activeReportTabTitle
  );

  return (
    <Layout hasSider>
      <Sidebar sidebarHighlightKey={sidebarHighlightKey} />
      <Layout className={"site-layout"}>
        <CustomHeader pageTitle={pageTitle || reportTabTitle} />
        <Content>
          <Outlet context={{ setState }} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default WithAuthenticationLayout;
