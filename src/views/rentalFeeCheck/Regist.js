import React from "react";

//component
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import Mdi from "../../components/customed/layout/Mdi";
import TitlePage from "../../components/customed/title/page/TitlePage";
import { ExcelIcon } from "../../assets/style/icons";

//parts
import Form from "./_parts/Form";
import List from "./_parts/List";
import Table from "./_parts/Table";

//style
import * as LayoutStyled from "../../assets/style/common";

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
    menu: "대여료등록",
  },
];

const Regist = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData} />
        <SkrStack spacing={30}>
          <Form />
          <Table />
          <SkrStack direction="row" justifyContent="flex-end" spacing={8}>
            <SkrButton color="cancel" variant="outlined">
              취소
            </SkrButton>
            <SkrButton color="primary" variant="contained">
              저장
            </SkrButton>
          </SkrStack>
        </SkrStack>
      </LayoutStyled.Page>
    </>
  );
};

export default Regist;
