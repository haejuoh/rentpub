import React from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
/**
 * @typedef {import('@mui/x-data-grid').GridActionsCellItemProps} GridActionsCellItemProps
 */

/**
 * @type { React.FC<GridActionsCellItemProps> }
 */

const SkrGridActionsCellItem = ({ ...rest }) => {
  return <GridActionsCellItem {...rest} />;
};

export default SkrGridActionsCellItem;
