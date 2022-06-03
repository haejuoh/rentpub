import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  Select,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactComponent as IconArrow } from "../assets/images/icons/chevron-down.svg";
import { ReactComponent as IconOption } from "../assets/images/icons/options.svg";
import {
  Placeholder,
  SelectCombo,
  DefaultFormControl,
} from "../assets/style/common";

export const SelectField = ({ selectData }) => {
  let IconComponent;
  if (selectData.isIcon) {
    IconComponent = (
      <ListItemIcon>
        <IconOption />
      </ListItemIcon>
    );
  }
  const [selectItem, setSelectItem] = React.useState("");
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <InputLabel id="sample" required={selectData.required}>
        {selectData.label}
      </InputLabel>

      <Select
        labelId="sample"
        value={selectItem}
        IconComponent={() => <IconArrow />}
        displayEmpty
        onChange={handleChange}
        renderValue={
          selectItem !== "" ? undefined : () => <Placeholder content="선택" />
        }
        MenuProps={selectData.style}
        disabled={selectData.disabled}
      >
        {selectData.option.map((item, index) => (
          <SelectCombo key={index} value={item}>
            {IconComponent}
            <ListItemText>{item}</ListItemText>
          </SelectCombo>
        ))}
      </Select>
    </FormControl>
  );
};
export const DefaultSelectField = ({ selectData }) => {
  let IconComponent;
  if (selectData.isIcon) {
    IconComponent = (
      <ListItemIcon>
        <IconOption />
      </ListItemIcon>
    );
  }
  const [selectItem, setSelectItem] = React.useState("");
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  return (
    <DefaultFormControl variant="standard" sx={{ width: "100%" }}>
      <InputLabel id="sample" required={selectData.required}>
        {selectData.label}
      </InputLabel>

      <Select
        labelId="sample"
        value={selectItem}
        IconComponent={() => <IconArrow />}
        displayEmpty
        onChange={handleChange}
        renderValue={
          selectItem !== "" ? undefined : () => <Placeholder content="선택" />
        }
        MenuProps={selectData.style}
        disabled={selectData.disabled}
      >
        {selectData.option.map((item, index) => (
          <SelectCombo key={index} value={item}>
            {IconComponent}
            <ListItemText>{item}</ListItemText>
          </SelectCombo>
        ))}
      </Select>
    </DefaultFormControl>
  );
};
export const SelectLabelHidden = ({ selectData }) => {
  let IconComponent;
  if (selectData.isIcon) {
    IconComponent = (
      <ListItemIcon>
        <IconOption />
      </ListItemIcon>
    );
  }
  const [selectItem, setSelectItem] = React.useState("");
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <Select
        labelId="sample"
        value={selectItem}
        IconComponent={() => <IconArrow />}
        displayEmpty
        onChange={handleChange}
        renderValue={
          selectItem !== "" ? undefined : () => <Placeholder content="선택" />
        }
        MenuProps={selectData.style}
        disabled={selectData.disabled}
      >
        {selectData.option.map((item, index) => (
          <SelectCombo key={index} value={item}>
            {IconComponent}
            <ListItemText>{item}</ListItemText>
          </SelectCombo>
        ))}
      </Select>
    </FormControl>
  );
};
