import React from "react";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrStack from "../../../skr/SkrStack";

const FormContents = ({ label, required, position, children, ...rest }) => {
  return (
    <SkrFormControl
      variant="standard"
      position={position}
      sx={{ width: "100%" }}
    >
      <SkrInputLabel htmlFor={label} required={required}>
        {label}
      </SkrInputLabel>
      <SkrStack direction="row" spacing={15}>
        {children}
      </SkrStack>
    </SkrFormControl>
  );
};

export default FormContents;
