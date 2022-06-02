import React from "react";
import { TextareaAutosize } from "@mui/material";

/**
 * @typedef {import('@mui/material').TextareaAutosizeProps} TextareaAutosizeProps
 */

/**
 * @type { React.FC<TextareaAutosizeProps> }
 */

const SkrTextArea = ({ maxRows = 5, placeholder = "내용을 입력해주세요." }) => {
  return <TextareaAutosize maxRows={maxRows} placeholder={placeholder} />;
};

export default SkrTextArea;
