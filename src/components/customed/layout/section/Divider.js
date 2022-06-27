import React from "react";
// Style
import * as SectionStyle from "./style";

const SectionDivider = ({ children }) => {
  return (
    <SectionStyle.Container>
      {children.length === undefined ? (
        <>{children}</>
      ) : (
        <>
          {children[0]}
          <SectionStyle.Sticky>{children[1]}</SectionStyle.Sticky>
        </>
      )}
    </SectionStyle.Container>
  );
};

export default SectionDivider;
