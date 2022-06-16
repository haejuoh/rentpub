import React from "react";
import Mdi from "../../components/customed/layout/Mdi";
import * as LayoutStyled from "../../assets/style/common";
//component
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import TitlePage from "../../components/customed/title/page/TitlePage";
import { ExcelIcon } from "../../assets/style/icons";

//parts
import Search from "./_parts/Search";
import List from "./_parts/List";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "정보조회", active: true },
  { label: "변경이력조회", active: false },
];
const titleData = [
  {
    path: "/",
    menu: "단기렌탈정보",
  },
  {
    path: "/",
    menu: "단기차정관리",
  },
  {
    type: "bookmark",
    menu: "대여료조회",
  },
];

const index = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData}>
          <SkrStack direction="row" spacing={8}>
            <SkrButton color="excel" variant="outlined" endIcon={<ExcelIcon />}>
              엑셀다운로드
            </SkrButton>
          </SkrStack>
        </TitlePage>
        <SkrStack spacing={30}>
          <Search />
          <List />
          {/* <SkrButton color="primary" variant="contained">
            승인요청
          </SkrButton> */}
        </SkrStack>
      </LayoutStyled.Page>
    </>
  );
};

export default index;
