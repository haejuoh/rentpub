import React from "react";
import { styled } from "@mui/styles";
import {
  Grid,
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Switch,
  FormControlLabel,
  Chip,
  Divider,
  Link,
  Paper,
  Collapse,
  InputAdornment,
} from "@mui/material";
import { theme } from "../../../assets/style/customTheme";
import {
  LayoutStyle,
  DefaultTextField,
  FormContents,
} from "../../../assets/style/common";
import LySection from "../../../components/LySection";
import LySectionDivider from "../../../components/LySectionDivider";
import Mdi from "../../../components/Mdi";
import {
  PageTitle,
  SubTitle,
  TableTitle,
  SectionTitle,
} from "../../../components/Title";
import { Section } from "../../../components/Section";

import RtnInfo from "./_parts/RtnInfo";
import Dctype from "./_parts/Dctype";
import CusInfo from "./_parts/CusInfo";
import Drinfo from "./_parts/Drinfo";
import Mtinfo from "./_parts/Mtinfo";
import Simulation from "./_parts/Simulation";
import NoteManage from "./_parts/NoteManage";
import NoteVehicle from "./_parts/NoteVehicle";

// icon
import { ReactComponent as IconCopy } from "../../../assets/images/icons/copy.svg";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "단기렌탈 예약조회", active: true },
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

const Shtprsv = () => {
  const layout = LayoutStyle({ theme });
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}>
          <Stack direction="row" spacing={8}>
            <Button color="primary" variant="contained" endIcon={<IconCopy />}>
              예약복사
            </Button>
          </Stack>
        </PageTitle>
        <LySectionDivider spacing="30">
          <LySection>
            <RtnInfo />
            <Dctype />
            <Stack direction="row" justifyContent="flex-end">
              <Button color="primary" variant="contained">
                임시저장
              </Button>
            </Stack>
            <CusInfo />
            <Drinfo />
            <Mtinfo />
            <NoteManage />
            <NoteVehicle />
            <Stack direction="row" justifyContent="flex-end" spacing={8}>
              <Button color="cancel" variant="outlined">
                예약취소
              </Button>
              <Button color="primary" variant="contained">
                예약신청
              </Button>
              <Button color="default" variant="contained">
                예약확정
              </Button>
            </Stack>
          </LySection>

          {/* 임시 저장후 추가*/}
          <LySection>
            <Simulation />
          </LySection>
        </LySectionDivider>
      </div>
    </>
  );
};

export default Shtprsv;
