import React from "react";
import { RadioGroup } from "@mui/material";

/**
 * @typedef {import('@mui/material').RadioGroupProps} RadioGroupProps
 */

/**
 * @type { React.FC<RadioGroupProps> }
 */

const SkrRadioGroup = ({ defaultValue, name, onChange, value, children }) => {
  return (
    <>
      <RadioGroup
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        value={value}
      >
        {children}
      </RadioGroup>
    </>
  );
};

export default SkrRadioGroup;
