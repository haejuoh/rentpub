import React from "react";
import { DialogTitle } from "@mui/material";
/**
 * @typedef {import('@mui/material').DialogTitleProps} DialogTitleProps
 */

/**
 * @type { React.FC<DialogTitleProps> }
 */

const SkrDialogTitle = ({ sx, children }) => {
  return <DialogTitle sx={sx}>{children}</DialogTitle>;
};

export default SkrDialogTitle;
