import React from "react";
import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";
import SkrSelect from "../../../skr/SkrSelect";
import SkrListItemIcon from "../../../skr/SkrListItemIcon";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrListItemText from "../../../skr/SkrListItemText";

import SelectPlaceholder from "./SelectPlaceholder";
import SelectCombo from "./SelectCombo";

// Icons
import { OptionIcon, ChevronDownIcon } from "../../../../assets/style/icons";

import { FormControl } from "@mui/material";

const SelectLabelPositionLeft = ({ selectData }) => {
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
    <SkrFormControl variant="standard" position="left" sx={{ width: "100%" }}>
      <SkrInputLabel id="sample" required={selectData.required}>
        {selectData.label}
      </SkrInputLabel>

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

export default SelectLabelPositionLeft;
