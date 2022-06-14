import React from "react";
import { InputAdornment } from "@mui/material";
/**
 * @typedef {import('@mui/material').InputAdornmentProps} InputAdornmentProps
 */

/**
 * @type { React.FC<InputAdornmentProps> }
 */

const SkrInputAdornment = ({ children, ...rest }) => {
  return <InputAdornment {...rest}>{children}</InputAdornment>;
};

export default SkrInputAdornment;
