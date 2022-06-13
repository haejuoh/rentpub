import React from "react";
import { DialogTitle } from "@mui/material";
import SkrDivider from "./SkrDivider";
import SkrIconButton from "./SkrIconButton";

/**
 * @typedef {import('@mui/material').DialogTitleProps} DialogTitleProps
 */

/**
 * @type { React.FC<DialogTitleProps> }
 */

import { CloseIcon } from "../../assets/style/icons";

const SkrDialogTitle = ({ sx, children, onClose, ...rest }) => {
  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }} {...rest}>
        {children}
        {onClose ? (
          <SkrIconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </SkrIconButton>
        ) : null}
      </DialogTitle>
      {onClose && <SkrDivider sx={{ margin: "15px 0" }} />}
    </>
  );
};

export default SkrDialogTitle;
