import { MainLayout } from "@/components/layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AsyncPage, routes } from "./routes";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { themes } from "@/styled/themes";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      {routes.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={
            <r.Layout>
              <r.Component />
            </r.Layout>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <MainLayout>
            <AsyncPage page="not-found" />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
