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
  checkedIcon,
  color,
  defaultChecked,
  disabled,
  icon,
  id,
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
        checkedIcon={checkedIcon}
        color={color}
        defaultChecked={defaultChecked}
        disabled={disabled}
        icon={icon}
        id={id}
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
