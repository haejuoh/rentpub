import React from "react";
import { Typography } from "@mui/material";

/**
 * @typedef {import('@mui/material').TypographyProps} TypographyProps
 */

/**
 * @type { React.FC<TypographyProps> }
 */

const SkrTypography = ({ variant, children }) => {
  return (
    <>
      <Typography variant={variant}>{children}</Typography>
    </>
  );
};

export default SkrTypography;
