import React from "react";
import { styled } from "@mui/styles";
import * as LayoutStyled from "../../assets/style/common";
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import Mdi from "../../components/customed/layout/Mdi";
import LySection from "../../components/customed/layout/LySection";

import Search from "./Search";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "작업자근무파트관리", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "단기렌탈정보",
  },
  {
    path: "/",
    menu: "단기렌탈 예약",
  },
  {
    type: "bookmark",
    menu: "신규예약등록",
    active: true,
  },
];

const index = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <LySection>
          <Search />
        </LySection>
      </LayoutStyled.Page>
    </>
  );
};

export default index;
