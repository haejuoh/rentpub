import React from "react";
import SkrStack from "../../../skr/SkrStack";

const SectionContents = ({ children, ...rest }) => {
  return (
    <>
      <SkrStack spacing={30}>{children}</SkrStack>
    </>
  );
};

export default SectionContents;
