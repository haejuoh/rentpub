import React from "react";
// SkrComponents
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGrid from "./../../components/skr/SkrGrid";
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
// Title Components
import { TitlePage } from "../../components/customed/title/page/TitlePage";
// Guide
import { CodeBox } from "../../assets/style/guideStyle";
const titleData = [
  {
    path: "/",
    menu: "즐겨찾기 메뉴 1",
  },
  {
    path: "/",
    menu: "다운로드 양식 1",
  },
  {
    type: "bookmark",
    menu: "다운로드 메뉴얼 1",
  },
];
export const TitlePageDefault = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Default
      </SkrTypography>
      <SkrGrid container spacing={2} mt={2}>
        <SkrGrid item xs={8}>
          <TitlePage titleData={titleData} />
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`<TitlePage titleData={titleData}/>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const TitlePageWithButton = () => {
  return (
    <>
      <SkrTypography variant="h3" pb={12}>
        Button
      </SkrTypography>
      <SkrGrid container spacing={2} mt={2}>
        <SkrGrid item xs={8}>
          <TitlePage titleData={titleData}>
            <SkrStack direction="row" spacing={8}>
              <SkrButton color="primary" variant="contained">
                Button
              </SkrButton>
              <SkrButton color="primary" variant="contained">
                Button
              </SkrButton>
              <SkrButton color="primary" variant="contained">
                Button
              </SkrButton>
            </SkrStack>
          </TitlePage>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            <pre>{`<TitlePage titleData={titleData}>
  <SkrStack direction="row" spacing={8}>
    <SkrButton color="primary" variant="contained">Button</SkrButton>
    <SkrButton color="primary" variant="contained">Button</SkrButton>
  </SkrStack>
</TitlePage>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
