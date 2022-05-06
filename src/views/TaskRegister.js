import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, IconButton, Box, Stack, Divider, TextField, InputAdornment } from "@mui/material";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { DefaultTextField } from "../assets/style/common";
import { Section } from "../components/Section";
import { PageTitle, SubTitle } from "../components/Title";
import { ReactComponent as IconChevronForward } from "../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronBack } from "../assets/images/icons/chevron-back.svg";
import { ReactComponent as IconSearch } from "../assets/images/icons/search.svg";
import MuiGrid from "../components/table/MuiGrid";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "직무관리", active: true },
];
const TitleDefault = {
  title: "직무상세",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
const TransferStyle = makeStyles((theme) => ({
  container: {
    // position: "relative",
  },
  wrap: {
    minHeight: "381px",
  },
  btnWrap: {
    position: "absolute",
    top: "179px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "24px",
  },
  btn: {
    "&:first-child": {
      marginBottom: "15px",
    },
  },
}));
const titleData = [
  {
    path: "/",
    menu: "기준정보",
  },
  {
    type: "bookmark",
    menu: "직무등록",
    active: true,
  },
];

const TaskRegister = () => {
  const layout = LayoutStyle();
  const transfer = TransferStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}></PageTitle>
        <Stack spacing={30}>
          <Section variant="default">
            <SubTitle titleData={TitleDefault} />
            <Box pt={15} pb={15}>
              <Divider />
            </Box>
            <Grid container rowSpacing={16} columnSpacing={15}>
              <Grid item xs={3}>
                <DefaultTextField label="직무명" placeholder="직무명" value="차정영업" />
              </Grid>
              <Grid item xs={3}>
                <DefaultTextField label="사용여부" placeholder="사용여부" value="사용여부" />
              </Grid>
              <Grid item xs={12}>
                <DefaultTextField label="직무설명" placeholder="직무설명" value="직무설명을 위한 공간" />
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">
            <Box className={transfer.container}>
              <Grid container columnSpacing={64}>
                <Grid item xs={6} className={transfer.wrap}>
                  권한설정
                  <Divider />
                  <MuiGrid />
                </Grid>
                <Grid item xs={6} className={transfer.wrap}>
                  권한선택
                  <Divider />
                  <TextField
                    hiddenLabel
                    fullWidth
                    placeholder="검색할 권한을 입력해주세요"
                    defaultValue=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton color="function">
                            <IconSearch />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <MuiGrid />
                </Grid>
              </Grid>
              <Box className={transfer.btnWrap}>
                <IconButton color="function" variant="outlined" size="small" className={transfer.btn}>
                  <IconChevronForward />
                </IconButton>
                <IconButton color="function" variant="outlined" size="small" className={transfer.btn}>
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
