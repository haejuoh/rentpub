import React from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
/**
 * @typedef {import('@mui/x-data-grid').GridActionsCellItemProps} GridActionsCellItemProps
 */

/**
 * @type { React.FC<GridActionsCellItemProps> }
 */

const SkrGridActionsCellItem = ({ label, icon, showInMenu }) => {
  return (
    <GridActionsCellItem label={label} icon={icon} showInMenu={showInMenu} />
  );
};

export default SkrGridActionsCellItem;
