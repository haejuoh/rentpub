import React from "react";

//components
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import Mdi from "../../components/customed/layout/Mdi";
import TitlePage from "../../components/customed/title/page/TitlePage";

//parts
import Search from "./_parts/Search";
import List from "./_parts/List";

//style
import * as LayoutStyled from "../../assets/style/common";

// icons
import { PencilIcon } from "../../assets/style/icons";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "작업자근무파트관리", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "작업조관리",
  },
  {
    type: "bookmark",
    menu: "작업자근무파트관리",
  },
];

const index = () => {
  return (
    <>
      <Mdi tabData={tabData} />
      <LayoutStyled.Page>
        <TitlePage titleData={titleData}>
          <SkrStack direction="row" spacing={8}>
            <SkrButton
              color="primary"
              variant="contained"
              endIcon={<PencilIcon />}
            >
              신규등록
            </SkrButton>
          </SkrStack>
        </TitlePage>
        <SkrStack spacing={30}>
          <Search />
          <List />
        </SkrStack>
      </LayoutStyled.Page>
    </>
  );
};

export default index;
