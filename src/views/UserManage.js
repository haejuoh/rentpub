import React from "react";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "정보조회", active: true },
  { label: "변경이력조회", active: false },
];
const UserManage = () => {
  const layout = LayoutStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>//contents</div>
    </>
  );
};

export default UserManage;
