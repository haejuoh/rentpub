import React from "react";
import SkrFormControlLabel from "../../../skr/SkrFormControlLabel";
import SkrRadio from "../../../skr/SkrRadio";
import SkrRadioGroup from "../../../skr/SkrRadioGroup";

const RadioGroupLabel = ({ radioGroupData }) => {
  const [value, setValue] = React.useState("0");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <SkrRadioGroup name="radioGroup" value={value} onChange={handleChange}>
        {radioGroupData.map((item, idx) => {
          return (
            <SkrFormControlLabel
              value={idx}
              control={<SkrRadio />}
              label={item.label}
              disabled={item.disabled}
              key={idx}
            />
          );
        })}
      </SkrRadioGroup>
    </>
  );
};

export default RadioGroupLabel;
