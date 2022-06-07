import React from "react";
//skr
import SkrTypography from "../../../skr/SkrTypography";
import SkrStack from "./../../../skr/SkrStack";

const NoRows = ({ message }) => {
  return (
    <SkrStack height="100%" alignItems="center" justifyContent="center">
      <SkrTypography variant="b1">{message}</SkrTypography>
    </SkrStack>
  );
};

export default NoRows;
