import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { color } from "@mui/system";
const colors = {
  ci: {
    red: "#EA002C",
    orange: "#F47725",
  },
  status: {
    new: "#F5FFE8",
    success: "#67C23A",
    ready: "#F9AD3A",
    warning: "#FFE91F",
    danger: "#F65858",
    cancel: "#C4C5CE",
    done: "#178CF8",
  },
  fn: {
    cancel: {
      default: "#C4C5CE",
      hover: "#B4B5BE",
    },
    excel: {
      default: "#0F8953",
      hover: "#13784B",
    },
    delete: {
      default: "#F65858",
      hover: "#FFEBEB",
    },
  },
  primary: {
    b900: "#07857F",
    b700: "#009A93", //main**
    b500: "#32AEA9",
    b300: "#5ABCB8",
    b200: "#81C8C5",
    b100: "#B7D8D6",
    b050: "#DDF1F0",
  },
  secondary: {
    b900: "#FCCB1C",
    b700: "#FFD954", //main**
    b500: "#FFE91F",
    b300: "#FFFAEA",
  },
  bg: {
    b700: "#F2F5F5", //default**
    b500: "#FFFFFF", //white
    b300: "#F5FCFB", //light teal
  },
  grey: {
    b900: "#434C4C", //high**
    b700: "#677272", //medium
    b600: "#8C9695", //low
    b400: "#B0BABA", //placeholder
    b300: "#CCD2D2",
    b000: "#FFFFFF",
  },
  border: {
    b700: "#DCE6E5", //default**
    b500: "#C4CECC", //section
    b300: "#F1F5F4", //light
    b100: "#EDF9F8", //light green
  },
  shadow: {
    drop: "0px 0px 15px rgba(0, 0, 0, 0.15)",
    section: "0px 0px 15px rgba(196, 197, 206, 0.15)",
  },
  white: "#FFFFFF",
};

const Theme = createTheme({
  spacing: (value) => value * 5,
  shape: {
    borderRadius: 2,
  },
  borderColor: "palette.grey.200",
  // https://mui.com/customization/palette/
  palette: {
    common: {
      white: colors.white,
    },
    primary: {
      main: colors.primary.b700,
      dark: colors.primary.b900,
    },
    default: {
      main: colors.grey.b700,
      dark: colors.grey.b900,
      contrastText: colors.white,
    },
    disabled: {
      main: colors.fn.cancel.default,
      dark: colors.fn.cancel.hover,
      contrastText: colors.white,
    },
    secondary: {
      light: "#FFE91F",
      main: colors.secondary.b700,
      contrastText: "#1D1F29",
    },
    error: {
      main: "#F65858",
      contrastText: colors.white,
    },
    ready: {
      main: "#F9AD3A",
      contrastText: colors.white,
    },
    warning: {
      main: "#FFE91F",
      contrastText: "#565863",
    },
    info: {
      main: "#C4C5CE",
      contrastText: colors.white,
    },
    success: {
      main: "#67C23A",
      contrastText: colors.white,
    },
    grey: {
      // main: "#565863",
      0: colors.grey.b000,
      300: colors.grey.b300,
      400: colors.grey.b400,
      600: colors.grey.b600,
      700: colors.grey.b700,
      900: colors.grey.b900,
      contrastText: colors.grey.b000,
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
    bt_large: {
      fontSize: "1.142rem",
      fontWeight: 400,
    },
    ht: {
      fontSize: "0.625rem",
      fontWeight: 400,
    },
    label: {
      fontSize: "0.857rem",
      fontWeight: 400,
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
    MuiButton: {
      variants: [
        {
          props: { size: "small" },
          style: {
            minWidth: "auto",
            fontSize: "1rem",
            padding: "2px 6px",
            boxSizing: "border-box",
            boxShadow: "none",
            textTransform: "capitalize",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            minWidth: "auto",
            fontSize: "1rem",
            padding: "7px 12px",
            boxSizing: "border-box",
            boxShadow: "none",
            textTransform: "capitalize",
          },
        },
        {
          props: { size: "large" },
          style: {
            minWidth: "auto",
            fontSize: "1.142rem",
            padding: "10px 18px",
            boxSizing: "border-box",
            boxShadow: "none",
            textTransform: "capitalize",
          },
        },
      ],
    },
    MuiIcon: {
      variants: [
        {
          props: { size: "small" },
          style: {
            width: "14px",
            height: "14px",
          },
        },
      ],
    },
  },
});

export { Theme };
