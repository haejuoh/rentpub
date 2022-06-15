import React from "react";
import Mdi from "../components/customed/layout/Mdi";
import { theme } from "../assets/style/customTheme";
import * as LayoutStyled from "../assets/style/common";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "정보조회", active: true },
  { label: "변경이력조회", active: false },
];
const Sample = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page></LayoutStyled.Page>
    </>
  );
};

export default Sample;
