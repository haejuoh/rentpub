import React from "react";
import { TableBody } from "@mui/material";

/**
 * @typedef {import('@mui/material').TableBodyProps} TableBodyProps
 */

/**
 * @type { React.FC<TableBodyProps> }
 */

const SkrTableBody = ({ children, ...rest }) => {
  return <TableBody {...rest}>{children}</TableBody>;
};

export default SkrTableBody;
