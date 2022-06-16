import React from "react";
import { TableHead } from "@mui/material";

/**
 * @typedef {import('@mui/material').TableHeadProps} TableHeadProps
 */

/**
 * @type { React.FC<TableHeadProps> }
 */

const SkrTableHead = ({ children, ...rest }) => {
  return <TableHead {...rest}>{children}</TableHead>;
};

export default SkrTableHead;
