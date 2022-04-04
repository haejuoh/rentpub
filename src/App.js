import React, { useState, useMemo, useContext } from "react";
import { styled } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../src/assets/style/customTheme";
import { Paper, Button, Typography, useMediaQuery } from "@mui/material";
// import { ReactComponent as IconArrow } from "./assets/icons/chevron-down-sharp.svg";
import { ThemeContext } from "./context/themeContext";
import MuiSelect from "./components/MuiSelect";

const MyButton = styled(Button)({
  border: 0,
  borderRadius: 5,
  boxShadow: "none",
});

const Wrap = styled(Paper)({
  width: "100%",
  minHeight: "100vh",
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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          <Wrap>
            <SwitchTheme />
            <Typography variant="h1">공통 가이드 컴포넌트</Typography>
            <Typography variant="h2">Typography</Typography>

            <MyButton color="primary" variant="contained">
              Button
            </MyButton>
            <MyButton color="secondary" variant="contained">
              1234567
            </MyButton>
            <Button color="primary" variant="outlined">
              Hello World
            </Button>
            <MuiSelect />
          </Wrap>
          {/* <img src={iconArrow}/> */}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
