import React from "react";
import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";

// Style
import * as SelectStyled from "./style";

const SelectPlaceholder = ({ content }) => {
  return (
    <>
      <SelectStyled.PlaceholderWrap>{content}</SelectStyled.PlaceholderWrap>
    </>
  );
};

export default SelectPlaceholder;
