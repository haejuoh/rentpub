import React from "react";
import { CodeBox, GuideTitle } from "../assets/style/guideStyle";
import LoadingBar from "../components/customed/loading/LoadingBar";
import SkrGrid from "../components/skr/SkrGrid";

const LoadingBarList = () => {
  return (
    <>
      <GuideTitle>LoadingBar</GuideTitle>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <LoadingBar />
        </SkrGrid>

        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`//가이드
            `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

export default LoadingBarList;
