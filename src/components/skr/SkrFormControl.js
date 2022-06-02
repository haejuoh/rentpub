import React from "react";
import { FormControl } from "@mui/material";

/**
 * @typedef {import('@mui/material').FormControlProps} FormControlProps
 */

/**
 * @type { React.FC<FormControlProps> }
 */

const SkrFormControl = ({
  color,
  disabled,
  error,
  fullWidth,
  focused,
  hiddenLabel,
  required,
  size,
  sx,
  variant,
  children,
}) => {
  return (
    <>
      <FormControl
        color={color}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        focused={focused}
        hiddenLabel={hiddenLabel}
        required={required}
        size={size}
        sx={sx}
        variant={variant}
      >
        {children}
      </FormControl>
    </>
  );
};

export default SkrFormControl;
