import { alpha, createTheme, lighten, darken } from "@mui/material";
const themeColors = {
  primary: "#07857F",
  secondary: "#6E759F",
  success: "#44D600",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#2C2E38",
  white: "#ffffff",
  primaryAlt: "#000C57",
};

const colors = {
  gradients: {
    blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
    blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
    blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
    orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
    orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
    purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
    pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
    pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
    green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
    black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
  },
  shadows: {
    success:
      "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
    error:
      "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
    info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
    primary:
      "0px 1px 4px rgba(85, 105, 255, 0.25), 0px 3px 12px 2px rgba(85, 105, 255, 0.35)",
    warning:
      "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
    card: "0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",
    cardSm:
      "0px 2px 3px rgba(159, 162, 191, 0.18), 0px 1px 1px rgba(159, 162, 191, 0.32)",
    cardLg:
      "0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)",
  },
  layout: {
    general: {
      bodyBg: "#f2f5f9",
    },
    sidebar: {
      background: themeColors.white,
      textColor: themeColors.secondary,
      dividerBg: "#f2f5f9",
      menuItemColor: "#242E6F",
      menuItemColorActive: themeColors.primary,
      menuItemBg: "transparent",
      menuItemBgActive: "#f2f5f9",
      menuItemIconColor: lighten(themeColors.secondary, 0.3),
      menuItemIconColorActive: themeColors.primary,
      menuItemHeadingColor: darken(themeColors.secondary, 0.3),
    },
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    trueWhite: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black,
    },
  },
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2),
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2),
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2),
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
};
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
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
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
