import React from "react";
import { TableRow } from "@mui/material";

/**
 * @typedef {import('@mui/material').TableRowProps} TableRowProps
 */

/**
 * @type { React.FC<TableRowProps> }
 */

const SkrTableRow = ({ children, ...rest }) => {
  return <TableRow {...rest}>{children}</TableRow>;
};

export default SkrTableRow;
