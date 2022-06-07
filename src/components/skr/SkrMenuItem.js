import React from "react";
import { styled } from "@mui/styles";
import { MenuItem } from "@mui/material";

/**
 * @typedef {import('@mui/material').MenuItemProps} MenuItemProps
 */

/**
 * @type { React.FC<MenuItemProps> }
 */

// add variant property
/**
 * @typedef variant
 * @type {string}
 */

/** @type {variant} */

const MenuItemStyled = styled(MenuItem)(({ theme, variant }) => {
  return (
    variant === "select" && {
      height: "30px",
      padding: "8px",
      color: `${theme.palette.grey[700]}`,
      "&:hover": {
        backgroundColor: `${theme.palette.background[300]}`,
        "& .MuiListItemIcon-root": {
          svg: {
            "& path": {
              fill: `${theme.palette.primary.main}`,
            },
          },
        },
      },
      "&:disabled": {
        backgroundColor: `${theme.palette.background[700]}`,
      },

      "& .MuiListItemIcon-root": {
        minWidth: "14px",
        marginRight: "5px",
        svg: {
          "& path": {
            fill: `${theme.palette.grey[700]}`,
          },
        },
      },
      "& .MuiListItemText-root": {
        margin: 0,
        "& .MuiTypography-root": {
          margin: 0,
        },
      },
      "&.Mui-selected:hover": {
        backgroundColor: `${theme.palette.background[300]}`,
      },
    }
  );
});

const SkrMenuItem = ({ component, sx, variant, children, ...rest }) => {
  return (
    <>
      <MenuItemStyled component={component} sx={sx} variant={variant} {...rest}>
        {children}
      </MenuItemStyled>
    </>
  );
};

export default SkrMenuItem;
