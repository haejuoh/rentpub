import React from "react";
import SkrCheckbox from "../../../skr/SkrCheckbox";
import SkrFormGroup from "../../../skr/SkrFormGroup";
import SkrFormControlLabel from "../../../skr/SkrFormControlLabel";

const CheckboxGroup = ({ checkBoxData, ...rest }) => {
  const [checkItem, setCheckItem] = React.useState(true);
  const handleChange = (event) => {
    setCheckItem(event.target.checked);
  };

  return (
    <SkrFormGroup>
      {checkBoxData.map((item, idx) => {
        return (
          <SkrFormControlLabel
            control={<SkrCheckbox />}
            label={item.label + idx}
            disabled={item.disabled}
            key={idx}
            onChange={handleChange}
          />
        );
      })}
    </SkrFormGroup>
  );
};

export default CheckboxGroup;
