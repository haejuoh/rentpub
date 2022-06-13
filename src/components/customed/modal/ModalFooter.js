import React from "react";
import SkrDialog from "../../skr/SkrDialog";
import SkrDialogTitle from "../../skr/SkrDialogTitle";
import SkrDialogContent from "../../skr/SkrDialogContent";
import SkrDialogActions from "../../skr/SkrDialogActions";
import SkrTypography from "../../skr/SkrTypography";
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
