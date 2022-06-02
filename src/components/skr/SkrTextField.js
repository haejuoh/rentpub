import React from "react";
import { TextField } from "@mui/material";

/**
 * @typedef {import('@mui/material').TextFieldProps} TextFieldProps
 */

/**
 * @type { React.FC<TextFieldProps> }
 */

const SkrTextField = ({
  label,
  placeholder,
  color,
  value,
  defaultValue,
  disabled,
  error,
  helperText,
  InputProps,
  required,
}) => {
  return (
    <>
      <TextField
        label={label}
        placeholder={placeholder}
        color={color}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        helperText={helperText}
        InputProps={InputProps}
        required={required}
      />
    </>
  );
};

export default SkrTextField;
