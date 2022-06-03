import React from "react";
import { Box } from "@mui/material";

/**
 * @typedef {import('@mui/material').BoxProps} BoxProps
 */

/**
 * @type { React.FC<BoxProps> }
 */

const SkrBox = ({ sx, children, ...rest }) => {
  return (
    <Box sx={sx} {...rest}>
      {children}
    </Box>
  );
};

export default SkrBox;
