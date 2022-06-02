import React from "react";
import { InputAdornment } from "@mui/material";

/**
 * @typedef {import('@mui/material').InputAdornment Props} InputAdornment Props
 */

/**
 * @type { React.FC<InputAdornment Props> }
 */

const SkrInputAdornment = ({ position, variant, sx, children }) => {
  return (
    <>
      <InputAdornment position={position} variant={variant} sx={sx}>
        {children}
      </InputAdornment>
    </>
  );
};

export default SkrInputAdornment;
