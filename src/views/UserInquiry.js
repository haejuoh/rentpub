import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, Stack, Button } from "@mui/material";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { PageTitle } from "../components/Title";
import { Section } from "../components/Section";
import { SelectField } from "../components/Select";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../assets/images/icons/excel.svg";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "사용자조회", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "사용자",
  },
  {
    type: "bookmark",
    menu: "사용자조회",
    active: true,
  },
];
const defaultData = {
  label: "사용자구분",
  // select combo box 너비 지정
  style: { PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } } },
  option: ["전체", "일반사용자", "채널사용자", "시스템관리자"],
  disabled: false,
  isIcon: false,
};

const UserInquiry = () => {
  const layout = LayoutStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}>
          <Stack direction="row" spacing={8}>
            <Button color="primary" variant="contained" endIcon={<IconPencil />}>
              등록
            </Button>
          </Stack>
        </PageTitle>
        <Section variant="search">
          <Grid container spacing={20}>
            <Grid item xs="3">
              <TextField label="로그인ID" placeholder="로그인ID 입력" />
            </Grid>
            <Grid item xs="3">
              <TextField label="사번" placeholder="사번 입력" />
            </Grid>
            <Grid item xs="3">
              <TextField label="사용자명" placeholder="사용자명 입력" />
            </Grid>
            <Grid item xs="3">
              <SelectField selectData={defaultData} />
            </Grid>
          </Grid>
        </Section>
      </div>
    </>
  );
};

export default UserInquiry;
