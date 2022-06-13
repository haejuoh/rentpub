import React from "react";
import SkrChip from "../../../skr/SkrTooltip";

const FieldBadges = (params) => {
  console.log(params);
  switch (params.value) {
    case "사용":
      return <SkrChip label={params.value} color="success" />;
      break;
    default:
      return <SkrChip label={params.value} color="cancel" />;
      break;
  }
};

export default FieldBadges;
