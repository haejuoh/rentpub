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
  Chip,
  Stack,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ThemeContext } from "./context/themeContext";
import MuiSelect from "./components/MuiSelect";
import MuiTabs from "./components/MuiTab";
import Typo from "./guide/Typo";
import PageTit from "./guide/PageTit";
import SubTit from "./guide/SubTit";
import SectionTit from "./guide/SectionTit";
import List from "./guide/List";
import { Bookmark } from "react-ionicons";
import GridExample from "./components/table/AgGrid";
import MuiGrid from "./components/table/MuiGrid";

// import { ReactComponent as IconLight } from "./assets/images/icons/sunny.svg";

const MyButton = styled(Button)({
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
const CustomBookmark = styled(Bookmark)(({ theme }) => ({
  "& path": {
    fill: `${theme.palette.primary.light}`,
  },
}));

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
            <Tab label="Select" value="4" />
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
        <TabPanel value="4">
          <MuiSelect />
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
            {/* <Bookmark color={theme.palette.primary.light} /> */}
            <ComponentTabs />
          </Wrap>
          {/* <img src={iconArrow}/> */}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
