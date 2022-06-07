import React from "react";
import SkrFormControlLabel from "../../../skr/SkrFormControlLabel";
import SkrSwitch from "../../../skr/SkrSwitch";
import SkrTypography from "../../../skr/SkrTypography";
import { Item } from "../../title/page/style";

// Style
import * as SwitchStyled from "./style";

const SwitchGroup = ({ switchGroupData }) => {
  return (
    <>
      {switchGroupData.map((item, idx) => {
        return (
          <SwitchStyled.SwitchGroupWrap>
            <SkrTypography variant="b1" color="grey.700">
              {item.label}
            </SkrTypography>
            <SkrSwitch
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
              inputProps={{ "aria-label": "Switch Group" }}
            />
          </SwitchStyled.SwitchGroupWrap>
        );
      })}
    </>
  );
};

export default SwitchGroup;
