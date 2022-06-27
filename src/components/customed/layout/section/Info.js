import React from "react";
import SkrGrid from "../../../skr/SkrGrid";

const SectionInfo = ({ children, ...rest }) => {
  return (
    <>
      <SkrGrid container spacing={15} alignItems="center">
        {children}
      </SkrGrid>
    </>
  );
};

export default SectionInfo;
