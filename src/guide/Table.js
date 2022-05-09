import React from "react";
import {
  GridActionsCellItem,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import {
  TablePagination,
  Typography,
  Chip,
  Stack,
  Grid,
  Box,
} from "@mui/material";
import { CodeBox, FlexBox } from "../assets/style/guideStyle";
import { ReactComponent as IconArrowUp } from "../assets/images/icons/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../assets/images/icons/arrow-down.svg";
import { ReactComponent as IconFilter } from "../assets/images/icons/filter.svg";
import { ReactComponent as IconDelete } from "../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import { ReactComponent as IconOpiton } from "../assets/images/icons/options.svg";
import TableGrid from "../components/TableGrid";

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
    field: "status",
    headerName: "Header",
    flex: 1,
    renderCell: (params) => {
      if (params.value === "사용") {
        return <Chip label={params.value} color="success" />;
      } else {
        return <Chip label={params.value} color="cancel" />;
      }
    },
  },
  {
    field: "actions",
    type: "actions",
    width: 40,
    getActions: (params) => [
      <GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />,
      <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />,
    ],
  },
];

const CustomNoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">데이터 없음</Typography>
    </Stack>
  );
};
const CustomNoResultsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">결과 없음</Typography>
    </Stack>
  );
};

export const Table = ({
  columnData,
  rowData,
  customNoRowsOverlay,
  customNoResultsOverlay,
  isCheckbox,
}) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <TableGrid
        columnData={columns}
        rowData={rows}
        customNoRowsOverlay={CustomNoRowsOverlay}
        customNoResultsOverlay={CustomNoResultsOverlay}
        isCheckbox={true}
      />
    </div>
  );
};
const rowsDefault = [
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

const columnsDefault = [
  { field: "col1", headerName: "Header", flex: 1 },
  { field: "col2", headerName: "Header", flex: 1 },
  { field: "col3", headerName: "Header", flex: 1 },
  { field: "col4", headerName: "Header", flex: 1 },
  { field: "col5", headerName: "Header", flex: 1 },
  // {
  //   field: "actions",
  //   type: "actions",
  //   width: 40,
  //   getActions: (params) => [
  //     <GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />,
  //     <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />,
  //   ],
  // },
];
export const TableDefault = () => {
  return (
    <Grid container spacing={40}>
      <Grid item xs={6}>
        <Box sx={{ height: 550 }}>
          <TableGrid
            columnData={columnsDefault}
            rowData={rowsDefault}
            customNoRowsOverlay={CustomNoRowsOverlay}
            customNoResultsOverlay={CustomNoResultsOverlay}
            isCheckbox={false}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`const rowsDefault = [
  { id: 1, col1: "1번째", col2: "1번째", col3: "1번째", col4: "1번째", col5: "1번째" }, 
  //... 데이터반복 
];

const columnsDefault = [
  { field: "col1", headerName: "Header", flex: 1 }, 
  //... 데이터 반복
];

// Default
// isCheckbox Boolean값에 따라 checkbox 표시
<Box sx={{ height: 550 }}>
  <TableGrid
    columnData={columnsDefault}
    rowData={rowsDefault}
    isCheckbox={false}
  />
</Box>
`}</pre>
        </CodeBox>
      </Grid>
    </Grid>
  );
};
const rowsAction = [
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

const columnsAction = [
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
      <IconOpiton style={{ width: "18px", height: "18px" }} />
    ),
    getActions: (params) => [
      <GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />,
      <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />,
    ],
  },
];
export const TableAction = () => {
  return (
    <Grid container spacing={40}>
      <Grid item xs={6}>
        <Box sx={{ height: 550 }}>
          <TableGrid
            columnData={columnsAction}
            rowData={rowsAction}
            customNoRowsOverlay={CustomNoRowsOverlay}
            customNoResultsOverlay={CustomNoResultsOverlay}
            isCheckbox={true}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`const rowsDefault = [
  { id: 1, col1: "1번째", col2: "1번째", col3: "1번째", col4: "1번째", col5: "1번째" }, 
  //... 데이터반복 
];

const columnsDefault = [
  { field: "col1", headerName: "Header", flex: 1 }, 
  //... 데이터 반복,
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

// Default
// isCheckbox Boolean값에 따라 checkbox 표시
<Box sx={{ height: 550 }}>
  <TableGrid
    columnData={columnsDefault}
    rowData={rowsDefault}
    isCheckbox={true}
  />
</Box>
`}</pre>
        </CodeBox>
      </Grid>
    </Grid>
  );
};
const rowsBadge = [
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

const columnsBadge = [
  { field: "col1", headerName: "Header", flex: 1 },
  { field: "col2", headerName: "Header", flex: 1 },
  { field: "col3", headerName: "Header", flex: 1 },
  { field: "col4", headerName: "Header", flex: 1 },
  {
    field: "status",
    headerName: "상태",
    flex: 1,
    renderCell: (params) => {
      if (params.value === "사용") {
        return <Chip label={params.value} color="success" />;
      } else {
        return <Chip label={params.value} color="cancel" />;
      }
    },
  },
];
export const TableBadge = () => {
  return (
    <Grid container spacing={40}>
      <Grid item xs={6}>
        <Box sx={{ height: 550 }}>
          <TableGrid
            columnData={columnsBadge}
            rowData={rowsBadge}
            customNoRowsOverlay={CustomNoRowsOverlay}
            customNoResultsOverlay={CustomNoResultsOverlay}
            isCheckbox={true}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`const rowsDefault = [
  { id: 1, col1: "1번째", col2: "1번째", col3: "1번째", col4: "1번째", status: "사용"}, 
  //... 데이터반복 
];

const columnsDefault = [
  { field: "col1", headerName: "Header", flex: 1 }, 
  //... 데이터 반복,
  {
    field: "status",
    headerName: "상태",
    flex: 1,
    renderCell: (params) => {
      if (params.value === "사용") {
        return <Chip label={params.value} color="success" />;
      } else {
        return <Chip label={params.value} color="cancel" />;
      }
    },
  },
];

// Default
// isCheckbox Boolean값에 따라 checkbox 표시
<Box sx={{ height: 550 }}>
  <TableGrid
    columnData={columnsBadge}
    rowData={rowsBadge}
    isCheckbox={true}
  />
</Box>
`}</pre>
        </CodeBox>
      </Grid>
    </Grid>
  );
};
