import React from "react";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { makeStyles } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Grid, TextField } from "@mui/material";
import { Section } from "../components/Section";
import { SelectField } from "../components/Select";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "사용자조회", active: true },
];
const LayoutStyles = makeStyles((theme) => ({
  pager: {
    // backgroundColor: ""
  },
}));
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
