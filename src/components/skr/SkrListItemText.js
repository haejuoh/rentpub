import React from "react";
import { ListItemText } from "@mui/material";
/**
 * @typedef {import('@mui/material').ListItemTextProps} ListItemTextProps
 */

/**
 * @type { React.FC<ListItemTextProps> }
 */

const SkrListItemText = ({
  inset,
  primary,
  primaryTypographyProps,
  secondary,
  secondaryTypographyProps,
  sx,
  children,
}) => {
  return (
    <ListItemText
      inset={inset}
      primary={primary}
      primaryTypographyProps={primaryTypographyProps}
      secondary={secondary}
      secondaryTypographyProps={secondaryTypographyProps}
      sx={sx}
    >
      {children}
    </ListItemText>
  );
};

export default SkrListItemText;
