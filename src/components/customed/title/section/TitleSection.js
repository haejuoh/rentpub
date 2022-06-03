import React from "react";
// SkrComponents
import SkrTypography from "../../../skr/SkrTypography";
import SkrStack from "../../../skr/SkrStack";
import SkrChip from "../../../skr/SkrChip";
// Style
import * as TitleSectionStyled from "./style";

const TitleSection = ({ titleData, children }) => {
  return (
    <TitleSectionStyled.Wrap>
      <TitleSectionStyled.Content>
        {/* is Badge */}
        {titleData.badge && (
          <SkrChip
            color={titleData.badge.color}
            variant={titleData.badge.variant}
            label={titleData.badge.title}
            mr={5}
          />
        )}
        <SkrTypography variant="h3" color="grey.900">
          {titleData.title}
        </SkrTypography>
        {/* is Description */}
        {titleData.desc && (
          <SkrTypography variant="ct" color="grey.600">
            {titleData.desc}
          </SkrTypography>
        )}
      </TitleSectionStyled.Content>
      <SkrStack direction="row" spacing={5}>
        {children}
      </SkrStack>
    </TitleSectionStyled.Wrap>
  );
};

export default TitleSection;
