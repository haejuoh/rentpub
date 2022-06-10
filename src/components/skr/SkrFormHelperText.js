import React from "react";
import { styled } from "@mui/styles";
import { FormHelperText } from "@mui/material";

/**
 * @typedef {import('@mui/material').TextareaAutosizeProps} TextareaAutosizeProps
 */

/**
 * @type { React.FC<TextareaAutosizeProps> }
 */

const SkrFormHelperText = ({ children, disabled, error, sx, ...rest }) => {
  return (
    <FormHelperText disabled={disabled} error={error} sx={sx} {...rest}>
      {children}
    </FormHelperText>
  );
};

export default SkrFormHelperText;
