import React, { useState, useMemo, useContext } from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Theme } from "../src/assets/style/customTheme";
import {
  Box,
  Paper,
  Button,
  Typography,
  useMediaQuery,
  Tab,
  Chip,
  Stack,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MuiSelect from "./components/MuiSelect";
import MuiTabs from "./components/MuiTab";
import { Bookmark } from "react-ionicons";
import GridExample from "./components/table/AgGrid";
import MuiGrid from "./components/table/MuiGrid";
//guide
import Typo from "./guide/Typo";
import PageTit from "./guide/title/PageTit";
import SubTit from "./guide/title/SubTit";
import SectionTit from "./guide/title/SectionTit";
import List from "./guide/List";
import {
  BtnSize,
  BtnIcon,
  BtnVariation,
  BtnDisabled,
  GroupBtn,
} from "./guide/Btn";
import { LabelPositionTop, LabelPositionLeft, HiddenLabel } from "./guide/Form";

const MyButton = styled(Button)({
  boxShadow: "none",
});

const GuideTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 1.8125rem;
  font-weight: 600;
  color: ${theme.palette.grey[900]}
`
);
const GuideSubTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.palette.grey[700]}
`
);
const GuideKeyword = styled(Typography)(
  ({ theme }) => `
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.palette.error.main}
`
);

const Wrap = styled(Paper)({
  width: "100%",
  minHeight: "100vh",
  padding: "20px",
  backgroundColor: "#FFF",
});
const CustomBookmark = styled(Bookmark)(({ theme }) => ({
  "& path": {
    fill: `${theme.palette.primary.light}`,
  },
}));

const ComponentTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <CustomBookmark />
      <Typography variant="h1" mt={3}>
        공통 컴포넌트
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="common compoenents guide tabs"
          >
            <Tab label="Typography" value="1" />
            <Tab label="Badge" value="2" />
            <Tab label="Button" value="3" />
            <Tab label="Form" value="4" />
            <Tab label="List" value="5" />
            <Tab label="DataGrid" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GuideTitle>Typography</GuideTitle>
          <Typo />
          <GuideTitle mt={5}>Page Title</GuideTitle>
          <PageTit />
          <GuideTitle mt={5}>Sub Title</GuideTitle>
          <SubTit />
          <GuideTitle mt={5}>Section Title</GuideTitle>
          <SectionTit />
        </TabPanel>
        <TabPanel value="2">
          <Stack direction="row" spacing={1}>
            <Chip label="Badge" variant="outlined" />
            <Chip label="Badge" color="primary" />
            <Chip label="Badge" color="ready" />
            <Chip label="Badge" color="success" />
            <Chip label="Badge" color="warning" />
            <Chip label="Badge" color="error" />
            <Chip label="Badge" color="info" />
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <GuideTitle>Button Size</GuideTitle>
          <BtnSize />
          <GuideTitle>Button Icon </GuideTitle>
          <GuideSubTitle pb={8}>
            단일 아이콘 버튼, 마크업 유의 바람
          </GuideSubTitle>
          <BtnIcon />
          <GuideTitle mt={4}>Button Variants</GuideTitle>
          <BtnVariation />
          <GuideTitle mt={4}>Button Disabled</GuideTitle>
          <GuideSubTitle pb={8}>
            disabled porperty로 제어 유의 바람
          </GuideSubTitle>
          <BtnDisabled />
          <GuideTitle>Button Group</GuideTitle>
          <GuideSubTitle pb={8}>마크업 상이 유의 바람</GuideSubTitle>
          <GroupBtn />
        </TabPanel>
        <TabPanel value="4">
          <GuideTitle>Input</GuideTitle>
          <GuideSubTitle pb={8}>Label Position : Top</GuideSubTitle>
          <LabelPositionTop />
          <GuideSubTitle mt={40}>Label Position : Left</GuideSubTitle>
          <GuideKeyword pb={20}>
            styledComponents : DefaultTextField
          </GuideKeyword>
          <LabelPositionLeft />
          <GuideSubTitle pb={8} mt={40}>
            Label Hidden
          </GuideSubTitle>
          <HiddenLabel />
          {/* <MuiSelect /> */}
        </TabPanel>
        <TabPanel value="5">
          <List />
        </TabPanel>
        <TabPanel value="6">
          <GridExample />
          <MuiGrid mt={2} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

function App() {
  // console.log(themeMode);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Wrap>
          {/* <Bookmark color={theme.palette.primary.light} /> */}
          <ComponentTabs />
        </Wrap>
        {/* <img src={iconArrow}/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
