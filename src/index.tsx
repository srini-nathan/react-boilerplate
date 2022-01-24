import React from "react";
import ReactDOM from "react-dom";
import App from "@/router/app";
import { BrowserRouter as Router } from "react-router-dom";

const element = (AppComponent: any) => (
  <Router>
    <AppComponent />
  </Router>
);

const container = document.getElementById("app");
ReactDOM.render(element(App), container);
