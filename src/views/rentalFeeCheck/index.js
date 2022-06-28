import React from "react";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";

//component
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import TitlePage from "../../components/customed/title/page/TitlePage";
import Snackbars from "../../components/customed/snackbar/Snackbars";
import {
  ExcelIcon,
  SadIcon,
  HappyIcon,
  AlertCircleIcon,
} from "../../assets/style/icons";
import Mdi from "../../components/customed/layout/Mdi";

//parts
import Search from "./_parts/Search";
import List from "./_parts/List";

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
    menu: "대여료조회",
  },
];

const Index = () => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const [snackData, setSnackData] = React.useState({});
  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);
  function showSnack1() {
    setSnackData({
      type: "success",
      message: `단기예약정보가 변경되었습니다`,
      icon: HappyIcon,
      link: <Link href="#">상세보기</Link>,
    });
    setOpen(true);
  }

  function showSnack2() {
    setSnackData({
      type: "info",
      message: `단기예약정보가 변경되었습니다`,
      icon: AlertCircleIcon,
    });
    setOpen(true);
  }

  function showSnack3() {
    setSnackData({
      type: "warning",
      message: `단기예약정보가 변경되었습니다`,
      icon: SadIcon,
    });
    setOpen(true);
  }
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData}>
          <SkrStack direction="row" spacing={8}>
            <SkrButton color="excel" variant="outlined" endIcon={<ExcelIcon />}>
              엑셀 업로드
            </SkrButton>
          </SkrStack>
        </TitlePage>
        <SkrStack spacing={30}>
          <Search />
          <List />
          <SkrStack direction="row" justifyContent="flex-end">
            <SkrButton color="primary" variant="contained" onClick={showSnack1}>
              승인요청
            </SkrButton>
            <Snackbars
              snackData={snackData}
              showSnackbar={open}
              onHideSnackbar={() => setOpen(false)}
            />
          </SkrStack>
        </SkrStack>
      </LayoutStyled.Page>
    </>
  );
};

export default Index;
