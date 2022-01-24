import React from "react";
import ReactDOM from "react-dom";
import App from "@/router/app";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import storage from "./utils/storage";
import { defaultTheme } from "@/styled/themes";
import { appActions } from "@/store/ducks/app";
import "@/services/locale/i18n";

export const store = configureStore();
const storageTheme = storage("theme").get();
if (storageTheme && storageTheme !== defaultTheme)
  store.dispatch<any>(appActions.themeSwitchAction(storageTheme));

const element = (AppComponent: any) => (
  <Provider store={store}>
    <Router>
      <AppComponent />
    </Router>
  </Provider>
);

const container = document.getElementById("app");
ReactDOM.render(element(App), container);
