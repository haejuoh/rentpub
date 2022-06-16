import React from "react";
import { TableCell } from "@mui/material";

/**
 * @typedef {import('@mui/material').TableCellProps} TableCellProps
 */

/**
 * @type { React.FC<TableCellProps> }
 */

const SkrTableCell = ({ children, ...rest }) => {
  return <TableCell {...rest}>{children}</TableCell>;
};

export default SkrTableCell;
