import React from "react";
import { styled } from "@mui/material/styles";
import { Theme } from "./customTheme";
import { Box } from "@mui/material";
const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[900]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "15px",
  borderRadius: "4px",
  lineHeight: "1.68rem",
}));
const FlexBox = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export { CodeBox, FlexBox };
