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

const subTit = styled(Box)(
  ("&:before": {
    content: "",
    display: "inline-block",
    width: "6px",
    height: "6px",
    clear: "both",
    backgroundColor: "#f00",
  })
  //   ({ theme }) => `
  //   "&:before": {
  //     content: "",
  //     display: inline-block,
  //     width: 6px,
  //     height: 6px,
  //     clear: both,
  //     backgroundColor: ${theme.palette.primary.light300},,

  //   }
  // `
);

const SectionTitle = ({ type, title, btn }) => {
  if (type === "isButton") {
    return (
      <LySubTitle>
        <subTit>
          <Typography variant="st1">{title}</Typography>
        </subTit>
        <Button color={btn.color} variant={btn.style}>
          {btn.name}
        </Button>
      </LySubTitle>
    );
  } else {
    return (
      <LySubTitle>
        <subTit>
          <Typography variant="st1">{title}</Typography>
        </subTit>
      </LySubTitle>
    );
  }
};

export default SectionTitle;
