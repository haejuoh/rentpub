import React from "react";
import { Table } from "@mui/material";

/**
 * @typedef {import('@mui/material').TableProps} TableProps
 */

/**
 * @type { React.FC<TableProps> }
 */

const SkrTable = ({ children, ...rest }) => {
  return <Table {...rest}>{children}</Table>;
};

export default SkrTable;
