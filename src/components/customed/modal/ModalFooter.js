import React from "react";
import SkrDialogActions from "../../skr/SkrDialogActions";
import SkrButton from "../../skr/SkrButton";

const ModalFooter = React.forwardRef(
  ({ onClick, btnCancel, btnAction, ...rest }, ref) => {
    if (btnCancel || btnAction) {
      return (
        <>
          <SkrDialogActions>
            {btnCancel && (
              <SkrButton color="modal" onClick={onClick}>
                {btnCancel}
              </SkrButton>
            )}
            {btnAction && (
              <SkrButton color="sub" variant="contained" onClick={onClick}>
                {btnAction}
              </SkrButton>
            )}
          </SkrDialogActions>
        </>
      );
    } else {
      return <></>;
    }
  }
);

ModalFooter.displayName = "ModalFooter";
export default ModalFooter;
