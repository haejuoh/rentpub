import React from "react";
import { Typography } from "@mui/material";

/**
 * @typedef {import('@mui/material').TypographyProps} TypographyProps
 */

/**
 * @type { React.FC<TypographyProps> }
 */

const SkrTypography = ({ variant, children, ...rest }) => {
  return (
    <>
      <Typography variant={variant} {...rest}>
        {children}
      </Typography>
    </>
  );
};

export default SkrTypography;
