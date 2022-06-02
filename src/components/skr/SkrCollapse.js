import React from "react";
import { Collapse } from "@mui/material";

/**
 * @typedef {import('@mui/material').CollapseProps} CollapseProps
 */

/**
 * @type { React.FC<CollapseProps> }
 */

const SkrCollapse = ({ children, ...rest }) => {
  return (
    <>
      <Collapse {...rest}>{children}</Collapse>
    </>
  );
};

export default SkrCollapse;
