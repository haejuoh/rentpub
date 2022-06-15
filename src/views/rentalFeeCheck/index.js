import React from "react";
import Mdi from "../../components/customed/layout/Mdi";
import { theme } from "../../assets/style/customTheme";
import * as LayoutStyled from "../../assets/style/common";
//component
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import TitlePage from "../../components/customed/title/page/TitlePage";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "정보조회", active: true },
  { label: "변경이력조회", active: false },
];

const index = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData}>
          <SkrStack direction="row" spacing={8}>
            <SkrButton color="primary" variant="contained">
              Button
            </SkrButton>
            <SkrButton color="primary" variant="contained">
              Button
            </SkrButton>
          </SkrStack>
        </TitlePage>
      </LayoutStyled.Page>
    </>
  );
};

export default index;
