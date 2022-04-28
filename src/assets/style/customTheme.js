import { createTheme, experimental_sx as sx } from "@mui/material";
import { grey } from "@mui/material/colors";
import { color, shape } from "@mui/system";
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
    b700: "#F3F4F4", //default**
    b500: "#DDEBE9", //section
    b300: "#F1F5F4", //light
    b100: "#EEF7F4", //light green
  },
  shadow: {
    drop: "0px 0px 15px rgba(0, 0, 0, 0.15)",
    section: "0px 0px 15px rgba(196, 197, 206, 0.15)",
  },
  white: "#FFFFFF",
};
const fontSystem = {
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
    default: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    large: {
      fontSize: "1.142rem",
      fontWeight: 400,
    },
  },
  ht: {
    fontSize: "0.625rem",
    fontWeight: 400,
  },
  label: {
    fontSize: "0.857rem",
    fontWeight: 400,
  },
};

const Theme = createTheme({
  spacing: (value) => value * 1,
  shape: {
    borderRadius: 2,
  },
  borderColor: "palette.grey.200",
  // https://mui.com/customization/palette/
  palette: {
    common: {
      white: colorSystem.white,
    },
    primary: {
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
      contrastText: colorSystem.white,
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
      main: "#F65858",
      contrastText: colorSystem.white,
    },
    ready: {
      main: "#F9AD3A",
      contrastText: colorSystem.white,
    },
    warning: {
      main: "#FFE91F",
      contrastText: "#565863",
    },
    info: {
      main: "#C4C5CE",
      contrastText: colorSystem.white,
    },
    success: {
      main: "#67C23A",
      contrastText: colorSystem.white,
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
      paper: "#F1F2F5",
      default: "#FFF",
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
          b1: "div",
          b2: "div",
          sb1: "div",
          sb2: "div",
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
            fontSize: fontSystem.bt.default,
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
            fontSize: fontSystem.bt.default,
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
            fontSize: fontSystem.bt.large,
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
            svg: {
              "& path": {
                fill: colorSystem.grey.b700,
              },
            },
          },
        },

        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.secondary.b500,
            "&:hover, &:active": {
              backgroundColor: colorSystem.secondary.b300,
              borderColor: colorSystem.secondary.b500,
            },
            svg: {
              "& path": {
                fill: colorSystem.secondary.b500,
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
            backgroundColor: colorSystem.secondary.b500,
            "&:hover,&:active": {
              backgroundColor: colorSystem.secondary.b700,
            },
            svg: {
              "& path": {
                fill: colorSystem.grey.b700,
              },
            },
          },
        },
        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            backgroundColor: colorSystem.white,
            borderColor: colorSystem.secondary.b500,
            "&:hover, &:active": {
              backgroundColor: colorSystem.secondary.b300,
              borderColor: colorSystem.secondary.b500,
            },
            svg: {
              "& path": {
                fill: colorSystem.secondary.b500,
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
      ],
      styleOverrides: {
        root: sx({
          boxSizing: "border-box",
          border: "1px solid",
          borderRadius: 1,
          overflow: "hidden",
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
    //label
    MuiInputLabel: {
      defaultProps: {
        // control placeholder,
        shrink: true,
      },
      styleOverrides: {
        root: sx({
          "&.Mui-disabled": {
            color: colorSystem.grey.b900,
          },
        }),
      },
    },
    //Input
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
            fontSize: "1rem",
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
            "& + .MuiInput-root": {
              marginTop: 0,
            },
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
          "& label.Mui-focused,& label.Mui-error,& label.Mui-success ": {
            color: colorSystem.grey.b700,
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
          // paddingLeft: "10px",
          // paddingRight: "12px",
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
  },
});

export { Theme };
