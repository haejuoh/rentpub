import React from "react";
//Skr
import SkrInputAdornment from "../../../skr/SkrInputAdornment";
import SkrIconButton from "../../../skr/SkrIconButton";
// import SkrTextField from "../../../skr/SkrTextField";
//comm
import InputLabelHidden from "../../form/input/InputLabelHidden";
import SwitchGroup from "../../form/switch/SwitchGroup";
//Icon
import { SearchIcon } from "../../../../assets/style/icons";
// Style
import * as PanelStyled from "./style";
const switchGroupData = [
  { label: "예약번호", defaultChecked: true, disabled: false },
  { label: "예약번호", defaultChecked: false, disabled: false },
  { label: "출발일시", defaultChecked: false, disabled: false },
  { label: "도착일시", defaultChecked: false, disabled: false },
  { label: "차정명", defaultChecked: false, disabled: false },
  { label: "할인유형", defaultChecked: false, disabled: false },
  { label: "쿠폰", defaultChecked: false, disabled: false },
  { label: "추가옵션", defaultChecked: false, disabled: false },
  { label: "예약상태 1", defaultChecked: false, disabled: false },
  { label: "예약상태 2", defaultChecked: false, disabled: false },
  { label: "예약상태 3", defaultChecked: false, disabled: false },
  { label: "예약상태 4", defaultChecked: false, disabled: false },
];
const FilterColumn = () => {
  return (
    <PanelStyled.Wrap>
      <PanelStyled.Header>
        <InputLabelHidden
          placeholder="컬럼명 입력"
          InputProps={{
            endAdornment: (
              <SkrInputAdornment position="end">
                <SkrIconButton>
                  <SearchIcon />
                </SkrIconButton>
              </SkrInputAdornment>
            ),
          }}
        />
      </PanelStyled.Header>
      <PanelStyled.Content>
        <PanelStyled.List>
          <SwitchGroup switchGroupData={switchGroupData} />
        </PanelStyled.List>
      </PanelStyled.Content>
    </PanelStyled.Wrap>
  );
};

export default FilterColumn;
