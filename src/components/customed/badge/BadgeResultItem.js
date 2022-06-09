import React from "react";
import SkrChip from "../../skr/SkrChip";

import { CloseCircleIcon } from "../../../assets/style/icons";

const BadgeResultItem = ({ label }) => {
  return (
    <>
      <SkrChip
        label={label}
        variant="result"
        deleteIcon={<CloseCircleIcon />}
        onDelete
      />
    </>
  );
};

export default BadgeResultItem;
