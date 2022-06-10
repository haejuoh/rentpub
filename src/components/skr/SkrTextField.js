import React from "react";
import { styled } from "@mui/styles";
import { TextField } from "@mui/material";

/**
 * @typedef {import('@mui/material').TextFieldProps} TextFieldProps
 */

/**
 * @type { React.FC<TextFieldProps> }
 */

// add position property
/**
 * @typedef position
 * @type {string}
 */

/** @type {position} */

const TextFieldStyled = styled(TextField)(({ theme, position }) => {
  return (
    position === "left" && {
      "&.MuiFormControl-root": {
        flexDirection: "row",
        position: "relative",
        alignItems: "center",
      },
      "& .MuiInputLabel-root": {
        display: "inline",
        Width: "120px",
        flex: "0 0 120px",
      },
      "& .MuiInput-root": {
        width: "calc(100% - 120px)",
        flex: "0 0 calc(100% - 120px)",
      },
      "& .MuiFormHelperText-root": {
        position: "absolute",
        left: "120px",
        bottom: "-18px",
      },
    }
  );
  return position === "top" && {};
  return position === "hidden" && {};
});

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
  position,
  ...rest
}) => {
  return (
    <>
      <TextFieldStyled
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
        position={position}
        {...rest}
      />
    </>
  );
};

export default SkrTextField;
