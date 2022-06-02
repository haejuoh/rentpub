import React from "react";
import { Chip } from "@mui/material";
/**
 * @typedef {import('@mui/material').ChipProps} ChipProps
 */

/**
 * @type { React.FC<ChipProps> }
 */

const SkrChip = ({ label, color, variant, size, disabled, children }) => {
  return (
    <Chip
      label={label}
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
    >
      {children}
    </Chip>
  );
};

export default SkrChip;
