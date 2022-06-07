import React from "react";
import { IconButton } from "@mui/material";
/**
 * @typedef {import('@mui/material').IconButtonProps} IconButtonProps
 */

/**
 * @type { React.FC<IconButtonProps> }
 */

const SkrIconButton = React.forwardRef(
  ({ color, size, disabled, children }, ref) => {
    return (
      <IconButton ref={ref} color={color} size={size} disabled={disabled}>
        {children}
      </IconButton>
    );
  }
);

export default SkrIconButton;
