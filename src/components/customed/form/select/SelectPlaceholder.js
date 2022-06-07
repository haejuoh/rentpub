import React from "react";

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
