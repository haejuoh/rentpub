import React from "react";
// SkrComponents
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGrid from "./../../components/skr/SkrGrid";
import SkrBox from "../../components/skr/SkrBox";
import SkrButton from "../../components/skr/SkrButton";
// Title Components
import TitleSection from "../../components/customed/title/section/TitleSection";
// Guide
import { CodeBox } from "../../assets/style/guideStyle";

const TitleDefault = {
  title: "홍길동님의 계약정보",
};
const TitleDesc = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
};
const TitleBadge = {
  title: "홍길동님의 계약정보",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};
const TitleOption = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};

export const TitleSectionDefault = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Default
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSection titleData={TitleDefault} />
          <TitleSection titleData={TitleDefault}>
            <SkrButton color="default" variant="outlined">
              수정하기
            </SkrButton>
          </TitleSection>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDefault = {
  title: "홍길동님의 계약정보",
};
// Default
<TitleSection titleData={TitleDefault} />
// Default with Button
<TitleSection titleData={TitleDefault}>
    <SkrButton color="default" variant="outlined">
        수정하기
    </SkrButton>
</TitleSection>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSectionDesc = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Description
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSection titleData={TitleDesc} />
          <TitleSection titleData={TitleDesc}>
            <SkrButton color="default" variant="outlined">
              수정하기
            </SkrButton>
          </TitleSection>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDesc = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
};
  // Default
  <TitleSection titleData={TitleDesc} />
  // Default with Button
  <TitleSection titleData={TitleDesc}>
      <SkrButton color="default" variant="outlined">
          수정하기
      </SkrButton>
  </TitleSection>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSectionBadge = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Badge
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSection titleData={TitleBadge} />
          <TitleSection titleData={TitleBadge}>
            <SkrButton color="default" variant="outlined">
              수정하기
            </SkrButton>
          </TitleSection>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleBadge = {
  title: "홍길동님의 계약정보",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};

    // Default
    <TitleSection titleData={TitleBadge} />
    // Default with Button
    <TitleSection titleData={TitleBadge}>
        <SkrButton color="default" variant="outlined">
            수정하기
        </SkrButton>
    </TitleSection>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSectionOption = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Description &amp; Badge
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSection titleData={TitleOption} />
          <TitleSection titleData={TitleOption}>
            <SkrButton color="default" variant="outlined">
              수정하기
            </SkrButton>
          </TitleSection>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleOption = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};
  
      // Default
      <TitleSection titleData={TitleBadge} />
      // Default with Button
      <TitleSection titleData={TitleBadge}>
          <SkrButton color="default" variant="outlined">
              수정하기
          </SkrButton>
      </TitleSection>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
