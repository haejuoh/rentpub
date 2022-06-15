import React from "react";
import { Stack } from "@mui/material";

const LySection = ({ children, ...rest }) => {
  return (
    <>
      <Stack spacing={30}>{children}</Stack>
    </>
  );
};

export default LySection;
