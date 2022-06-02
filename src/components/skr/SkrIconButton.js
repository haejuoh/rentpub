import React from "react";
import { IconButton } from "@mui/material";
/**
 * @typedef {import('@mui/material').IconButtonProps} IconButtonProps
 */

/**
 * @type { React.FC<IconButtonProps> }
 */

const SkrIconButton = ({ color, size, disabled, children }) => {
  return (
    <IconButton color={color} size={size} disabled={disabled}>
      {children}
    </IconButton>
  );
};

export default SkrIconButton;
