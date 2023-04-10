import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./data";
import { Provider } from "react-redux";
import "./main.scss";
import ModalsProvider from "./components/ModalsProvider";
import RoutesProvider from "./routes";
import AuthProvider from "./components/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RoutesProvider />
        <ModalsProvider />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
