import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const LySectionTitle = styled(Box)({
  display: "flex",
  width: "100%",
  height: "52px",
  justifyContent: "space-between",
  alignItems: "center",
});

const SectionTitle = ({ type, title, btn, caption }) => {
  if (type === "isCaption") {
    return (
      <LySectionTitle>
        <Typography variant="h4">
          {title}
          <Typography variant="ct" pl={1}>
            {caption}
          </Typography>
        </Typography>
      </LySectionTitle>
    );
  } else if (type === "isButton") {
    return (
      <LySectionTitle>
        <Typography variant="h4">{title}</Typography>
        <Button color={btn.color} variant={btn.style}>
          {btn.name}
        </Button>
      </LySectionTitle>
    );
  } else if (type === "isAll") {
    return (
      <LySectionTitle>
        <Typography variant="h4">
          {title}
          <Typography variant="ct" pl={1}>
            {caption}
          </Typography>
        </Typography>
        <Button color={btn.color} variant={btn.style}>
          {btn.name}
        </Button>
      </LySectionTitle>
    );
  } else {
    return (
      <LySectionTitle>
        <Typography variant="h4">{title}</Typography>
      </LySectionTitle>
    );
  }
};

export default SectionTitle;
