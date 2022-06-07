import React from "react";
import { Select } from "@mui/material";

/**
 * @typedef {import('@mui/material').SelectProps} SelectProps
 */

/**
 * @type { React.FC<SelectProps> }
 */

const SkrSelect = ({
  defaultValue,
  displayEmpty,
  disabled,
  IconComponent,
  id,
  label,
  labelId,
  MenuProps,
  onChange,
  renderValue,
  value,
  children,
  variant,
}) => {
  return (
    <>
      <Select
        defaultValue={defaultValue}
        displayEmpty={displayEmpty}
        disabled={disabled}
        IconComponent={IconComponent}
        id={id}
        label={label}
        labelId={labelId}
        MenuProps={MenuProps}
        onChange={onChange}
        renderValue={renderValue}
        value={value}
        variant={variant}
      >
        {children}
      </Select>
    </>
  );
};

export default SkrSelect;
