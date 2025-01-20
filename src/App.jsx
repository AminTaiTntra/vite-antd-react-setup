import { Provider } from "react-redux";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./setup/store";
import AppRoutes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={"App"}>
          <AppRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
