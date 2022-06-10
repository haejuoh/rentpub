import React from "react";
import SkrSelect from "../../../skr/SkrSelect";
import SkrListItemIcon from "../../../skr/SkrListItemIcon";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrListItemText from "../../../skr/SkrListItemText";
import SkrInputLabel from "../../../skr/SkrInputLabel";

import SelectPlaceholder from "./SelectPlaceholder";
import SelectCombo from "./SelectCombo";
import BadgeResultItem from "../../badge/BadgeResultItem";

import * as SelectStyled from "./style";

// Icons
import { OptionIcon, ChevronDownIcon } from "../../../../assets/style/icons";

const SelectMultipleLabelLeft = ({ selectData }) => {
  let IconComponent;
  if (selectData.isIcon) {
    IconComponent = (
      <SkrListItemIcon>
        <OptionIcon />
      </SkrListItemIcon>
    );
  }
  const [selectItem, setSelectItem] = React.useState([]);
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };

  return (
    <SkrFormControl variant="standard" position="left" sx={{ width: "100%" }}>
      <SkrInputLabel id="sample">{selectData.label}</SkrInputLabel>
      <SkrSelect
        multiple={true}
        labelId="sample"
        value={selectItem}
        IconComponent={() => <ChevronDownIcon />}
        displayEmpty
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <SelectPlaceholder content="선택" />;
          }

          return (
            <SelectStyled.MultiResultWrap>
              {selected.map((value) => (
                <>
                  <BadgeResultItem label={value} />
                </>
              ))}
            </SelectStyled.MultiResultWrap>
          );
        }}
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

export default SelectMultipleLabelLeft;
