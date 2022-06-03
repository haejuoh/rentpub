import React from "react";
import { ListItemIcon } from "@mui/material";
/**
 * @typedef {import('@mui/material').ListItemIconProps} ListItemIconProps
 */

/**
 * @type { React.FC<ListItemIconProps> }
 */

const SkrListItemIcon = ({ sx, children }) => {
  return <ListItemIcon sx={sx}>{children}</ListItemIcon>;
};

export default SkrListItemIcon;
