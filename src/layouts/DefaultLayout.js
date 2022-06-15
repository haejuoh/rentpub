import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/customed/layout/Header";
import Lnb from "../components/customed/layout/Lnb";
import { LayoutStyle } from "../assets/style/common";

const DefaultLayout = ({ children }) => {
  const layout = LayoutStyle();
  return (
    <>
      <Header />
      <div className={layout.container}>
        <Lnb />
        <div className={layout.contents}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
