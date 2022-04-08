import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  spacing: (value) => value * 5,
  shape: {
    borderRadius: 1,
  },
  borderColor: "palette.grey.200",
  // https://mui.com/customization/palette/
  palette: {
    common: {
      white: "#FFF",
    },
    primary: {
      light: "#1F43FF",
      light100: "#D2D9FF",
      light300: "#8FA1FF",
      light400: "#6D85FF",
      main: "#0C2CD1",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#FFF",
    },
    secondary: {
      light: "#FFE91F",
      main: "#FCCB1C",
      contrastText: "#1D1F29",
    },
    error: {
      main: "#F65858",
      contrastText: "#FFF",
    },
    ready: {
      main: "#F9AD3A",
      contrastText: "#FFF",
    },
    warning: {
      main: "#FFE91F",
      contrastText: "#565863",
    },
    info: {
      main: "#C4C5CE",
      contrastText: "#FFF",
    },
    success: {
      main: "#67C23A",
      contrastText: "#FFF",
    },
    grey: {
      main: "#565863",
      0: "#FFF",
      100: "#F9FBFF",
      200: "#F1F2F5",
      300: "#DCDDE5",
      400: "#C4C5CE",
      500: "#8F919A",
      600: "#757781",
      700: "#565863",
      900: "#2C2E38",
      contrastText: "#FFF",
    },
    text: {
      primary: "#2C2E38",
      secondary: "#868E96",
    },
    action: {
      disabled: "pallete.grey.500",
    },
    background: {
      paper: "#F1F2F5",
      default: "#FFF",
    },
  },
  typography: {
    fontFamily: ["Pretendard", "sans-serif"].join(","),
    h1: {
      fontSize: "2.0714rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1.714rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.428rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.142rem",
      fontWeight: 500,
    },
    st1: {
      fontSize: "1.142rem",
      fontWeight: 400,
    },
    st2: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    b1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    sb1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    b2: {
      fontSize: "0.857rem",
      fontWeight: 400,
    },
    sb2: {
      fontSize: "0.857rem",
      fontWeight: 600,
    },
    ct: {
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    bt: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    ht: {
      fontSize: "0.857rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          st1: "h3",
          st2: "h3",
          b1: "div",
          b2: "div",
          sb1: "div",
          sb2: "div",
        },
      },
    },
  },
});
const darkTheme = createTheme({
  spacing: (value) => value * 5,
  shape: {
    borderRadius: 1,
  },
  borderColor: "palette.grey.200",
  // https://mui.com/customization/palette/
  palette: {
    common: {
      white: "#FFF",
    },
    primary: {
      light: "#FF833D",
      light100: "#FFE6D8",
      light300: "#FFCDB1",
      light400: "#FFA877",
      main: "#F67025",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#FFF",
    },
    secondary: {
      light: "#9D53FF",
      main: "#7219E9",
      contrastText: "#FFF",
    },
    error: {
      main: "#F65858",
      contrastText: "#FFF",
    },
    ready: {
      main: "#F9AD3A",
      contrastText: "#FFF",
    },
    warning: {
      main: "#FFE91F",
      contrastText: "#565863",
    },
    info: {
      main: "#C4C5CE",
      contrastText: "#FFF",
    },
    success: {
      main: "#67C23A",
      contrastText: "#FFF",
    },
    grey: {
      main: "#DCD8E1",
      0: "#29242F",
      100: "#29242F",
      200: "#322C3A",
      300: "#584F66",
      400: "#6E6080",
      500: "#5D536B",
      600: "#8E8996",
      700: "#DCD8E1",
      900: "#FFF",
      contrastText: "#29242F",
    },
    text: {
      primary: "#FFF",
      secondary: "#DCD8E1",
    },
    action: {
      disabled: "pallete.grey.500",
    },
    background: {
      paper: "#29242F",
      default: "#322C3A",
    },
  },
  typography: {
    fontFamily: ["Pretendard", "sans-serif"].join(","),
    h1: {
      fontSize: "2.0714rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1.714rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.428rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.142rem",
      fontWeight: 500,
    },
    st1: {
      fontSize: "1.142rem",
      fontWeight: 400,
    },
    st2: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    b1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    sb1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    b2: {
      fontSize: "0.857rem",
      fontWeight: 400,
    },
    sb2: {
      fontSize: "0.857rem",
      fontWeight: 600,
    },
    ct: {
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    bt: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    ht: {
      fontSize: "0.857rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          st1: "h3",
          st2: "h3",
          b1: "div",
          b2: "div",
          sb1: "div",
          sb2: "div",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
