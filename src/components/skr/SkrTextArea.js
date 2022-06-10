import React from "react";
import { styled } from "@mui/styles";
import { TextareaAutosize } from "@mui/material";

/**
 * @typedef {import('@mui/material').TextareaAutosizeProps} TextareaAutosizeProps
 */

/**
 * @type { React.FC<TextareaAutosizeProps> }
 */

const TextAreaStyled = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  minHeight: "120px",
  maxHeight: "120px",
  padding: "10px 12px 10px",
  borderColor: `${theme.borderColor}`,
  borderRadius: "2px",
  resize: "none",
  overflow: "auto",
  fontFamily: "Pretendard, sans-serif",
  color: `${theme.palette.grey[700]}`,
  fontSize: `${theme.typography.b1.fontSize}`,
  lineHeight: "1.1812rem",
  "&::placeholder": {
    color: `${theme.palette.grey[400]}`,
  },
  "&:hover": {
    borderColor: `${theme.palette.primary.bright}`,
    backgroundColor: `${theme.palette.background[300]}`,
  },
  "&:focus": {
    outline: "none",
    borderColor: `${theme.palette.primary.main}`,
    backgroundColor: `${theme.palette.background[300]}`,
  },
  "&:read-only": {
    backgroundColor: `${theme.palette.background[300]}`,
    border: "none",
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.background[700]}`,
    border: "none",
  },
}));
const SkrTextArea = ({ minRows, placeholder, autofocus, ...rest }) => {
  return (
    <TextAreaStyled
      minRows={minRows}
      placeholder={placeholder}
      autofocus={autofocus}
      {...rest}
    />
  );
};

export default SkrTextArea;
