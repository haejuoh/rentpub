import React from "react";
import SkrSelect from "../../../skr/SkrSelect";
import SkrListItemIcon from "../../../skr/SkrListItemIcon";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrListItemText from "../../../skr/SkrListItemText";

import SelectPlaceholder from "./SelectPlaceholder";
import SelectCombo from "./SelectCombo";

// Icons
import { OptionIcon, ChevronDownIcon } from "../../../../assets/style/icons";

const SelectLabelHidden = ({ selectData }) => {
  let IconComponent;
  if (selectData.isIcon) {
    IconComponent = (
      <SkrListItemIcon>
        <OptionIcon />
      </SkrListItemIcon>
    );
  }
  const [selectItem, setSelectItem] = React.useState("");
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };

  return (
    <SkrFormControl variant="standard" sx={{ width: "100%" }}>
      <SkrSelect
        labelId="sample"
        value={selectItem}
        IconComponent={() => <ChevronDownIcon />}
        displayEmpty
        onChange={handleChange}
        renderValue={
          selectItem !== ""
            ? undefined
            : () => <SelectPlaceholder content="선택" />
        }
        MenuProps={selectData.style}
        disabled={selectData.disabled}
      >
        {selectData.option.map((item, index) => (
          <SelectCombo key={index} value={item}>
            {IconComponent}
            <SkrListItemText>{item}</SkrListItemText>
          </SelectCombo>
        ))}
      </SkrSelect>
    </SkrFormControl>
  );
};

export default SelectLabelHidden;
