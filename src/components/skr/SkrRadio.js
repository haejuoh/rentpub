import React from "react";
import { Radio } from "@mui/material";

/**
 * @typedef {import('@mui/material').RadioProps} RadioProps
 */

/**
 * @type { React.FC<RadioProps> }
 */

const SkrRadio = ({
  checked,
  checkedIcon,
  color,
  disabled,
  icon,
  id,
  name,
  onChange,
  size,
  sx,
}) => {
  return (
    <>
      <Radio
        checked={checked}
        checkedIcon={checkedIcon}
        color={color}
        disabled={disabled}
        icon={icon}
        id={id}
        name={name}
        onChange={onChange}
        size={size}
        sx={sx}
      />
    </>
  );
};

export default SkrRadio;
