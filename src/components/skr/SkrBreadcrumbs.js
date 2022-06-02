import React from "react";
import { Breadcrumbs } from "@mui/material";

/**
 * @typedef {import('@mui/material').BreadcrumbsProps} BreadcrumbsProps
 */

/**
 * @type { React.FC<BreadcrumbsProps> }
 */

const SkrBreadcrumbs = ({ separator, sx, children }) => {
  return (
    <>
      <Breadcrumbs separator={separator} sx={sx}>
        {children}
      </Breadcrumbs>
    </>
  );
};

export default SkrBreadcrumbs;
