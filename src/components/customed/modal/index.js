import React from "react";
import SkrDialog from "../../skr/SkrDialog";
import SkrDialogContent from "../../skr/SkrDialogContent";
import SkrTypography from "../../skr/SkrTypography";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

const Modal = React.forwardRef(
  (
    {
      title,
      btnCancel,
      btnAction,
      open,
      handleClickOpen,
      handleClose,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <>
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
