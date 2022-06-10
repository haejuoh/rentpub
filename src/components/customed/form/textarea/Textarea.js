import { FormHelperText } from "@mui/material";
import React from "react";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrTextArea from "../../../skr/SkrTextArea";
import SkrFormHelperText from "../../../skr/SkrFormHelperText";
import SkrBox from "../../../skr/SkrBox";

const Textarea = ({
  position,
  label,
  minRows,
  placeholder = "Textarea",
  readOnly,
  disabled,
  required,
  error,
  success,
  helperText = "Alret Message.",
}) => {
  return (
    <>
      <SkrFormControl
        variant="standard"
        position={position}
        sx={{ width: "100%", alignItems: "flex-start" }}
      >
        <SkrInputLabel required={required}>{label}</SkrInputLabel>
        <SkrBox sx={{ width: "100%" }}>
          <SkrTextArea
            minRows={5}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
          />
          {success && (
            <SkrFormHelperText color={success}>{helperText}</SkrFormHelperText>
          )}
          {error && (
            <SkrFormHelperText color={success} error={error}>
              {helperText}
            </SkrFormHelperText>
          )}
        </SkrBox>
      </SkrFormControl>
    </>
  );
};

export default Textarea;
