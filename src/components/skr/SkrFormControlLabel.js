import React from "react";
import { FormControlLabel } from "@mui/material";

/**
 * @typedef {import('@mui/material').FormControlLabelProps} FormControlLabelProps
 */

/**
 * @type { React.FC<FormControlLabelProps> }
 */

const SkrFormControlLabel = ({
  checked,
  componentsProps,
  control,
  disabled,
  label,
  labelPlacement,
  name,
  onChange,
  sx,
  value,
  children,
}) => {
  return (
    <>
      <FormControlLabel
        checked={checked}
        componentsProps={componentsProps}
        control={control}
        disabled={disabled}
        label={label}
        labelPlacement={labelPlacement}
        name={name}
        onChange={onChange}
        sx={sx}
        value={value}
      >
        {children}
      </FormControlLabel>
    </>
  );
};

export default SkrFormControlLabel;
