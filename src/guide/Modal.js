import * as React from "react";
import { CodeBox } from "../assets/style/guideStyle";
import SkrGrid from "../components/skr/SkrGrid";
import SkrButton from "../components/skr/SkrButton";
import SkrStack from "../components/skr/SkrStack";
import Modal from "../components/customed/modal";

export const ModalSample = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrStack direction="row" spacing={20}>
            <SkrButton
              variant="outlined"
              color="primary"
              size="medium"
              onClick={handleClickOpen}
            >
              open modal btn
            </SkrButton>
            <Modal
              title="modal title"
              btnCancel="취소"
              btnAction="확인"
              open={open}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
            >
              model contents model contents model contents model contents model
              contents model contents
            </Modal>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

<SkrButton
  variant="outlined"
  color="primary"
  size="medium"
  onClick={handleClickOpen}
>
  open modal btn
</SkrButton>

<Modal
  title="modal title"
  btnCancel="취소"
  btnAction="확인"
  open={open}
  handleClickOpen={handleClickOpen}
  handleClose={handleClose}
>
  model contents
</Modal>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
