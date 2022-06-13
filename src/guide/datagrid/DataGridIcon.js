import React from "react";
//skr
import SkrBox from "../../components/skr/SkrBox";
import SkrGrid from "../../components/skr/SkrGrid";
import SkrTypography from "../../components/skr/SkrTypography";
import SkrChip from "../../components/skr/SkrChip";
// import SkrTooltip from "../../components/skr/SkrTooltip";
// import SkrIconButton from "../../components/skr/SkrIconButton";
//common
import DataGrid from "../../components/customed/datagrid";
import NoRows from "../../components/customed/datagrid/NoRows";
import NoResults from "../../components/customed/datagrid/NoResults";
// import { AccessibilityIcon, CarIcon, StopIcon } from "../../assets/style/icons";

import { CodeBox } from "../../assets/style/guideStyle";
import SkrButton from "../../components/skr/SkrButton";
import SkrStack from "../../components/skr/SkrStack";
// import * as DataGridStyled from "../../components/customed/datagrid/style";
import FieldIcons from "../../components/customed/datagrid/fields/FieldIcons";
//data
const rows = [
  {
    id: 1,
    col1: "1번째",
    col2: "1번째",
    col3: "1번째",
    col4: "1번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 2,
    col1: "2번째",
    col2: "2번째",
    col3: "2번째",
    col4: "2번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 3,
    col1: "3번째",
    col2: "3번째",
    col3: "3번째",
    col4: "3번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 4,
    col1: "4번째",
    col2: "4번째",
    col3: "4번째",
    col4: "4번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 5,
    col1: "5번째",
    col2: "5번째",
    col3: "5번째",
    col4: "5번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 6,
    col1: "6번째",
    col2: "6번째",
    col3: "6번째",
    col4: "6번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 7,
    col1: "7번째",
    col2: "7번째",
    col3: "7번째",
    col4: "7번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 8,
    col1: "8번째",
    col2: "8번째",
    col3: "8번째",
    col4: "8번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 9,
    col1: "9번째",
    col2: "9번째",
    col3: "9번째",
    col4: "9번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
  {
    id: 10,
    col1: "10번째",
    col2: "10번째",
    col3: "10번째",
    col4: "10번째",
    option: [
      { icon: "accessibility", active: true, title: "옵션1" },
      { icon: "car", active: false, title: "옵션2" },
      { icon: "stop", active: false, title: "옵션3" },
      { icon: "stop", active: false, title: "옵션4" },
    ],
  },
];
const columns = [
  { field: "col1", headerName: "Header", flex: 1 },
  { field: "col2", headerName: "Header", flex: 1 },
  { field: "col3", headerName: "Header", flex: 1 },
  { field: "col4", headerName: "Header", flex: 1 },
  {
    field: "option",
    headerName: "추가옵션",
    flex: 1,
    renderCell: FieldIcons,
  },
];

const DataGridIcon = () => {
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SkrBox sx={{ height: 284 }}>
          <DataGrid
            columnData={columns}
            rowData={rows}
            customNoRowsOverlay={<NoRows message="데이터 없음" />}
            customNoResultsOverlay={<NoResults message="결과 없음" />}
            isCheckbox={false}
          />
        </SkrBox>
      </SkrGrid>
      <SkrGrid item xs={6}>
        <CodeBox>
          <pre>{`const rows = [
  { id: 1, col1: "1번째", col2: "1번째", col3: "1번째", col4: "1번째", col5: "1번째" }, 
  //... 데이터반복 
];

const columns = [
  { field: "col1", headerName: "Header", flex: 1 }, 
  //... 데이터 반복
];

// Default
// isCheckbox Boolean값에 따라 checkbox 표시
// 
<Box sx={{ height: 284 }}>
  <DataGrid
    columnData={columns}
    rowData={rows}
    customNoRowsOverlay={<NoRows message="데이터 없음" />}
    customNoResultsOverlay={<NoResults message="결과 없음" />}
    isCheckbox={false}
  />
</Box>
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};

export default DataGridIcon;
