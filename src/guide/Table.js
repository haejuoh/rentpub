import React from "react";
import {
  GridActionsCellItem,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
import { TablePagination, Typography, Chip, Stack } from "@mui/material";
import { ReactComponent as IconArrowUp } from "../assets/images/icons/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../assets/images/icons/arrow-down.svg";
import { ReactComponent as IconFilter } from "../assets/images/icons/filter.svg";
import { ReactComponent as IconDelete } from "../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import TableGrid from "../components/TableGrid";

const rows: GridRowsProp = [
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

const columns: GridColDef[] = [
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
const Table = ({ columnData, rowData, customNoRowsOverlay }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <TableGrid
        columnData={columns}
        rowData={rows}
        customNoRowsOverlay={CustomNoRowsOverlay}
      />
    </div>
  );
};

export default Table;
