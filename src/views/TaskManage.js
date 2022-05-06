import React from "react";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { Grid, TextField, Stack } from "@mui/material";
import { Section } from "../components/Section";
import { SelectField } from "../components/Select";
import { PageTitle } from "../components/Title";
import SectionTitle from "../components/title/SectionTitle";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "직무관리", active: true },
];
const defaultData = {
  label: "사용여부",
  // select combo box 너비 지정
  style: { PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } } },
  option: ["전체"],
  disabled: false,
  isIcon: false,
};
const titleData = [
  {
    path: "/",
    menu: "기준정보",
  },
  {
    type: "bookmark",
    menu: "직무조회",
    active: true,
  },
];

const TaskManage = () => {
  const layout = LayoutStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}></PageTitle>
        <Stack spacing={30}>
          <Section variant="search">
            <Grid container columnSpacing={20}>
              <Grid item xs={3}>
                <SelectField selectData={defaultData} />
              </Grid>
              <Grid item xs={9}>
                <TextField label="직무명" placeholder="직무명" />
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">
            <SectionTitle type="isAll" title="페이지 타이틀" caption="(계약번호: 111111111111)" btn={{ name: "버튼이름", color: "default", style: "outlined" }} />
          </Section>
        </Stack>
      </div>
    </>
  );
};

export default TaskManage;
