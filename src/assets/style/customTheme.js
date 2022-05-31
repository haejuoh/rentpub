import { createTheme, experimental_sx as sx } from "@mui/material";
import { grey } from "@mui/material/colors";
import { color, fontSize, shape } from "@mui/system";
import { makeStyles } from "@mui/material/styles";
import DefaultCheckBox from "../images/icons/checkBox-default.svg";
import DefaultThCheckBox from "../images/icons/checkBox-defaultTh.svg";
import HoverCheckBox from "../images/icons/checkBox-hover.svg";
import DisabledCheckBox from "../images/icons/checkBox-disabled.svg";
import CheckedCheckBox from "../images/icons/checkBox-checked.svg";
import CheckedDisabledCheckBox from "../images/icons/checkBox-checkedDisabled.svg";
import DefaultRadio from "../images/icons/radio-default.svg";
import HoverRadio from "../images/icons/radio-hover.svg";
import DisabledRadio from "../images/icons/radio-disabled.svg";
import CheckedRadio from "../images/icons/radio-selected.svg";
import CheckedDisabledRadio from "../images/icons/radio-selectedDisabled.svg";
const colorSystem = {
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
    disabled: "#C4C5CE",
    excel: {
      default: "#0F8953",
      hover: "#F1FFF9",
    },
    delete: {
      default: "#F65858",
      hover: "#FFEBEB",
    },
    modal: {
      hover: "#F8F8F8",
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
    b900: "#FCA21C",
    b700: "#FFBB54", //main**
    b500: "#FFE91F",
    b050: "#FFFAEA",
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
    b700: "#F3F4F4", //default**
    b500: "#DDEBE9", //section
    b300: "#F1F5F4", //light
    b100: "#EEF7F4", //light green
    grid: "#D8DDDD", //grid th
  },
  shadow: {
    drop: "0px 0px 15px rgba(0, 0, 0, 0.15)",
    section: "0px 0px 15px rgba(196, 197, 206, 0.15)",
  },
  white: "#FFFFFF",
};
const fontSystem = {
  h1: {
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  h2: {
    fontSize: "1.125rem",
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.125rem",
    fontWeight: 500,
  },
  h4: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  st1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  st2: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  b1: {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  sb1: {
    fontSize: "0.875rem",
    fontWeight: 500,
  },
  b2: {
    fontSize: "0.75rem",
    fontWeight: 400,
  },
  sb2: {
    fontSize: "0.75rem",
    fontWeight: 600,
  },
  ct: {
    fontSize: "0.75rem",
    fontWeight: 400,
  },
  bt: {
    default: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    large: {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
  ht: {
    fontSize: "0.625rem",
    fontWeight: 500,
  },
  label: {
    fontSize: "0.75rem",
    fontWeight: 500,
  },
};

const theme = createTheme({
  spacing: (value) => value * 1,
  shape: {
    borderRadius: 2,
  },
  borderColor: colorSystem.border.b700,
  // https://mui.com/customization/palette/
  palette: {
    common: {
      white: colorSystem.white,
    },
    primary: {
      bright: colorSystem.primary.b300,
      light: colorSystem.primary.b500,
      main: colorSystem.primary.b700,
      dark: colorSystem.primary.b900,
    },
    default: {
      main: colorSystem.grey.b700,
      dark: colorSystem.grey.b900,
      contrastText: colorSystem.white,
    },
    sub: {
      main: colorSystem.white,
      dark: colorSystem.primary.b050,
      contrastText: colorSystem.primary.b700,
    },
    secondary: {
      main: colorSystem.secondary.b500,
      dark: colorSystem.secondary.b700,
      contrastText: colorSystem.grey.b700,
    },
    function: {
      main: colorSystem.white,
      dark: colorSystem.bg.b300,
      contrastText: colorSystem.grey.b900,
    },
    excel: {
      main: colorSystem.fn.excel.default,
      dark: colorSystem.fn.excel.hover,
      contrastText: colorSystem.fn.excel.default,
    },
    delete: {
      main: colorSystem.fn.delete.default,
      contrastText: colorSystem.fn.delete.default,
    },
    cancel: {
      main: colorSystem.fn.disabled,
      contrastText: colorSystem.primary.b200,
    },
    error: {
      main: colorSystem.status.danger,
      contrastText: colorSystem.white,
    },
    danger: {
      main: colorSystem.status.danger,
      contrastText: colorSystem.white,
    },
    ready: {
      main: colorSystem.status.ready,
      contrastText: colorSystem.white,
    },
    warning: {
      main: colorSystem.status.warning,
      contrastText: colorSystem.white,
    },
    done: {
      main: colorSystem.status.done,
      contrastText: colorSystem.white,
    },
    success: {
      main: colorSystem.status.success,
      contrastText: colorSystem.white,
    },
    modal: {
      main: colorSystem.white,

      contrastText: colorSystem.status.cancel,
    },
    grey: {
      // main: "#565863",
      0: colorSystem.grey.b000,
      300: colorSystem.grey.b300,
      400: colorSystem.grey.b400,
      600: colorSystem.grey.b600,
      700: colorSystem.grey.b700,
      900: colorSystem.grey.b900,
      contrastText: colorSystem.grey.b000,
    },
    text: {
      primary: "#2C2E38",
      secondary: "#868E96",
    },
    action: {
      disabled: colorSystem.white,
      disabledBackground: colorSystem.fn.disabled,
      disabledOpacity: 1,
      hoverOpacity: 1,
    },
    background: {
      paper: colorSystem.white,
      default: colorSystem.white,
      700: colorSystem.bg.b700,
      500: colorSystem.bg.b500,
      300: colorSystem.bg.b300,
    },
    border: {
      700: colorSystem.border.b700,
      500: colorSystem.border.b500,
      300: colorSystem.border.b300,
      100: colorSystem.border.b100,
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: ["Pretendard", "sans-serif"].join(","),
    h1: fontSystem.h1,
    h2: fontSystem.h2,
    h3: fontSystem.h3,
    h4: fontSystem.h4,
    st1: fontSystem.st1,
    st2: fontSystem.st2,
    b1: fontSystem.b1,
    sb1: fontSystem.sb1,
    b2: fontSystem.b2,
    sb2: fontSystem.sb2,
    ct: fontSystem.ct,
    bt: fontSystem.bt.default,
    bt_large: fontSystem.bt.large,
    ht: fontSystem.ht,
    label: fontSystem.label,
    body1: fontSystem.b1,
  },
  shadows: {
    1: colorSystem.shadow.drop,
    2: colorSystem.shadow.section,
  },

  components: {
    //Typography
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          st1: "h3",
          st2: "h3",
          b1: "span",
          b2: "span",
          sb1: "span",
          sb2: "span",
        },
      },
    },
    //Button
    MuiButton: {
      variants: [
        {
          props: { size: "small" },
          style: {
            minWidth: "auto",
            height: "24px",
            fontSize: fontSystem.bt.default.fontSize,
            padding: "0 6px",
            ".MuiButton-endIcon": {
              marginLeft: "2px",
            },
          },
        },
        {
          props: { size: "medium" },
          style: {
            minWidth: "auto",
            height: "34px",
            fontSize: fontSystem.bt.default.fontSize,
            padding: "0 12px",
            ".MuiButton-endIcon": {
              marginLeft: "5px",
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            minWidth: "auto",
            height: "42px",
            fontSize: fontSystem.bt.large.fontSize,
            padding: "0 18px",
            ".MuiButton-endIcon": {
              marginLeft: "5px",
            },
          },
        },
        {
          props: { color: "primary" },
          style: {
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        },
        {
          props: { color: "primary", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.primary.b700,
            "&:hover, &:active": {
              backgroundColor: colorSystem.bg.b300,
              borderColor: colorSystem.primary.b700,
            },
            svg: {
              "& path": {
                fill: colorSystem.primary.b700,
              },
            },
          },
        },
        {
          props: { color: "default" },
          style: {
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        },
        {
          props: { color: "default", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.grey.b700,
            "&:hover, &:active": {
              backgroundColor: colorSystem.bg.b700,
              borderColor: colorSystem.grey.b700,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b700,
              },
            },
          },
        },
        {
          props: { color: "sub", variant: "contained" },
          style: {
            svg: {
              "& path": {
                fill: colorSystem.primary.b700,
              },
            },
          },
        },

        {
          props: { color: "secondary", variant: "contained" },
          style: {
            backgroundColor: colorSystem.secondary.b700,
            color: colorSystem.grey.b900,
            "&:hover, &:active": {
              backgroundColor: colorSystem.secondary.b900,
              color: colorSystem.grey.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b900,
              },
            },
          },
        },

        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.secondary.b900,
            color: colorSystem.secondary.b900,
            "&:hover, &:active": {
              backgroundColor: colorSystem.secondary.b050,
              borderColor: colorSystem.secondary.b900,
              color: colorSystem.secondary.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.secondary.b900,
              },
            },
          },
        },
        {
          props: { color: "function", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.grey.b900,
            color: colorSystem.grey.b900,
            "&:hover, &:active": {
              backgroundColor: colorSystem.bg.b300,
              borderColor: colorSystem.grey.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b900,
              },
            },
          },
        },
        {
          props: { color: "delete", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.fn.delete.default,
            "&:hover, &:active": {
              backgroundColor: colorSystem.fn.delete.hover,
              borderColor: colorSystem.fn.delete.default,
            },
            svg: {
              "& path": {
                fill: colorSystem.fn.delete.default,
              },
            },
          },
        },
        {
          props: { color: "cancel", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.fn.disabled,
            color: colorSystem.primary.b200,
            "&:hover, &:active": {
              backgroundColor: colorSystem.bg.b700,
              borderColor: colorSystem.fn.disabled,
            },
            svg: {
              "& path": {
                fill: colorSystem.primary.b200,
              },
            },
          },
        },
        {
          props: { color: "excel", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.fn.excel.default,
            "&:hover": {
              borderColor: colorSystem.fn.excel.default,
              backgroundColor: colorSystem.fn.excel.hover,
            },
            svg: {
              "& path": {
                fill: colorSystem.fn.excel.default,
              },
            },
          },
        },
        {
          props: { color: "modal" },
          style: {
            backgroundColor: colorSystem.white,
            color: colorSystem.status.cancel,
            "&:hover, &:active": {
              backgroundColor: colorSystem.fn.modal.hover,
            },
            svg: {
              "& path": {
                fill: colorSystem.status.cancel,
              },
            },
          },
        },
        {
          props: { disabled: true },
          style: {
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: sx({
          boxSizing: "border-box",
          boxShadow: "none",
          textTransform: "capitalize",
          "&:hover, &:active": {
            boxShadow: "none",
          },
          "&:disabled": {
            backgroundColor: colorSystem.fn.disabled,
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        }),

        //icon size
        iconSizeSmall: {
          "& > *:first-of-type": {
            width: "12px",
            height: "12px",
          },
        },
        iconSizeMedium: {
          "& > *:first-of-type": {
            width: "18px",
            height: "18px",
          },
        },
        iconSizeLarge: {
          "& > *:first-of-type": {
            width: "18px",
            height: "18px",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "function",
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid",
          },
        },
        {
          props: { size: "small" },
          style: {
            width: "24px",
            height: "24px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            width: "34px",
            height: "34px",
          },
        },
        {
          props: { size: "large" },
          style: {
            width: "42px",
            height: "42px",
          },
        },
        {
          props: { color: "primary" },
          style: {
            backgroundColor: colorSystem.primary.b700,
            "&:hover,&:active": {
              backgroundColor: colorSystem.primary.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        },
        {
          props: { color: "primary", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.primary.b700,
            "&:hover, &:active": {
              backgroundColor: colorSystem.bg.b300,
              borderColor: colorSystem.primary.b700,
            },
            svg: {
              "& path": {
                fill: colorSystem.primary.b700,
              },
            },
          },
        },
        {
          props: { color: "default" },
          style: {
            backgroundColor: colorSystem.grey.b700,
            "&:hover,&:active": {
              backgroundColor: colorSystem.grey.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        },
        {
          props: { color: "default", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,

            borderColor: colorSystem.grey.b700,
            "&:hover, &:active": {
              backgroundColor: colorSystem.bg.b700,
              borderColor: colorSystem.grey.b700,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b700,
              },
            },
          },
        },
        {
          props: { color: "sub" },
          style: {
            backgroundColor: colorSystem.white,
            "&:hover,&:active": {
              backgroundColor: colorSystem.primary.b050,
            },
            svg: {
              "& path": {
                fill: colorSystem.primary.b700,
              },
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            borderRadius: 2,
            backgroundColor: colorSystem.secondary.b700,
            "&:hover,&:active": {
              backgroundColor: colorSystem.secondary.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b900,
              },
            },
          },
        },
        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.secondary.b900,
            "&:hover, &:active": {
              backgroundColor: colorSystem.secondary.b050,
              borderColor: colorSystem.secondary.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.secondary.b900,
              },
            },
          },
        },
        {
          props: { color: "function" },
          style: {
            backgroundColor: colorSystem.white,
            "&:hover,&:active": {
              backgroundColor: colorSystem.bg.b300,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b900,
              },
            },
          },
        },
        {
          props: { color: "function", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.grey.b900,
            "&:hover,&:active": {
              backgroundColor: colorSystem.bg.b300,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b900,
              },
            },
          },
        },
        {
          props: { color: "delete", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.fn.delete.default,
            "&:hover,&:active": {
              backgroundColor: colorSystem.fn.delete.hover,
            },
            svg: {
              "& path": {
                fill: colorSystem.fn.delete.default,
              },
            },
          },
        },
        {
          props: { color: "cancel", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.fn.disabled,
            "&:hover,&:active": {
              backgroundColor: colorSystem.bg.b700,
            },
            svg: {
              "& path": {
                fill: colorSystem.primary.b200,
              },
            },
          },
        },
        {
          props: { color: "mdi" },
          style: {
            backgroundColor: colorSystem.primary.b700,
            "&:hover,&:active": {
              backgroundColor: colorSystem.primary.b900,
            },
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: sx({
          borderRadius: "2px",
          boxSizing: "border-box",
          "&:disabled": {
            backgroundColor: colorSystem.fn.disabled,
            svg: {
              "& path": {
                fill: colorSystem.white,
              },
            },
          },
        }),
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        color: "primary",
      },
      variants: [
        {
          props: { color: "primary" },
          style: {
            borderColor: colorSystem.primary.b700,
          },
        },
        {
          props: { color: "default" },
          style: {
            borderColor: colorSystem.grey.b700,
          },
        },
        {
          props: { color: "secondary" },
          style: {
            borderColor: colorSystem.secondary.b500,
          },
        },
        {
          props: { color: "function" },
          style: {
            borderColor: colorSystem.grey.b900,
          },
        },
        {
          props: { color: "delete" },
          style: {
            borderColor: colorSystem.fn.delete.default,
          },
        },
        {
          props: { color: "cancel" },
          style: {
            borderColor: colorSystem.fn.disabled,
          },
        },

        {
          props: { size: "small", variant: "outlined" },
          style: {
            height: "24px",
            "& .MuiButton-root": {
              height: "22px",
              "&:disabled": {
                height: "24px",
              },
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            height: "42px",
            "& .MuiButton-root": {
              height: "40px",
              "&:disabled": {
                height: "42px",
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: sx({
          boxSizing: "border-box",
          border: "1px solid",
          borderRadius: 1,
          overflow: "hidden",
          height: "34px",
          "& .MuiIconButton-root": {
            height: "32px",
          },
          button: {
            border: "none",
            position: "relative",
            "&:hover, &:active": {
              border: "none",
            },
            "&:not(:first-of-type)": {
              "&:before": {
                content: '""',
                display: "inline-block",
                width: "1px",
                height: "calc(50% - 3px)",
                // backgroundColor: "#ff0",
                backgroundColor: colorSystem.primary.b200,
                clear: "both",
                position: "absolute",
                left: -1,
                top: "50%",
                transform: "translateY(-50%)",
              },
            },
            "&:disabled": {
              border: "none",
              "&:not(:first-of-type)": {
                "&:before": {
                  backgroundColor: colorSystem.white,
                },
              },
            },
          },
        }),
        groupedOutlinedPrimary: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.primary.b200,
            },
          },
        }),
        groupedOutlinedDefault: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.grey.b300,
            },
          },
        }),
        groupedOutlinedSecondary: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.secondary.b500,
            },
          },
        }),
        groupedOutlinedSecondary: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.secondary.b500,
            },
          },
        }),
        groupedOutlinedFunction: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.grey.b900,
            },
          },
        }),
        groupedOutlinedDelete: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.fn.delete.default,
            },
          },
        }),
        groupedOutlinedCancel: sx({
          "&:not(:first-of-type)": {
            "&:before": {
              backgroundColor: colorSystem.fn.disabled,
            },
          },
        }),
        disableElevation: sx({
          border: "none",
        }),
      },
    },
    //toggle
    MuiToggleButton: {
      defaultProps: {
        color: "primary",
      },
      variants: [
        {
          props: { color: "standard" },
          style: {
            width: "20px",
            height: "20px",
            padding: 0,
            border: "none",
            backgroundColor: "transparent",
            svg: {
              width: "18px",
              height: "18px",
              "& path": {
                fill: colorSystem.status.cancel,
              },
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&.Mui-selected": {
              backgroundColor: "transparent",
              svg: {
                "& path": {
                  fill: colorSystem.primary.b700,
                },
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          },
        },
        {
          props: { color: "primary" },
          style: {
            padding: "7px",
            borderColor: colorSystem.primary.b700,
            svg: {
              width: "18px",
              height: "18px",
              "& path": {
                fill: colorSystem.primary.b700,
              },
            },
            "&:hover": {
              backgroundColor: colorSystem.bg.b300,
            },
            "&.Mui-selected": {
              svg: {
                "& path": {
                  fill: colorSystem.primary.b700,
                },
              },
              "&:hover": {
                backgroundColor: colorSystem.bg.b300,
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: sx({
          boxSizing: "border-box",
        }),
      },
    },
    //label
    MuiInputLabel: {
      defaultProps: {
        // control placeholder,
        shrink: true,
      },
      styleOverrides: {
        root: sx({
          fontSize: fontSystem.label.fontSize,
          fontWeight: fontSystem.label.fontWeight,
          color: colorSystem.grey.b900,
          transform: "none",
          position: "static",
          "&.Mui-disabled": {
            color: colorSystem.grey.b900,
          },
          "&.Mui-focused": {
            color: colorSystem.grey.b900,
          },
          "& + .MuiInput-root": {
            marginTop: 0,
          },
          "& .MuiInputLabel-asterisk": {
            color: colorSystem.status.danger,
          },
        }),
      },
    },
    //input
    MuiInput: {
      styleOverrides: {
        root: sx({
          "&:before": {
            borderBottomColor: colorSystem.bg.b700,
          },
          // height: "33px",
          "& input": {
            padding: "4px 12px 6px",
            color: colorSystem.grey.b700,
            lineHeight: "100%",
            fontSize: fontSystem.b1.fontSize,
            fontWeight: 400,
            "&::placeholder": {
              color: colorSystem.grey.b400,
            },
            "&:disabled": {
              backgroundColor: colorSystem.bg.b700,
            },
          },
          "&.Mui-focused": {
            backgroundColor: colorSystem.bg.b300,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomWidth: "1px",
            borderBottomColor: colorSystem.primary.b700,
          },
          "&:hover:not(.Mui-disabled)": {
            backgroundColor: colorSystem.bg.b300,
          },
          "&.Mui-disabled": {
            "&:before": {
              borderBottomStyle: "solid",
            },
            "&.MuiInputBase-colorSuccess": {
              "& + .Mui-disabled": {
                color: colorSystem.status.success,
              },
            },
            "&.Mui-error": {
              "& + .Mui-disabled": {
                color: colorSystem.status.danger,
              },
            },
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
      },
      variants: [
        {
          props: { focused: true },
          style: {
            borderColor: colorSystem.border.b700,
          },
        },
        {
          props: { disabled: true },
          style: {
            borderColor: colorSystem.border.b700,
          },
        },

        {
          props: { color: "success" },
          style: {
            "& .MuiInput-underline:before, & .MuiInput-underline:after": {
              borderBottomColor: colorSystem.status.success,
            },
            "& .MuiFormHelperText": {
              color: colorSystem.status.success,
            },
          },
        },
      ],
      styleOverrides: {
        root: sx({
          "& label": {
            color: colorSystem.grey.b900,
            position: "static",
            transform: "none",
            fontSize: fontSystem.label.fontSize,
            fontWeight: fontSystem.label.fontWeight,

            "&:hover": {
              color: colorSystem.grey.b900,
              zIndex: 1,
            },
            "&.Mui-focused": {
              color: colorSystem.grey.b900,
            },

            "& .MuiInputLabel-asterisk, & .MuiFormLabel-asterisk": {
              color: colorSystem.status.danger,
            },
          },
          "& label.Mui-error,& label.Mui-success ": {
            color: colorSystem.grey.b900,
          },
          "& .MuiInput-underline:before": {
            borderBottomWidth: "1px",
            borderBottomColor: colorSystem.border.b700,
          },
          "& .MuiInput-underline:after": {
            borderBottomWidth: "1px",
            borderBottomColor: colorSystem.primary.b700,
          },
          "& .Mui-error:after": {
            borderBottomColor: colorSystem.status.danger,
          },
          "& .Mui-disabled": {
            ".MuiInputAdornment-root": {
              backgroundColor: colorSystem.bg.b700,
            },
          },
          ".MuiInputAdornment-root": {
            backgroundColor: "transparent",
            ".MuiIconButton-root": {
              backgroundColor: "transparent",
            },
          },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: sx({
          fontSize: "0.625rem",
          color: colorSystem.status.success,
          "&.Mui-error": {
            color: colorSystem.status.danger,
          },
          "&.Mui-disabled": {
            color: colorSystem.grey.b400,
          },
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: sx({
          padding: "4px 12px 6px 10px",
          margin: "0",
          height: "100%",
          maxHeight: "100%",
          "& .MuiTypography-root": {
            color: colorSystem.grey.b700,
          },
          svg: {
            width: "14px",
            height: "14px",
            margin: "4.5px 0",
          },
        }),
      },
    },
    //select
    MuiSelect: {
      defaultProps: {
        autoWidth: true,
      },
      styleOverrides: {
        root: sx({
          height: "33px",
          padding: "9px 0",
          svg: {
            width: "14px",
            height: "14px",
            marginRight: "12px",
          },
          "&.Mui-focused": {
            svg: {
              transform: "scaleY(-1)",
            },
          },
          "&.Mui-disabled": {
            backgroundColor: colorSystem.bg.b700,
            opacity: 1,
            ".makeStyles-placeholder": {
              color: colorSystem.grey.b400,
            },
          },
          "&.MuiNativeSelect-nativeInput": {
            "&:disabled": {
              backgroundColor: colorSystem.bg.b700,
            },
          },
          "& .MuiSelect-select": {
            padding: "0px 10px 0px 12px !important",
            display: "flex",
            alignItems: "center",
            "&:focus": {
              backgroundColor: "transparent",
            },
            ".MuiListItemIcon-root": {
              minWidth: "14px",
              svg: {
                marginRight: "5px",
                "& path": {
                  fill: colorSystem.primary.b700,
                },
              },
            },
          },
        }),
      },
    },
    //select option list
    MuiPaper: {
      styleOverrides: {
        root: sx({
          boxShadow: "none",
          border: `1px solid ${colorSystem.border.b700}`,
          borderRadius: 2,
          marginTop: "5px",
          padding: "5px",
          // marginLeft: "8px",
          height: "160px",
          overflow: "hidden",
          overflowY: "auto",
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: sx({
          padding: 0,
        }),
      },
    },
    //Checkbox
    MuiCheckbox: {
      styleOverrides: {
        root: sx({
          padding: 0,

          "&:after": {
            content: "''",
            display: "inline-block",
            width: "24px",
            height: "24px",
            clear: "both",
            background: `url(${DefaultCheckBox}) no-repeat 50%/contain`,
            marginRight: 1,
          },
          "&:hover": {
            backgroundColor: "transparent",
            "&:after": {
              background: `url(${HoverCheckBox}) no-repeat 50%/contain`,
            },
          },
          "&.Mui-checked": {
            "&:after": {
              background: `url(${CheckedCheckBox}) no-repeat 50%/contain`,
            },
            "&.Mui-disabled": {
              "&:after": {
                background: `url(${CheckedDisabledCheckBox}) no-repeat 50%/contain`,
              },
            },
          },
          "&.Mui-disabled": {
            "&:after": {
              background: `url(${DisabledCheckBox}) no-repeat 50%/contain`,
            },
          },
          svg: {
            display: "none",
          },
        }),
      },
    },
    //Checkbox label
    MuiFormControlLabel: {
      styleOverrides: {
        root: sx({
          margin: 0,
          "& .MuiFormControlLabel-label": {
            color: colorSystem.grey.b900,
            fontSize: fontSystem.label.fontSize,
            fontWeight: fontSystem.label.fontWeight,
            paddingRight: 4,
            "&.Mui-disabled": {
              color: colorSystem.grey.b900,
              opacity: 0.5,
            },
          },
        }),
      },
    },
    //Radio
    MuiRadio: {
      styleOverrides: {
        root: sx({
          padding: 0,

          "&:after": {
            content: "''",
            display: "inline-block",
            width: "24px",
            height: "24px",
            clear: "both",
            background: `url(${DefaultRadio}) no-repeat 50%/contain`,
            marginRight: 1,
          },
          "&:hover": {
            backgroundColor: "transparent",
            "&:after": {
              background: `url(${HoverRadio}) no-repeat 50%/contain`,
            },
          },
          "&.Mui-checked": {
            "&:after": {
              background: `url(${CheckedRadio}) no-repeat 50%/contain`,
            },
            "&.Mui-disabled": {
              "&:after": {
                background: `url(${CheckedDisabledRadio}) no-repeat 50%/contain`,
              },
            },
          },
          "&.Mui-disabled": {
            "&:after": {
              background: `url(${DisabledRadio}) no-repeat 50%/contain`,
            },
          },
          svg: {
            display: "none",
          },
        }),
      },
    },
    //Group check, select
    MuiFormGroup: {
      styleOverrides: {
        root: sx({
          flexDirection: "row",
          gap: "10px",
        }),
      },
    },
    //Data grid
    // MuiTabPanel: {
    //   styleOverrides: {
    //     root: sx({
    //       padding: 0,
    //     }),
    //   },
    // },
    MuiDataGrid: {
      styleOverrides: {
        root: sx({
          border: "none",
        }),
        columnHeaders: {
          borderColor: colorSystem.border.b700,
          // minHeight: "40px",
          // maxHeight: "40px",
          // lineHeight: "40px",
        },

        columnHeader: {
          padding: "0 8px",
          flex: "1 1 104px",
          "&:focus-within": {
            outline: "none",
          },
          "&:after": {
            content: "''",
            display: "inline-block",
            width: "1px",
            height: "14px",
            backgroundColor: colorSystem.border.grid,
            clear: "both",
            transform: "translateX(8px)",
          },
          "&:last-child": {
            "&:after": {
              display: "none",
            },
          },
          "&:focus": {
            outline: "none",
          },
        },
        columnHeaderTitle: {
          color: colorSystem.grey.b600,
          fontSize: fontSystem.sb1.fontSize,
          fontWeight: fontSystem.sb1.fontWeight,
          gap: "5px",
        },
        columnHeaderTitleContainer: {
          display: "inline-flex",
          gap: "5px",
          "& .MuiCheckbox-root": {
            "&:after": {
              backgroundImage: `url(${DefaultThCheckBox})`,
            },
            "&.Mui-checked": {
              "&:after": {
                background: `url(${CheckedCheckBox}) no-repeat 50%/contain`,
              },
            },
          },
        },
        columnHeaderTitleContainerContent: {
          display: "none",
          "& .MuiCheckbox-root": {
            "&:after": {
              backgroundImage: `url(${DefaultThCheckBox})`,
            },
          },
        },
        columnSeparator: {
          svg: {
            display: "none",
          },
        },
        iconButtonContainer: {
          ".MuiButtonBase-root": {
            width: "18px",
            height: "18px",
            padding: 0,
            backgroundColor: "transparent",
            svg: {
              "& path": {
                fill: colorSystem.grey.b600,
              },
            },
          },
          "&:hover": {
            ".MuiButtonBase-root": {
              backgroundColor: "transparent",
              svg: {
                "& path": {
                  fill: colorSystem.grey.b600,
                },
              },
            },
          },
        },
        menuIcon: {
          marginRight: 0,
          ".MuiButtonBase-root": {
            width: "18px",
            height: "18px",
            padding: 0,
            backgroundColor: "transparent",
            svg: {
              "& path": {
                fill: colorSystem.grey.b600,
              },
            },
          },
        },
        sortIcon: {
          "& path": {
            fill: colorSystem.grey.b600,
          },
        },
        ColumnMenuIcon: {
          svg: {
            "& path": {
              fill: colorSystem.grey.b600,
            },
          },
        },
        row: {
          "&.Mui-selected": {
            backgroundColor: colorSystem.bg.b300,
            "&:hover": {
              backgroundColor: colorSystem.bg.b300,
            },
          },
          "&:hover": {
            backgroundColor: colorSystem.bg.b300,
          },
        },
        cell: {
          color: colorSystem.grey.b900,
          borderColor: colorSystem.border.b700,
          fontSize: fontSystem.b1.fontSize,
          "&:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-actionsCell": {
            "& .MuiIconButton-root": {
              width: "18px",
              height: "18px",
              padding: 0,
              backgroundColor: "transparent",
              svg: {
                "& path": {
                  fill: colorSystem.grey.b900,
                },
              },
            },
          },
        },
        menu: {
          "& .MuiPaper-root": {
            height: "auto",
            width: "160px",
            padding: 0,
          },
          "& .MuiMenuItem-root": {
            padding: "8px",
            "&:hover, &:focus": {
              backgroundColor: colorSystem.bg.b300,
              color: colorSystem.primary.b500,
              "& .MuiListItemIcon-root": {
                svg: {
                  "& path": {
                    fill: colorSystem.primary.b500,
                  },
                },
              },
            },
            "& .MuiListItemIcon-root": {
              minWidth: "14px",
              marginRight: "5px",
              svg: {
                "& path": {
                  fill: colorSystem.grey.b700,
                },
              },
            },
            "&.MuiSwitch-root": {
              padding: "8px 0",
            },
          },
        },

        footerContainer: {
          borderColor: colorSystem.border.b500,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: sx({
          minWidth: "1440px",
          margin: 0,
          padding: "0 !important",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }),
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: 2,
          marginRight: 2,
        },
      },
    },
    //chip
    MuiChip: {
      variants: [
        {
          props: { color: "default" },
          style: {
            borderColor: colorSystem.border.b500,
            color: colorSystem.grey.b600,
          },
        },
        {
          props: { color: "done" },
          style: {
            backgroundColor: colorSystem.status.done,
            color: colorSystem.white,
          },
        },
        {
          props: { color: "danger" },
          style: {
            backgroundColor: colorSystem.status.danger,
            color: colorSystem.white,
          },
        },
        {
          props: { color: "success" },
          style: {
            backgroundColor: colorSystem.status.success,
            color: colorSystem.white,
          },
        },
        {
          props: { color: "primary" },
          style: {
            backgroundColor: colorSystem.primary.b700,
            color: colorSystem.white,
          },
        },
        {
          props: { color: "ready" },
          style: {
            backgroundColor: colorSystem.status.ready,
            color: colorSystem.white,
          },
        },
        {
          props: { color: "warning" },
          style: {
            backgroundColor: colorSystem.status.warning,
            color: colorSystem.grey.b700,
          },
        },
        {
          props: { color: "danger" },
          style: {
            backgroundColor: colorSystem.status.danger,
            color: colorSystem.white,
          },
        },
        {
          props: { color: "cancel" },
          style: {
            backgroundColor: colorSystem.status.cancel,
            color: colorSystem.white,
          },
        },
        {
          props: { size: "large" },
          style: {
            height: "34px",
            borderRadius: "17px",
            fontSize: fontSystem.b1.fontSize,
            fontWeight: fontSystem.b1.fontWeight,
            ".MuiChip-label": {
              paddingLeft: "14px",
              paddingRight: "14px",
              lineHeight: "34px",
            },
          },
        },
      ],
      styleOverrides: {
        root: sx({
          height: "19px",
          borderRadius: "8px",
          boxSizing: "border-box",
          fontSize: fontSystem.ht.fontSize,
          fontWeight: fontSystem.ht.fontWeight,
        }),
        label: {
          paddingLeft: "8px",
          paddingRight: "8px",
          lineHeight: "19px",
        },
      },
    },
    MuiDivider: {
      variants: [
        //section
        {
          props: { type: "section15" },
          style: {
            borderColor: colorSystem.border.b700,
            margin: "15px 0",
          },
        },
        {
          props: { type: "section20" },
          style: {
            borderColor: colorSystem.border.b700,
            margin: "20px 0",
          },
        },
        {
          props: { type: "section30" },
          style: {
            borderColor: colorSystem.border.b700,
            margin: "30px 0",
          },
        },
        //Function
        {
          props: { type: "function15" },
          style: {
            borderColor: colorSystem.border.b100,
            margin: "15px 0",
          },
        },
        {
          props: { type: "function20" },
          style: {
            borderColor: colorSystem.border.b100,
            margin: "20px 0",
          },
        },
        {
          props: { type: "function30" },
          style: {
            borderColor: colorSystem.border.b100,
            margin: "30px 0",
          },
        },
        //Item
        {
          props: { type: "item15" },
          style: {
            borderColor: colorSystem.border.b300,
            margin: "15px 0",
          },
        },
        {
          props: { type: "item20" },
          style: {
            borderColor: colorSystem.border.b300,
            margin: "20px 0",
          },
        },
        {
          props: { type: "item30" },
          style: {
            borderColor: colorSystem.border.b300,
            margin: "30px 0",
          },
        },
      ],
    },
    // switch
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "34px",
          height: "24px",
          padding: "8px 0",
          paddingLeft: "0",
          paddingRight: "0",
          ".Mui-disabled &": {
            opacity: 0.5,
          },
          "& + .MuiFormControlLabel-label": {
            fontSize: fontSystem.b1.fontSize,
          },
        },
        track: {
          backgroundColor: colorSystem.border.b500,
          opacity: "1",
        },
        switchBase: {
          top: "2px",
          padding: "0",
          color: colorSystem.bg.b700,
          "&.Mui-checked": {
            transform: "translate(14px)",
            "& + .MuiSwitch-track": {
              backgroundColor: colorSystem.primary.b300,
              opacity: "1",
            },
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-disabled": {
            color: colorSystem.bg.b700,
            opacity: "1",
            "& + .MuiSwitch-track": {
              backgroundColor: colorSystem.border.b500,
              opacity: "1",
            },
          },
        },
        thumb: {
          boxShadow: "none",
        },
      },
    },
    // link
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecorationColor: "inherit",
        },
      },
    },
    //collapse
    MuiCollapse: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
      },
    },
    //dialog
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "30px",
          height: "auto",
        },
        paperWidthSm: {
          maxWidth: "440px",
          width: "440px",
        },
        paperWidthMd: {
          maxWidth: "600px",
          width: "600px",
        },
        paperWidthLg: {
          maxWidth: "924px",
          width: "924px",
        },
        paperWidthXl: {
          maxWidth: "1200px",
          width: "1200px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 0,
          color: colorSystem.grey.b900,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "30px 0 0 0",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export { theme };
