import React from "react";
import { Dialog } from "@mui/material";
/**
 * @typedef {import('@mui/material').DialogProps} DialogProps
 */

/**
 * @type { React.FC<DialogProps> }
 */

const SkrDialog = ({
  open,
  fullScreen,
  fullWidth,
  maxWidth,
  onClose,
  sx,
  children,
}) => {
  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={onClose}
      sx={sx}
    >
      {children}
    </Dialog>
  );
};

export default SkrDialog;
