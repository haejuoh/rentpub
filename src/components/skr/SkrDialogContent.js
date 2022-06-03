import React from "react";
import { DialogContent } from "@mui/material";
/**
 * @typedef {import('@mui/material').DialogContentProps} DialogContentProps
 */

/**
 * @type { React.FC<DialogContentProps> }
 */

const SkrDialogContent = ({ dividers, sx, children }) => {
  return (
    <DialogContent dividers={dividers} sx={sx}>
      {children}
    </DialogContent>
  );
};

export default SkrDialogContent;
