import React from "react";
import SkrGrid from "../../skr/SkrGrid";

const LySectionInfo = ({ children, ...rest }) => {
  return (
    <>
      <SkrGrid container spacing={15} alignItems="center">
        {children}
      </SkrGrid>
    </>
  );
};

export default LySectionInfo;
