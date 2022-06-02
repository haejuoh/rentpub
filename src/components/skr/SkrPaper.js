import React from "react";
import { Paper } from "@mui/material";

/**
 * @typedef {import('@mui/material').PaperProps} PaperProps
 */

/**
 * @type { React.FC<PaperProps> }
 */

const SkrPaper = ({ component, elevation, square, sx, variant, children }) => {
  return (
    <>
      <Paper
        component={component}
        elevation={elevation}
        square={square}
        sx={sx}
        variant={variant}
      >
        {children}
      </Paper>
    </>
  );
};

export default SkrPaper;
