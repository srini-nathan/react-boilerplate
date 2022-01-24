import React from "react";
import { Helmet } from "@/components/shared/helmet";
import { H4 } from "@/styled/shared";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title={t("Dashboard")} />
      <H4>{t("BTC-USD")}</H4>
    </>
  );
};

export default Dashboard;
