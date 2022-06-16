import React from "react";
import { styled } from "@mui/styles";
import { theme } from "../../../assets/style/customTheme";

const StatusCheckWrap = styled("div")(({ theme, status }) => {
  return {
    "&": {
      display: "inline-block",
      width: "24px",
      height: "24px",
      "& svg": {
        width: "100%",
        height: "100%",
        "& path": {
          fill: theme.palette[status].main,
        },
      },
    },
  };
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
