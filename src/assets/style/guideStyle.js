import React from "react";
import { styled } from "@mui/material/styles";
import { theme } from "./customTheme";
import { Box, Typography } from "@mui/material";
const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[900]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "15px",
  borderRadius: "4px",
  lineHeight: "1.68rem",
}));
const ConditionTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 1.2rem;
  font-weight: 500;
  color:  ${theme.palette.grey[900]}
`
);
const FlexBox = styled(Box)(({ theme }) => ({
  flex: 1,
}));
const GuideTitle = styled("h3")(
  ({ theme }) => `
  font-size: 1.8125rem;
  font-weight: 600;
  color: ${theme.palette.grey[900]}
`
);
const GuideSubTitle = styled("h4")(
  ({ theme }) => `
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.palette.grey[700]}
`
);
const GuideKeyword = styled("h5")(
  ({ theme }) => `
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.palette.error.main}
`
);

export {
  CodeBox,
  FlexBox,
  GuideTitle,
  GuideSubTitle,
  GuideKeyword,
  ConditionTitle,
};
