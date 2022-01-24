import React, { memo, FC } from "react";
import { HeaderStyled } from "./header-styled";

export const Header: FC = () => {
  return <HeaderStyled>Header</HeaderStyled>;
};

export default memo(Header);
