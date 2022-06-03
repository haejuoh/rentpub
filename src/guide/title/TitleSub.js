import React from "react";
// SkrComponents
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGrid from "./../../components/skr/SkrGrid";
import SkrBox from "../../components/skr/SkrBox";
import SkrButton from "../../components/skr/SkrButton";
// Title Components
import TitleSub from "../../components/customed/title/sub/TitleSub";
// Guide
import { CodeBox } from "../../assets/style/guideStyle";
const TitleDefault = {
  title: "고객정보",
  desc: "",
  toggle: false,
  tooltip: false,
};
const TitleToggle = {
  title: "고객정보",
  desc: "",
  toggle: true,
  tooltip: false,
};
const TitleTooltip = {
  title: "고객정보",
  desc: "",
  toggle: false,
  tooltip: true,
};
const TitleOption = {
  title: "고객정보",
  desc: "",
  toggle: true,
  tooltip: true,
};
const TitleDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: false,
  tooltip: false,
};
const TitleToggleDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: true,
  tooltip: false,
};
const TitleTooltipDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: false,
  tooltip: true,
};
const TitleOptionDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: true,
  tooltip: true,
};
export const CustomButtonGroup = () => {
  return (
    <SkrButton color="primary" variant="outlined">
      Button
    </SkrButton>
  );
};
export const CustomButtonGroup2 = () => {
  return (
    <>
      <SkrButton color="primary" variant="contained">
        Button
      </SkrButton>
      <SkrButton color="primary" variant="contained">
        Button
      </SkrButton>
      <SkrButton color="primary" variant="contained">
        Button
      </SkrButton>
    </>
  );
};
export const TitleSubDefault = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Default
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleDefault} />
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDefault = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
<TitleSub titleData={TitleDefault} />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubToggle = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Toggle
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleToggle}>고객정보 내용</TitleSub>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleToggle = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: true,
  tooltip: false,
};
<TitleSub titleData={TitleToggle}>고객정보 내용</TitleSub>
  `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubTooltip = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Tooltip
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleTooltip} />
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleTooltip = {
  title: "고객정보",
  desc: "",
  toggle: false,
  tooltip: true,
};
    <TitleSub titleData={TitleToggle} />
    `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubOption = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Toggle &amp; Tooltip
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleOption}>고객정보 내용</TitleSub>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleTooltip = {
    title: "고객정보",
    desc: "",
    toggle: false,
    tooltip: true,
  };
  <TitleSub titleData={TitleOption}>고객정보 내용</TitleSub>
      `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubDesc = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Default
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleDesc} />
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: false,
  tooltip: false,
};
  <TitleSub titleData={TitleDefault} />
  `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubToggleDesc = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Toggle
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleToggleDesc}>고객정보 내용</TitleSub>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleToggleDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: true,
  tooltip: false,
};
  <TitleSub titleData={TitleToggle}>고객정보 내용</TitleSub>
    `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubTooltipDesc = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Tooltip
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleTooltipDesc} />
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleTooltipDesc = {
  title: "고객정보",
  desc: "(계약번호: 111111111111)",
  toggle: false,
  tooltip: true,
};
      <TitleSub titleData={TitleToggle} />
      `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubOptionDesc = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Toggle &amp; Tooltip
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleOptionDesc}>고객정보 내용</TitleSub>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleOptionDesc = {
      title: "고객정보",
      desc: "(계약번호: 111111111111)",
      toggle: false,
      tooltip: true,
    };
    <TitleSub titleData={TitleOption}>고객정보 내용</TitleSub>
        `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubButton1 = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        ButtonGroup
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub titleData={TitleToggle} buttonGroup={<CustomButtonGroup />}>
            고객정보 내용
          </TitleSub>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleOptionDesc = {
        title: "고객정보",
        desc: "(계약번호: 111111111111)",
        toggle: false,
        tooltip: true,
      };
export const CustomButtonGroup = () => {
    return (
        <SkrButton color="primary" variant="outlined">
            Button
        </SkrButton>
    );
};
<TitleSub titleData={TitleOption}>고객정보 내용</TitleSub>
          `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitleSubButton2 = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        ButtonGroup
      </SkrTypography>
      <SkrGrid container spacing={2}>
        <SkrGrid item xs={8}>
          <TitleSub
            titleData={TitleDefault}
            buttonGroup={<CustomButtonGroup2 />}
          />
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`const TitleOptionDesc = {
          title: "고객정보",
          desc: "(계약번호: 111111111111)",
          toggle: false,
          tooltip: true,
        };
export const CustomButtonGroup2 = () => {
    return (
        <>
            <SkrButton color="primary" variant="contained">
                Button
            </SkrButton>
            <SkrButton color="primary" variant="contained">
                Button
            </SkrButton>
            <SkrButton color="primary" variant="contained">
                Button
            </SkrButton>
        </>
    );
};
<TitleSub
    titleData={TitleDefault}
    buttonGroup={<CustomButtonGroup2 />}
/>
            `}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
