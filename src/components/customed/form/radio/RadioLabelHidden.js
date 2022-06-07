import React from "react";
import SkrRadio from "../../../skr/SkrRadio";

const RadioLabelHidden = ({
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
      <SkrRadio
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

export default RadioLabelHidden;
