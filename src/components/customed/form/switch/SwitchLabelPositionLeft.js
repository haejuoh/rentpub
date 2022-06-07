import React from "react";
import SkrFormControlLabel from "../../../skr/SkrFormControlLabel";
import SkrSwitch from "../../../skr/SkrSwitch";

const SwitchLabelPositionLeft = ({
  value,
  label,
  defaultChecked,
  disabled,
  ...rest
}) => {
  return (
    <>
      <SkrFormControlLabel
        value={value}
        control={<SkrSwitch defaultChecked={defaultChecked} />}
        label={label}
        labelPlacement="start"
        disabled={disabled}
      />
    </>
  );
};

export default SwitchLabelPositionLeft;
