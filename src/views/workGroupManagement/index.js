import React from "react";
import { styled } from "@mui/styles";
import * as LayoutStyled from "../../assets/style/common";
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import Mdi from "../../components/customed/layout/Mdi";
import TitlePage from "../../components/customed/title/page/TitlePage";

import Search from "./_parts/Search";
import List from "./_parts/List";

// img
import { PencilIcon } from "../../assets/style/icons";
import SectionContents from "./../../components/customed/layout/section/Contents";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "작업자근무파트관리", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "작업조관리",
  },
  {
    type: "bookmark",
    menu: "작업자근무파트관리",
  },
];

const index = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData}>
          <SkrStack direction="row" spacing={8}>
            <SkrButton
              color="primary"
              variant="contained"
              endIcon={<PencilIcon />}
            >
              신규등록
            </SkrButton>
          </SkrStack>
        </TitlePage>
        <SectionContents>
          <Search />
          <List />
        </SectionContents>
      </LayoutStyled.Page>
    </>
  );
};

export default index;
