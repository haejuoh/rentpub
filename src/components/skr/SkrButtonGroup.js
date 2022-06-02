import React from "react";
import { ButtonGroup } from "@mui/material";
/**
 * @typedef {import('@mui/material').ButtonGroupProps} ButtonGroupProps
 */

/**
 * @type { React.FC<ButtonGroupProps> }
 */

const SkrButtonGroup = ({
  color,
  variant,
  size,
  disabled,
  disableElevation,
  children,
}) => {
  return (
    <ButtonGroup
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      disableElevation={disableElevation}
    >
      {children}
    </ButtonGroup>
  );
};

export default SkrButtonGroup;
