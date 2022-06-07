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
  inputProps,
  name,
  onChange,
  size,
  sx,
  value,
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
        inputProps={inputProps}
        name={name}
        onChange={onChange}
        size={size}
        sx={sx}
        value={value}
      />
    </>
  );
};

export default SkrRadio;
