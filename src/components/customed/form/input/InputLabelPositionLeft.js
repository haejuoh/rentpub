import React from "react";
import SkrTextField from "../../../skr/SkrTextField";

const InputLabelPositionLeft = ({ position, ...rest }) => {
  return <SkrTextField position="left" {...rest} />;
};

export default InputLabelPositionLeft;
