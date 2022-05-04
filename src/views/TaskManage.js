import React from "react";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { Grid, TextField, IconButton, Stack } from "@mui/material";
import { Section } from "../components/Section";
import { SelectField } from "../components/Select";
import { ReactComponent as IconSearch } from "../assets/images/icons/search.svg";

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

const TaskManage = () => {
  const layout = LayoutStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <Stack spacing={30}>
          <Section variant="default">
            <Grid container columnSpacing={20}>
              <Grid item xs="3">
                <SelectField selectData={defaultData} />
              </Grid>
              <Grid item xs="9">
                <TextField label="직무명" placeholder="직무명" />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" pt={18}>
              <Grid item>
                <IconButton color="primary">
                  <IconSearch />
                </IconButton>
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">DataGrid</Section>
        </Stack>
      </div>
    </>
  );
};

export default TaskManage;
