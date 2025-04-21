import { Provider } from "react-redux";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./setup/store";
import AppRoutes from "./routes";
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from "antd";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#8338ec', // your Tailwind primary
            },
            components: {
              Menu: {
                itemSelectedColor: '#8338ec',
                itemSelectedBg: '#f3e8ff',
              },
            },
          }}
        >
          <div className={"App"}>
            <AppRoutes />
          </div>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
