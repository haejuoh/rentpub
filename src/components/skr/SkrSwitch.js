import React from "react";
import { Switch } from "@mui/material";

/**
 * @typedef {import('@mui/material').SwitchProps} SwitchProps
 */

/**
 * @type { React.FC<SwitchProps> }
 */

const SkrSwitch = ({
  checked,
  color,
  defaultChecked,
  disabled,
  inputProps,
  name,
  onChange,
  required,
  size,
  sx,
  value,
}) => {
  return (
    <>
      <Switch
        checked={checked}
        color={color}
        defaultChecked={defaultChecked}
        disabled={disabled}
        inputProps={inputProps}
        name={name}
        onChange={onChange}
        required={required}
        size={size}
        sx={sx}
        value={value}
      />
    </>
  );
};

export default SkrSwitch;
