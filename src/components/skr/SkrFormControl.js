import React from "react";
import { styled } from "@mui/styles";
import { FormControl } from "@mui/material";

/**
 * @typedef {import('@mui/material').FormControlProps} FormControlProps
 */

/**
 * @type { React.FC<FormControlProps> }
 */

// add position property
/**
 * @typedef position
 * @type {string}
 */

/** @type {position} */

const FormControlStyled = styled(FormControl)(({ theme, position }) => {
  return (
    position === "left" && {
      "&.MuiFormControl-root": {
        flexDirection: "row",
        position: "relative",
        alignItems: "flex-start",
      },
      "& .MuiInputLabel-root": {
        display: "inline",
        Width: "120px",
        flex: "0 0 120px",
        height: "34px",
      },
      "& .MuiInput-root": {
        width: "calc(100% - 120px)",
        flex: "0 0 calc(100% - 120px)",
      },
    }
  );
});

const SkrFormControl = ({
  color,
  disabled,
  error,
  fullWidth,
  focused,
  hiddenLabel,
  required,
  size,
  sx,
  variant,
  position,
  children,
}) => {
  return (
    <>
      <FormControlStyled
        color={color}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        focused={focused}
        hiddenLabel={hiddenLabel}
        required={required}
        size={size}
        sx={sx}
        variant={variant}
        position={position}
      >
        {children}
      </FormControlStyled>
    </>
  );
};

export default SkrFormControl;
