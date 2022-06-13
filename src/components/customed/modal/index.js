import React from "react";
import { cloneElement } from "react";
import SkrDialog from "../../skr/SkrDialog";
import SkrDialogTitle from "../../skr/SkrDialogTitle";
import SkrDialogContent from "../../skr/SkrDialogContent";
import SkrDialogActions from "../../skr/SkrDialogActions";
import SkrTypography from "../../skr/SkrTypography";
import SkrButton from "../../skr/SkrButton";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import SkrBox from "../../skr/SkrBox";

const Modal = React.forwardRef(
  (
    {
      btnText,
      btnVariant,
      btnColor,
      btnSize,
      title,
      btnCancel,
      btnAction,
      children,
      handleClick,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <SkrButton
          variant={btnVariant}
          color={btnColor}
          size={btnSize}
          onClick={handleClickOpen}
        >
          {btnText}
        </SkrButton>
        <SkrDialog onClose={handleClose} open={open} {...rest} ref={ref}>
          <ModalHeader title={title} onClose={handleClose} />
          <SkrDialogContent>
            <SkrTypography gutterBottom>{children}</SkrTypography>
          </SkrDialogContent>
          <ModalFooter
            onClick={handleClose}
            btnCancel={btnCancel}
            btnAction={btnAction}
          ></ModalFooter>
        </SkrDialog>
      </>
    );
  }
);

Modal.displayName = "Modal";
export default Modal;
