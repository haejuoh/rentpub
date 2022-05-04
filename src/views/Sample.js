import React from "react";
import Mdi from "../components/Mdi";
import { theme } from "../assets/style/customTheme";
import { LayoutStyle } from "../assets/style/common";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "정보조회", active: true },
  { label: "변경이력조회", active: false },
];
const Sample = () => {
  const layout = LayoutStyle({ theme });
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}></div>
    </>
  );
};

export default Sample;
