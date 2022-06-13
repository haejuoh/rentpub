import React from "react";
import SkrDialogTitle from "../../skr/SkrDialogTitle";

const ModalHeader = React.forwardRef(({ title, onClose, ...rest }, ref) => {
  return (
    <>
      {title && (
        <SkrDialogTitle onClose={onClose} ref={ref}>
          {title}
        </SkrDialogTitle>
      )}
    </>
  );
});

ModalHeader.displayName = "ModalHeader";
export default ModalHeader;
