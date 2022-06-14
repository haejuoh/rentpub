import React from "react";
import { Button } from "@mui/material";
/**
 * @typedef {import('@mui/material').ButtonProps} ButtonProps
 */

/**
 * @type { React.FC<ButtonProps> }
 */

const SkrButton = ({
  color,
  variant,
  size,
  startIcon,
  endIcon,
  disabled,
  children,
  ...rest
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SkrButton;
