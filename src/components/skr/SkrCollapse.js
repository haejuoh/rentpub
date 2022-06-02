import React from "react";
import { Collapse } from "@mui/material";

/**
 * @typedef {import('@mui/material').CollapseProps} CollapseProps
 */

/**
 * @type { React.FC<CollapseProps> }
 */

const SkrCollapse = ({
  collapsedSize,
  in,
  easing,
  orientation,
  sx,
  children
}) => {
  return (
    <>
      <Collapse
        collapsedSize={collapsedSize}
        easing={easing}
        in={in}
        orientation={orientation}
        sx={sx}
      >
        {children}
      </Collapse>
    </>
  );
};

export default SkrCollapse;
