import React from "react";
import { MenuItem } from "@mui/material";

/**
 * @typedef {import('@mui/material').MenuItemProps} MenuItemProps
 */

/**
 * @type { React.FC<MenuItemProps> }
 */

const SkrMenuItem = ({ component, sx, children }) => {
  return (
    <>
      <MenuItem component={component} sx={sx}>
        {children}
      </MenuItem>
    </>
  );
};

export default SkrMenuItem;
