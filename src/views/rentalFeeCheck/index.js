import React from "react";
import Mdi from "../../components/customed/layout/Mdi";
import { theme } from "../../assets/style/customTheme";
import * as LayoutStyled from "../../assets/style/common";
//component
import SkrStack from "../../components/skr/SkrStack";
import SkrButton from "../../components/skr/SkrButton";
import TitlePage from "../../components/customed/title/page/TitlePage";
import LySection from "./../../components/customed/layout/LySection";
import SkrGrid from "../../components/skr/SkrGrid";
import SelectLabelPositionTop from "../../components/customed/form/select/SelectLabelPositionTop";
import { Section } from "../../components/customed/layout/Section";
import SkrBox from "../../components/skr/SkrBox";
import DataGrid from "../../components/customed/datagrid";
//icons
import { OptionIcon } from "../../assets/style/icons";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "정보조회", active: true },
  { label: "변경이력조회", active: false },
];
const titleData = [
  {
    path: "/",
    menu: "단기렌탈정보",
  },
  {
    path: "/",
    menu: "단기차정관리",
  },
  {
    type: "bookmark",
    menu: "대여료조회",
  },
];
const select1 = {
  label: "권역-지점",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: [
    "제주-제주지점",
    "기아자동차",
    "쉐보레",
    "렉서스",
    "도요타",
    "포르쉐",
  ],
  disabled: false,
  isIcon: false,
};
const select2 = {
  label: "제조사",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: ["현대자동차", "기아자동차", "쉐보레", "렉서스", "도요타", "포르쉐"],
  disabled: false,
  isIcon: false,
};
const select3 = {
  label: "차종",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: [
    "GENESSIS G70",
    "기아자동차",
    "쉐보레",
    "렉서스",
    "도요타",
    "포르쉐",
  ],
  disabled: false,
  isIcon: false,
};
const select4 = {
  label: "상태",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: ["품의완료", "기아자동차", "쉐보레", "렉서스", "도요타", "포르쉐"],
  disabled: false,
  isIcon: false,
};
//data
const rows = [
  {
    id: 1,
    col1: "1번째",
    col2: "1번째",
    col3: "1번째",
    col4: "1번째",
    status: "사용",
  },
  {
    id: 2,
    col1: "2번째",
    col2: "2번째",
    col3: "2번째",
    col4: "2번째",
    status: "미사용",
  },
  {
    id: 3,
    col1: "3번째",
    col2: "3번째",
    col3: "3번째",
    col4: "3번째",
    status: "사용",
  },
  {
    id: 4,
    col1: "4번째",
    col2: "4번째",
    col3: "4번째",
    col4: "4번째",
    status: "사용",
  },
  {
    id: 5,
    col1: "5번째",
    col2: "5번째",
    col3: "5번째",
    col4: "5번째",
    status: "미사용",
  },
  {
    id: 6,
    col1: "6번째",
    col2: "6번째",
    col3: "6번째",
    col4: "6번째",
    status: "미사용",
  },
  {
    id: 7,
    col1: "7번째",
    col2: "7번째",
    col3: "7번째",
    col4: "7번째",
    status: "미사용",
  },
  {
    id: 8,
    col1: "8번째",
    col2: "8번째",
    col3: "8번째",
    col4: "8번째",
    status: "사용",
  },
  {
    id: 9,
    col1: "9번째",
    col2: "9번째",
    col3: "9번째",
    col4: "9번째",
    status: "미사용",
  },
  {
    id: 10,
    col1: "10번째",
    col2: "10번째",
    col3: "10번째",
    col4: "10번째",
    status: "사용",
  },
];
const columns = [
  { field: "col1", headerName: "Header", flex: 1 },
  { field: "col2", headerName: "Header", flex: 1 },
  { field: "col3", headerName: "Header", flex: 1 },
  { field: "col4", headerName: "Header", flex: 1 },
  {
    field: "actions",
    type: "actions",
    width: 40,
    renderHeader: () => (
      <OptionIcon style={{ width: "18px", height: "18px" }} />
    ),
    renderCell: () => {
      return (
        <SkrIconButton disabled>
          <MoreIcon />
        </SkrIconButton>
      );
    },
  },
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
          </SkrStack>
        </TitlePage>
        <SkrStack spacing={30}>
          <Section variant="search">
            <SkrGrid container columnSpacing={20}>
              <SkrGrid item xs={3}>
                <SelectLabelPositionTop selectData={select1} />
              </SkrGrid>
              <SkrGrid item xs={3}>
                <SelectLabelPositionTop selectData={select2} />
              </SkrGrid>
              <SkrGrid item xs={3}>
                <SelectLabelPositionTop selectData={select3} />
              </SkrGrid>
              <SkrGrid item xs={3}>
                <SelectLabelPositionTop selectData={select4} />
              </SkrGrid>
            </SkrGrid>
          </Section>
          <Section variant="data">
            <SkrBox>
              <DataGrid
                columnData={columns}
                rowData={rows}
                customNoRowsOverlay={<NoRows message="데이터 없음" />}
                customNoResultsOverlay={<NoResults message="결과 없음" />}
                isCheckbox={false}
              />
            </SkrBox>
          </Section>
        </SkrStack>
      </LayoutStyled.Page>
    </>
  );
};

export default index;
