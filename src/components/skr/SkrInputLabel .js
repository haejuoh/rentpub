import React from "react";
import { InputLabel } from "@mui/material";

/**
 * @typedef {import('@mui/material').InputLabelProps} InputLabelProps
 */

/**
 * @type { React.FC<InputLabelProps> }
 */

const SkrInputLabel = ({
  variant,
  color,
  disabled,
  error,
  focused,
  required,
  sx,
  children,
}) => {
  return (
    <>
      <InputLabel
        variant={variant}
        color={color}
        disabled={disabled}
        error={error}
        focused={focused}
        required={required}
        sx={sx}
      >
        {children}
      </InputLabel>
    </>
  );
};

export default SkrInputLabel;
