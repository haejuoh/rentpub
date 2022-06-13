import * as React from "react";
import { CodeBox } from "../assets/style/guideStyle";
import SkrGrid from "../components/skr/SkrGrid";
import SkrButton from "../components/skr/SkrButton";
import SkrStack from "../components/skr/SkrStack";
import Modal from "../components/customed/modal";

export const ModalSample = () => {
  return (
    <>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <Modal
              btnVariant="outlined"
              btnColor="primary"
              btnSize="default"
              btnText="open modal btn"
              title="modal title"
              btnCancel="취소"
              btnAction="확인"
            >
              model contents
            </Modal>
            <Modal
              btnVariant="outlined"
              btnColor="primary"
              btnSize="default"
              btnText="open modal btn"
              btnCancel="취소"
              btnAction="확인"
            >
              model contents
            </Modal>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`
<Modal
  title="modal title"
  btnOpen="open modal btn"
  btnCancel="취소"
  btnAction="확인"
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
