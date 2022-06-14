import React from "react";
import { Checkbox } from "@mui/material";

/**
 * @typedef {import('@mui/material').CheckboxProps} CheckboxProps
 */

/**
 * @type { React.FC<CheckboxProps> }
 */

const SkrCheckbox = ({
  checked,
  checkedIcon,
  color,
  defaultChecked,
  disabled,
  id,
  onChange,
  size,
  sx,
  required,
  value,
  children,
}) => {
  return (
    <Checkbox
      checked={checked}
      checkedIcon={checkedIcon}
      color={color}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      onChange={onChange}
      size={size}
      sx={sx}
      required={required}
      value={value}
    >
      {children}
    </Checkbox>
  );
};

export default SkrCheckbox;
