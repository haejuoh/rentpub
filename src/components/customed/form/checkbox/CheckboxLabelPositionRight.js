import React from "react";
import SkrCheckbox from "../../../skr/SkrCheckbox";
import SkrFormControlLabel from "../../../skr/SkrFormControlLabel";

const CheckboxLabelPositionRight = ({
  label,
  defaultChecked,
  disabled,
  ...rest
}) => {
  return (
    <SkrFormControlLabel
      control={<SkrCheckbox defaultChecked={defaultChecked} />}
      label={label}
      disabled={disabled}
      {...rest}
    />
  );
};

export default CheckboxLabelPositionRight;
