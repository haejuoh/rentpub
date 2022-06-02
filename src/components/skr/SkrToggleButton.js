import React from "react";
import { ToggleButton } from "@mui/material";

/**
 * @typedef {import('@mui/material').ToggleButtonProps} ToggleButtonProps
 */

/**
 * @type { React.FC<ToggleButtonProps> }
 */

const SkrToggleButton = ({
  color,
  disabled,
  onChange,
  onClick,
  selected,
  size,
  sx,
  value,
  children,
}) => {
  return (
    <>
      <ToggleButton
        color={color}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        selected={selected}
        size={size}
        sx={sx}
        value={value}
      >
        {children}
      </ToggleButton>
    </>
  );
};

export default SkrToggleButton;
