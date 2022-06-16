import React from "react";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrStack from "../../../skr/SkrStack";
import * as FormStyled from "./style";

const FormContents = ({ label, required, position, children, ...rest }) => {
  return (
    <SkrFormControl
      variant="standard"
      position={position}
      sx={{ width: "100%" }}
    >
      <SkrInputLabel
        htmlFor={label}
        required={required}
        sx={{ lineHeight: "34px" }}
      >
        {label}
      </SkrInputLabel>
      <FormStyled.Contents>{children}</FormStyled.Contents>
    </SkrFormControl>
  );
};

export default FormContents;
