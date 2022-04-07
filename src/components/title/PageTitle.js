import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as IconChevron } from "../../assets/images/icons/chevron-forward.svg";

const LyPageTitle = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-end",
  paddingBottom: "25px",
});

const PageTitle = ({ title, breadCrumbs }) => {
  return (
    <LyPageTitle>
      <Typography variant="h3">{title}</Typography>
      <Breadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
        <Typography>{breadCrumbs.depth1}</Typography>
        <Typography color="text.grey.600">{breadCrumbs.depth2}</Typography>
        <Typography color="text.primary">{breadCrumbs.depth3}</Typography>
      </Breadcrumbs>
    </LyPageTitle>
  );
};

export default PageTitle;
