import React from "react";
import { DialogActions } from "@mui/material";
/**
 * @typedef {import('@mui/material').DialogActionsProps} DialogActionsProps
 */

/**
 * @type { React.FC<DialogActionsProps> }
 */

const SkrDialogActions = ({ disableSpacing, sx, children }) => {
  return (
    <DialogActions disableSpacing={disableSpacing} sx={sx}>
      {children}
    </DialogActions>
  );
};

export default SkrDialogActions;
