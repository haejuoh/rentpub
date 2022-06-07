import React from "react";
import SkrFormControlLabel from "../../../skr/SkrFormControlLabel";

const RadioLabelHidden = ({
  checked,
  control,
  disabled,
  label,
  name,
  onChange,
  value,
  children,
  ...rest
}) => {
  return (
    <>
      <SkrFormControlLabel
        checked={checked}
        control={control}
        disabled={disabled}
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        {...rest}
      >
        {children}
      </SkrFormControlLabel>
    </>
  );
};

export default RadioLabelHidden;
