import React from "react";
import { Menu } from "@mui/material";

/**
 * @typedef {import('@mui/material').MenuProps} MenuProps
 */

/**
 * @type { React.FC<MenuProps> }
 */

const SkrMenu = ({ open, MenuListProps, variant, children }) => {
  return (
    <>
      <Menu open={open} MenuListProps={MenuListProps} variant={variant}>
        {children}
      </Menu>
    </>
  );
};

export default SkrMenu;
