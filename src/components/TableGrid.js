import React from "react";
import { makeStyles } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowsProp,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import {
  Pagination,
  TablePagination,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { ReactComponent as IconArrowUp } from "../assets/images/icons/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../assets/images/icons/arrow-down.svg";
import { ReactComponent as IconFilter } from "../assets/images/icons/filter.svg";
import { ReactComponent as IconDelete } from "../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import { SelectLabelHidden } from "./Select";

const FooterStyle = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    width: "100%",
    height: "44px",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: `1px solid ${theme.palette.border[500]}`,
  },
  option: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "20px",
  },
  select: {
    width: "103px",
  },
  count: {
    color: ` ${theme.palette.primary.main}`,
  },
}));

// const text = "데이터 없음";
// const rows: GridRowsProp = [
//   {
//     id: 1,
//     col1: "1번째",
//     col2: "1번째",
//     col3: "1번째",
//     col4: "1번째",
//     status: "사용",
//   },
//   {
//     id: 2,
//     col1: "2번째",
//     col2: "2번째",
//     col3: "2번째",
//     col4: "2번째",
//     status: "미사용",
//   },
//   {
//     id: 3,
//     col1: "3번째",
//     col2: "3번째",
//     col3: "3번째",
//     col4: "3번째",
//     status: "사용",
//   },
//   {
//     id: 4,
//     col1: "4번째",
//     col2: "4번째",
//     col3: "4번째",
//     col4: "4번째",
//     status: "사용",
//   },
//   {
//     id: 5,
//     col1: "5번째",
//     col2: "5번째",
//     col3: "5번째",
//     col4: "5번째",
//     status: "미사용",
//   },
//   {
//     id: 6,
//     col1: "6번째",
//     col2: "6번째",
//     col3: "6번째",
//     col4: "6번째",
//     status: "미사용",
//   },
//   {
//     id: 7,
//     col1: "7번째",
//     col2: "7번째",
//     col3: "7번째",
//     col4: "7번째",
//     status: "미사용",
//   },
//   {
//     id: 8,
//     col1: "8번째",
//     col2: "8번째",
//     col3: "8번째",
//     col4: "8번째",
//     status: "사용",
//   },
//   {
//     id: 9,
//     col1: "9번째",
//     col2: "9번째",
//     col3: "9번째",
//     col4: "9번째",
//     status: "미사용",
//   },
//   {
//     id: 10,
//     col1: "10번째",
//     col2: "10번째",
//     col3: "10번째",
//     col4: "10번째",
//     status: "사용",
//   },
// ];

// const columns: GridColDef[] = [
//   { field: "col1", headerName: "Header", flex: 1 },
//   { field: "col2", headerName: "Header", flex: 1 },
//   { field: "col3", headerName: "Header", flex: 1 },
//   { field: "col4", headerName: "Header", flex: 1 },
//   {
//     field: "status",
//     headerName: "Header",
//     flex: 1,
//     renderCell: (params) => {
//       if (params.value === "사용") {
//         return <Chip label={params.value} color="success" />;
//       } else {
//         return <Chip label={params.value} color="cancel" />;
//       }
//     },
//   },
//   {
//     field: "actions",
//     type: "actions",
//     width: 40,
//     getActions: (params) => [
//       <GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />,
//       <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />,
//     ],
//   },
// ];

const CustomPagination = () => {
  const footer = FooterStyle();
  const selectRowsPer = {
    style: {
      PaperProps: {
        style: {
          width: 103,
        },
      },
    },
    option: ["5건 보기", "10건 보기", "20건 보기"],
    disabled: false,
    isIcon: false,
  };
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <div className={footer.wrap}>
      <Typography variant="b2">
        <span className={footer.count}>0</span>
        <span>건 선택됨</span>
      </Typography>
      <div className={footer.option}>
        <div className={footer.select}>
          <SelectLabelHidden selectData={selectRowsPer} />
        </div>
        <Pagination
          color="primary"
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
          showFirstButton
          showLastButton
          size="small"
        />
      </div>
    </div>
  );
};
// const CustomNoRowsOverlay = () => {
//   return (
//     <Stack height="100%" alignItems="center" justifyContent="center">
//       <Typography variant="b1">
//         권한을 등록하려면, 우측에 있는 권한선택 테이블에서 권한을
//         이동시켜주세요.
//       </Typography>
//     </Stack>
//   );
// };
export function SortedDescendingIcon() {
  return <IconArrowDown className="icon" />;
}
export function SortedAscendingIcon() {
  return <IconArrowUp className="icon" />;
}
export function ColumnMenuIcon() {
  return <IconFilter className="icon" />;
}
const TableGrid = ({ columnData, rowData, customNoRowsOverlay }) => {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        rows={rowData}
        columns={columnData}
        checkboxSelection
        components={{
          Footer: CustomPagination,
          ColumnSortedDescendingIcon: SortedDescendingIcon,
          ColumnSortedAscendingIcon: SortedAscendingIcon,
          ColumnMenuIcon: ColumnMenuIcon,
          NoRowsOverlay: customNoRowsOverlay,
        }}
      />
    </>
  );
};

export default TableGrid;
