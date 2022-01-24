import { MainLayout } from "@/components/layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AsyncPage, routes } from "./routes";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { useSelector } from "react-redux";
import { appSelectors } from "@/store/ducks/app";

import { themes } from "@/styled/themes";

const App: React.FC<{}> = () => {
  const theme = useSelector(appSelectors.theme);
  const activeTheme: DefaultTheme = themes[theme];

  return (
    <ThemeProvider theme={activeTheme}>
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
    </ThemeProvider>
  );
};

export default App;
