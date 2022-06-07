import React from "react";
import SkrSwitch from "../../../skr/SkrSwitch";

const SwitchLabelHidden = ({ defaultChecked, disabled, ...rest }) => {
  return (
    <>
      <SkrSwitch
        defaultChecked={defaultChecked}
        disabled={disabled}
        inputProps={{ "aria-label": "Switch Label Hidden" }}
        {...rest}
      />
    </>
  );
};

export default SwitchLabelHidden;
