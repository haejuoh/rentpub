import React from "react";
import { IconButton } from "@mui/material";
/**
 * @typedef {import('@mui/material').IconButtonProps} IconButtonProps
 */

/**
 * @type { React.FC<IconButtonProps> }
 */

const SkrIconButton = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <IconButton ref={ref} {...rest}>
      {children}
    </IconButton>
  );
});

SkrIconButton.displayName = "SkrIconButton";

export default SkrIconButton;
