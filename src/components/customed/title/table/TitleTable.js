import React from "react";
// SkrComponents
import SkrTypography from "../../../skr/SkrTypography";
import SkrStack from "../../../skr/SkrStack";
// Style
import * as TitleTableStyled from "./style";
const TitleTable = ({ titleData, children }) => {
  return (
    <TitleTableStyled.Wrap>
      <TitleTableStyled.Title>
        <SkrTypography variant="h4">{titleData.title}</SkrTypography>
        {/* isDesc */}
        {titleData.desc && (
          <TitleTableStyled.Desc variant="b1">
            {titleData.desc}
            <span>건</span>
          </TitleTableStyled.Desc>
        )}
      </TitleTableStyled.Title>
      <SkrStack direction="row" spacing={5}>
        {children}
      </SkrStack>
    </TitleTableStyled.Wrap>
  );
};

export default TitleTable;
