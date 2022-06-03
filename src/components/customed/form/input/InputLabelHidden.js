import React from "react";
import SkrTextField from "../../../skr/SkrTextField";

const InputLabelHidden = ({ ...rest }) => {
  return <SkrTextField hiddenLabel {...rest} />;
};

export default InputLabelHidden;
