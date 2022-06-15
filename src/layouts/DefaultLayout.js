import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/customed/layout/Header";
import Lnb from "../components/customed/layout/Lnb";

import * as LayoutStyled from "../assets/style/common";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutStyled.Container>
        <Lnb />
        <LayoutStyled.Contents>
          <Outlet />
        </LayoutStyled.Contents>
      </LayoutStyled.Container>
    </>
  );
};

export default DefaultLayout;
