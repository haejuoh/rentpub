import React from "react";
import SkrSelect from "../../../skr/SkrSelect";
import SkrListItemIcon from "../../../skr/SkrListItemIcon";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrListItemText from "../../../skr/SkrListItemText";

import { MenuItem } from "@mui/material";

import { ReactComponent as IconOption } from "../../../../assets/images/icons/options.svg";
import { ReactComponent as IconArrow } from "../../../../assets/images/icons/chevron-down.svg";
import { styled } from "@mui/styles";

// const SelectLabelPositionTop = ({ ...rest }) => {
//   return <SkrSelect position="top" {...rest} />;
// };

const SelectLabelPositionTop = ({ selectData }) => {
  //placeholder
  const PlaceholderWrap = styled("div")(({ theme }) => ({
    color: `${theme.palette.grey[400]}`,
  }));
  const Placeholder = ({ content }) => {
    return <PlaceholderWrap>{content}</PlaceholderWrap>;
  };

  //select
  const SelectCombo = styled(MenuItem)(({ theme }) => ({
    height: "30px",
    padding: "8px",
    color: `${theme.palette.grey[700]}`,
    "&:hover": {
      backgroundColor: `${theme.palette.background[300]}`,
      "& .MuiListItemIcon-root": {
        svg: {
          "& path": {
            fill: `${theme.palette.primary.main}`,
          },
        },
      },
    },
    "&:disabled": {
      backgroundColor: `${theme.palette.background[700]}`,
    },

    "& .MuiListItemIcon-root": {
      minWidth: "14px",
      marginRight: "5px",
      svg: {
        "& path": {
          fill: `${theme.palette.grey[700]}`,
        },
      },
    },
    "& .MuiListItemText-root": {
      margin: 0,
      "& .MuiTypography-root": {
        margin: 0,
      },
    },
    "&.Mui-selected:hover": {
      backgroundColor: `${theme.palette.background[300]}`,
    },
  }));

  let IconComponent;
  if (selectData.isIcon) {
    IconComponent = (
      <SkrListItemIcon>
        <IconOption />
      </SkrListItemIcon>
    );
  }
  const [selectItem, setSelectItem] = React.useState("");
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  return (
    <SkrFormControl variant="standard" sx={{ width: "100%" }}>
      <SkrInputLabel id="sample">{selectData.label}</SkrInputLabel>

      <SkrSelect
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
            <SkrListItemText>{item}</SkrListItemText>
          </SelectCombo>
        ))}
      </SkrSelect>
    </SkrFormControl>
  );
};

export default SelectLabelPositionTop;
