import React from "react";
//skr
import SkrBox from "../../components/skr/SkrBox";
import SkrGrid from "../../components/skr/SkrGrid";
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGridActionsCellItem from "./../../components/skr/SkrGridActionsCellItem";
//common
import DataGrid from "../../components/customed/dataGrid/DataGrid";
import NoRows from "../../components/customed/dataGrid/exception/NoRows";
import NoResults from "../../components/customed/dataGrid/exception/NoResults";

//icons
import { OptionIcon, DeleteIcon } from "../../assets/style/icons";

//guide
import { CodeBox } from "../../assets/style/guideStyle";

//data
const rows = [
  {
    id: 1,
    col1: "1번째",
    col2: "1번째",
    col3: "1번째",
    col4: "1번째",
    col5: "1번째",
  },
  {
    id: 2,
    col1: "2번째",
    col2: "2번째",
    col3: "2번째",
    col4: "2번째",
    col5: "2번째",
  },
  {
    id: 3,
    col1: "3번째",
    col2: "3번째",
    col3: "3번째",
    col4: "3번째",
    col5: "3번째",
  },
  {
    id: 4,
    col1: "4번째",
    col2: "4번째",
    col3: "4번째",
    col4: "4번째",
    col5: "4번째",
  },
  {
    id: 5,
    col1: "5번째",
    col2: "5번째",
    col3: "5번째",
    col4: "5번째",
    col5: "5번째",
  },
  {
    id: 6,
    col1: "6번째",
    col2: "6번째",
    col3: "6번째",
    col4: "6번째",
    col5: "6번째",
  },
  {
    id: 7,
    col1: "7번째",
    col2: "7번째",
    col3: "7번째",
    col4: "7번째",
    col5: "7번째",
  },
  {
    id: 8,
    col1: "8번째",
    col2: "8번째",
    col3: "8번째",
    col4: "8번째",
    col5: "8번째",
  },
  {
    id: 9,
    col1: "9번째",
    col2: "9번째",
    col3: "9번째",
    col4: "9번째",
    col5: "9번째",
  },
  {
    id: 10,
    col1: "10번째",
    col2: "10번째",
    col3: "10번째",
    col4: "10번째",
    col5: "10번째",
  },
];
const columns = [
  { field: "col1", headerName: "Header", flex: 1 },
  { field: "col2", headerName: "Header", flex: 1 },
  { field: "col3", headerName: "Header", flex: 1 },
  { field: "col4", headerName: "Header", flex: 1 },
  { field: "col5", headerName: "Header", flex: 1 },
  {
    field: "actions",
    type: "actions",
    width: 40,
    renderHeader: () => (
      <OptionIcon style={{ width: "18px", height: "18px" }} />
    ),
    getActions: (params) => [
      <SkrGridActionsCellItem
        icon={<OptionIcon />}
        label="사용함"
        showInMenu
      />,
      <SkrGridActionsCellItem icon={<DeleteIcon />} label="삭제" showInMenu />,
    ],
  },
];

const DataGridDefault = () => {
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SkrTypography variant="st2" pb={10}>
          checbox : false
        </SkrTypography>
        <SkrBox sx={{ height: 284 }}>
          <DataGrid
            columnData={columns}
            rowData={rows}
            customNoRowsOverlay={<NoRows message="데이터 없음" />}
            customNoResultsOverlay={<NoResults message="결과 없음" />}
            isCheckbox={true}
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
  {
    field: "actions",
    type: "actions",
    width: 40,
    renderHeader: () => (
      <IconOpiton style={{ width: "18px", height: "18px" }} />
    ),
    getActions: (params) => [
      <GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />,
      <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />,
    ],
  },
];

// ActionField
// isCheckbox Boolean값에 따라 checkbox 표시
// 
<Box sx={{ height: 284 }}>
  <DataGrid
    columnData={columns}
    rowData={rows}
    customNoRowsOverlay={<NoRows message="데이터 없음" />}
    customNoResultsOverlay={<NoResults message="결과 없음" />}
    isCheckbox={true}
    />
</Box>
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};

export default DataGridDefault;
