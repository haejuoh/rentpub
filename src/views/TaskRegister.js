import React from "react";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, IconButton, Box, Stack } from "@mui/material";
import { Section } from "../components/Section";
import { DefaultTextField } from "../assets/style/common";
import { ReactComponent as IconChevronForward } from "../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronBack } from "../assets/images/icons/chevron-back.svg";
import { theme } from "../assets/style/customTheme";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "직무관리", active: true },
];
const TransferStyle = makeStyles((theme) => ({
  container: {
    // position: "relative",
  },
  wrap: {
    minHeight: "381px",
    // border: "1px solid #f00",
  },
  btn: {
    position: "absolute",
    top: "179px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "24px",
    height: "63px",
  },
}));

const TaskRegister = () => {
  const layout = LayoutStyle();
  const transfer = TransferStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <Stack spacing={30}>
          <Section variant="default">
            <Grid container rowSpacing={16} columnSpacing={15}>
              <Grid item xs="3">
                <DefaultTextField label="직무명" placeholder="직무명" value="차정영업" />
              </Grid>
              <Grid item xs="3">
                <DefaultTextField label="사용여부" placeholder="사용여부" value="사용여부" />
              </Grid>
              <Grid item xs="12">
                <DefaultTextField label="직무설명" placeholder="직무설명" value="직무설명을 위한 공간" />
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">
            <Box className={transfer.container}>
              <Grid container columnSpacing={64}>
                <Grid item xs={6} className={transfer.wrap}>
                  권한설정
                </Grid>
                <Grid item xs={6} className={transfer.wrap}>
                  권한설정
                </Grid>
              </Grid>
              <Box className={transfer.btn}>
                <IconButton color="function" variant="outlined" size="small">
                  <IconChevronForward />
                </IconButton>
                <IconButton color="function" variant="outlined" size="small">
                  <IconChevronBack />
                </IconButton>
              </Box>
            </Box>
          </Section>
        </Stack>
      </div>
    </>
  );
};

export default TaskRegister;
