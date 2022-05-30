import React from "react";
import { Grid } from "@mui/material";

const LySectionInfo = ({ children, ...rest }) => {
  return (
    <>
      <Grid container spacing={15} alignItems="center">
        {children}
      </Grid>
    </>
  );
};

export default LySectionInfo;
