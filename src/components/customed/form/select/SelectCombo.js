import React, { Children } from "react";
// Style
import * as SelectStyled from "./style";
import SkrMenuItem from "../../../skr/SkrMenuItem";

const SelectCombo = ({ children, ...rest }) => {
  return (
    <SkrMenuItem variant="select" {...rest}>
      {children}
    </SkrMenuItem>
  );
};

export default SelectCombo;
