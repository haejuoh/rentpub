import React from "react";
import Mdi from "../../components/customed/layout/Mdi";
import * as LayoutStyled from "../../assets/style/common";
//component
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import TitlePage from "../../components/customed/title/page/TitlePage";
import { ExcelIcon } from "../../assets/style/icons";

//parts
import Form from "./_parts/Form";
import List from "./_parts/List";
import Table from "./_parts/Table";

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

const Regist = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData} />
        <SkrStack spacing={30}>
          <Form />
          <Table />
        </SkrStack>
      </LayoutStyled.Page>
    </>
  );
};

export default Regist;
