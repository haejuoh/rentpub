import React from "react";
import { styled } from "@mui/styles";
import * as LayoutStyled from "../../assets/style/common";
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import Mdi from "../../components/customed/layout/Mdi";
import TitlePage from "../../components/customed/title/page/TitlePage";
import SectionContents from "components/customed/layout/section/Contents";

import Info from "./_parts/Info";
import List from "./_parts/List";

// img
import { PencilIcon } from "../../assets/style/icons";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "작업자근무파트관리", active: false },
  { label: "작업자근무파트등록", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "작업조관리",
  },
  {
    type: "bookmark",
    menu: "작업자근무파트등록",
  },
];

const Regist = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData}></TitlePage>
        <SectionContents>
          <Info />
          <SkrStack direction="row" justifyContent="flex-end">
            <SkrButton color="primary" variant="contained">
              저장
            </SkrButton>
          </SkrStack>
        </SectionContents>
      </LayoutStyled.Page>
    </>
  );
};

export default Regist;
