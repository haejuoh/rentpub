import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Lnb from "../components/Lnb";
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
