import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { ThemeProvider, styled } from "@mui/material/styles";

const LySubTitle = styled(Box)({
  display: "flex",
  width: "100%",
  height: "52px",
  justifyContent: "space-between",
  alignItems: "center",
});
const SubTit = styled(Box)(({ theme }) => ({
  paddingLeft: "11px",
  position: "relative",
  "& :before": {
    content: "''",
    display: "inline-block",
    width: "6px",
    height: "6px",
    clear: "both",
    backgroundColor: `${theme.palette.primary.light300}`,
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
}));

const SectionTitle = ({ type, title, btn }) => {
  if (type === "isButton") {
    return (
      <LySubTitle>
        <SubTit>
          <Typography variant="st1">{title}</Typography>
        </SubTit>
        <Button color={btn.color} variant={btn.style}>
          {btn.name}
        </Button>
      </LySubTitle>
    );
  } else {
    return (
      <LySubTitle>
        <SubTit>
          <Typography variant="st1">{title}</Typography>
        </SubTit>
      </LySubTitle>
    );
  }
};

export default SectionTitle;
