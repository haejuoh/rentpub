import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";

/**
 * @typedef {import('@mui/material').TextareaAutosizeProps} TextareaAutosizeProps
 */

/**
 * @type { React.FC<TextareaAutosizeProps> }
 */
const SkrTextArea = ({ maxRows = 5, placeholder = "Textarea" }) => {
  return (
    <>
      <TextareaAutosize
        maxRows={maxRows}
        placeholder={placeholder}
        style={{ width: 200 }}
      />
    </>
  );
};

export default SkrTextArea;
// id, name, value -> 개발
