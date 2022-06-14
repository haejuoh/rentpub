import React from "react";
import { styled } from "@mui/styles";
import { theme } from "../../../assets/style/customTheme";

const StatusCheckWrap = styled("div")(({ theme, status }) => {
  return status === "success"
    ? {
        "&": {
          display: "inline-block",
          width: "24px",
          height: "24px",
          "& svg": {
            width: "100%",
            height: "100%",
            "& path": {
              fill: `${theme.palette.success.main}`,
            },
          },
        },
      }
    : status === "danger"
    ? {
        "&": {
          display: "inline-block",
          width: "24px",
          height: "24px",
          "& svg": {
            width: "100%",
            height: "100%",
            "& path": {
              fill: `${theme.palette.danger.main}`,
            },
          },
        },
      }
    : status === "cancel"
    ? {
        "&": {
          display: "inline-block",
          width: "24px",
          height: "24px",
          "& svg": {
            width: "100%",
            height: "100%",
            "& path": {
              fill: `${theme.palette.cancel.main}`,
            },
          },
        },
      }
    : {};
});

const StatusIndicatorWrap = styled("div")(({ theme, status }) => ({
  "&": {
    display: "inline-block",
    width: "20px",
    height: "20px",
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
}));

export { StatusCheckWrap, StatusIndicatorWrap };
