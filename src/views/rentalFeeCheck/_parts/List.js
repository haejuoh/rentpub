import React from "react";
//skr

import SkrButton from "../../../components/skr/SkrButton";
import SkrIconButton from "../../../components/skr/SkrIconButton";
import SkrBox from "../../../components/skr/SkrBox";
import { Section } from "../../../components/customed/layout/Section";
import TitleTable from "../../../components/customed/title/table/TitleTable";
import DataGrid from "../../../components/customed/datagrid";
import NoRows from "../../../components/customed/datagrid/NoRows";
import NoResults from "../../../components/customed/datagrid/NoResults";
import { OptionIcon, MoreIcon, ExcelIcon } from "../../../assets/style/icons";
//data
const tableTitleData = {
  title: "고객정보",
  desc: "12,340",
};
const rows = [
  {
    id: 1,
    col1: "제주-제주지점",
    col2: "현대자동차",
    col3: "2019 G70 2.2D[디젤]2WD",
    col4: "278,000",
    col5: "27,000",
    col6: "27,000",
    col7: "27,000",
    col8: "27,000",
    col9: "2022-01-01",
    col10: "9999-12-31",
    col11: "품의완료",
  },
  {
    id: 2,
    col1: "제주-제주지점",
    col2: "현대자동차",
    col3: "2019 G70 2.2D[디젤]2WD",
    col4: "278,000",
    col5: "27,000",
    col6: "27,000",
    col7: "27,000",
    col8: "27,000",
    col9: "2022-01-01",
    col10: "9999-12-31",
    col11: "품의완료",
  },
  {
    id: 3,
    col1: "제주-제주지점",
    col2: "현대자동차",
    col3: "2019 G70 2.2D[디젤]2WD",
    col4: "278,000",
    col5: "27,000",
    col6: "27,000",
    col7: "27,000",
    col8: "27,000",
    col9: "2022-01-01",
    col10: "9999-12-31",
    col11: "품의완료",
  },
  {
    id: 4,
    col1: "제주-제주지점",
    col2: "현대자동차",
    col3: "2019 G70 2.2D[디젤]2WD",
    col4: "278,000",
    col5: "27,000",
    col6: "27,000",
    col7: "27,000",
    col8: "27,000",
    col9: "2022-01-01",
    col10: "9999-12-31",
    col11: "품의중",
  },
  {
    id: 5,
    col1: "제주-제주지점",
    col2: "현대자동차",
    col3: "2019 G70 2.2D[디젤]2WD",
    col4: "278,000",
    col5: "27,000",
    col6: "27,000",
    col7: "27,000",
    col8: "27,000",
    col9: "2022-01-01",
    col10: "9999-12-31",
    col11: "신규등록",
  },
];
const columns = [
  { field: "col1", headerName: "권역-지점", flex: 1 },
  { field: "col2", headerName: "제조사", flex: 1 },
  { field: "col3", headerName: "단기차정명", width: 260 },
  { field: "col4", headerName: "대여료", flex: 1 },
  { field: "col5", headerName: "일반자차", flex: 1 },
  { field: "col6", headerName: "플러스자차", flex: 1 },
  { field: "col7", headerName: "슈퍼자차", flex: 1 },
  { field: "col8", headerName: "완전자차", flex: 1 },
  { field: "col9", headerName: "시작일", width: 106 },
  { field: "col10", headerName: "종료일", width: 106 },
  { field: "col11", headerName: "상태", flex: 1 },
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
const List = () => {
  return (
    <Section variant="data">
      <TitleTable titleData={tableTitleData}>
        <SkrButton color="excel" variant="outlined" endIcon={<ExcelIcon />}>
          엑셀다운로드
        </SkrButton>
      </TitleTable>
      <SkrBox sx={{ height: 284 }}>
        <DataGrid
          columnData={columns}
          rowData={rows}
          customNoRowsOverlay={<NoRows message="데이터 없음" />}
          customNoResultsOverlay={<NoResults message="결과 없음" />}
          isCheckbox={true}
        />
      </SkrBox>
    </Section>
  );
};

export default List;
