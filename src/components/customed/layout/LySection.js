import React from "react";
import SkrStack from "../../skr/SkrStack";

const LySection = ({ children, ...rest }) => {
  return (
    <>
      <SkrStack spacing={30}>{children}</SkrStack>
    </>
  );
};

export default LySection;
