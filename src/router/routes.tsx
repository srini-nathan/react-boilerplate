import { MainLayout } from "@/components/layout";
import Dashboard from "@/pages/dashboard";
import loadable from "@loadable/component";
import { FC } from "react";

interface IAsyncPageProps {
  page: string;
}

export interface IRoute {
  path: string;
  name?: string;
  showInMenu: boolean;
  Component: any;
  Layout: FC;
}

export const AsyncPage: any = loadable(
  (props: IAsyncPageProps): any =>
    import(/* webpackPrefetch: true */ `@/pages/${props.page}`)
);

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Dashboard",
    showInMenu: true,
    Component: Dashboard,
    Layout: MainLayout,
  },
];

export const router = [{ routes }];
