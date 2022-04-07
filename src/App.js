import React, { useState, useMemo, useContext } from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../src/assets/style/customTheme";
import {
  Box,
  Paper,
  Button,
  Typography,
  useMediaQuery,
  Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ThemeContext } from "./context/themeContext";
import MuiSelect from "./components/MuiSelect";
import MuiTabs from "./components/MuiTab";
import Typo from "./guide/Typo";
import PageTitle from "./components/title/PageTitle";
import SectionTitle from "./components/title/SectionTitle";
import SubTitle from "./components/title/SubTitle";

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 5,

  boxShadow: "none",
});

const GuideTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 1.8125rem;
  font-weight: 700;
  color: ${theme.palette.primary.light}
`
);

const Wrap = styled(Paper)({
  width: "100%",
  minHeight: "100vh",
  padding: "20px",
});

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <MyButton
      color="primary"
      variant="contained"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      Switch Theme
    </MyButton>
  );
};
const ComponentTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Typography variant="h1" mt={3}>
        공통 가이드 컴포넌트
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="common compoenents guide tabs"
          >
            <Tab label="Typography" value="1" />
            <Tab label="Button" value="2" />
            <Tab label="Select" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GuideTitle>Typography</GuideTitle>
          <Typo />
          <GuideTitle mt={5}>Page Title</GuideTitle>
          <PageTitle
            title="페이지 타이틀"
            breadCrumbs={{
              depth1: "Breadcrumb",
              depth2: "Breadcrumb",
              depth3: "Breadcrumb",
            }}
          />
          <GuideTitle mt={5}>Sub Title</GuideTitle>
          {/* 기본 */}
          <SubTitle title="서브타이틀 (Default)" />
          {/* 제목에 버튼이 있는 경우 */}
          <SubTitle
            type="isButton"
            title="서브타이틀 (isButton)"
            btn={{
              name: "버튼이름",
              color: "primary",
              style: "outlined",
            }}
          />

          <GuideTitle mt={5}>Section Title</GuideTitle>
          {/* 기본 */}
          <SectionTitle title="섹션별 타이틀" />
          {/* 제목에 부가적인 설명이 있는 경우 */}
          <SectionTitle
            type="isCaption"
            title="섹션별 타이틀"
            caption="(계약번호: 111111111111)"
          />
          {/* 제목에 버튼이 있는 경우 */}
          <SectionTitle
            type="isButton"
            title="섹션별 타이틀"
            btn={{
              name: "버튼이름",
              color: "primary",
              style: "contained",
            }}
          />
          {/* 제목에 버튼이 있는 경우 */}
          <SectionTitle
            type="isAll"
            title="섹션별 타이틀"
            caption="(계약번호: 111111111111)"
            btn={{
              name: "버튼이름",
              color: "info",
              style: "outlined",
            }}
          />
        </TabPanel>
        <TabPanel value="2">
          <MyButton color="primary" variant="contained">
            Button
          </MyButton>
          <MyButton color="secondary" variant="contained">
            1234567
          </MyButton>
          <Button color="primary" variant="outlined">
            Hello World
          </Button>
        </TabPanel>
        <TabPanel value="3">
          <MuiSelect />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

function App() {
  const systemTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState("light");
  const stateTheme = useMemo(() => ({ theme, setTheme }));

  let themeMode;
  if (theme === "dark" || systemTheme) {
    themeMode = darkTheme;
  } else {
    themeMode = lightTheme;
  }
  // console.log(themeMode);

  return (
    <>
      <ThemeContext.Provider value={stateTheme}>
        <ThemeProvider theme={themeMode}>
          <CssBaseline />
          <Wrap>
            <SwitchTheme />
            <ComponentTabs />
          </Wrap>
          {/* <img src={iconArrow}/> */}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
