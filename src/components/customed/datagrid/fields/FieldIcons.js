import React from "react";
import SkrTooltip from "../../../skr/SkrTooltip";
import SkrStack from "../../../skr/SkrStack";
import * as DataGridStyled from "../style";

import {
  AccessibilityIcon,
  CarIcon,
  StopIcon,
} from "../../../../assets/style/icons";

const FieldIcons = (params) => {
  return (
    <SkrStack direction="row" spacing={8}>
      {params.value.map((item, idx) => {
        return (
          <SkrTooltip title={item.title} placement="bottom-start" key={idx}>
            <DataGridStyled.Icon>
              <DataGridStyled.Chip active={item.active}>
                {item.icon === "accessibility" && <AccessibilityIcon />}
                {item.icon === "car" && <CarIcon />}
                {item.icon === "stop" && <StopIcon />}
              </DataGridStyled.Chip>
            </DataGridStyled.Icon>
          </SkrTooltip>
        );
      })}
    </SkrStack>
  );
};

export default FieldIcons;
