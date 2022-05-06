import React from "react";
import { makeStyles } from "@mui/styles";
import { theme } from "../../assets/style/customTheme";
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
import { useDemoData } from "@mui/x-data-grid-generator";
import { Pagination, TablePagination, Typography, Chip } from "@mui/material";
import { ReactComponent as IconArrowUp } from "../../assets/images/icons/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../../assets/images/icons/arrow-down.svg";
import { ReactComponent as IconFilter } from "../../assets/images/icons/filter.svg";
import { ReactComponent as IconDelete } from "../../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../../assets/images/icons/checkmark-circle.svg";
import { SelectLabelHidden } from "../../components/Select";

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

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "Body",
    col2: "Body",
    col3: "Body",
    col4: "Body",
    col5: "Body",
    col6: "Body",
    col7: "Body",
    col8: "Body",
  },
  {
    id: 2,
    col1: "",
    col2: "",
    col3: "",
    col4: "",
    col5: "",
    col6: "",
    col7: "",
    col8: "",
  },
  { id: 3, col1: "MUI", col2: "is Amazing" },
  { id: 4, col1: "MUI", col2: "is Amazing" },
  { id: 5, col1: "MUI", col2: "is Amazing" },
  { id: 6, col1: "MUI", col2: "is Amazing" },
  { id: 7, col1: "MUI", col2: "is Amazing" },
  { id: 8, col1: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Header", flex: 1 },
  { field: "col2", headerName: "Header", flex: 1 },
  { field: "col3", headerName: "Header", flex: 1 },
  { field: "col4", headerName: "Header", flex: 1 },
  { field: "col5", headerName: "Header", flex: 1 },
  { field: "col6", headerName: "Header", flex: 1 },
  { field: "col7", headerName: "Header", flex: 1 },
  { field: "col8", headerName: "Header", flex: 1 },
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

function CustomPagination() {
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
}
export function SortedDescendingIcon() {
  return <IconArrowDown className="icon" />;
}
export function SortedAscendingIcon() {
  return <IconArrowUp className="icon" />;
}
export function ColumnMenuIcon() {
  return <IconFilter className="icon" />;
}
const MuiGrid = () => {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        rows={rows}
        columns={columns}
        components={{
          Footer: CustomPagination,
          ColumnSortedDescendingIcon: SortedDescendingIcon,
          ColumnSortedAscendingIcon: SortedAscendingIcon,
          ColumnMenuIcon: ColumnMenuIcon,
        }}
        checkboxSelection

        //header
      />
    </div>
  );
};

export default MuiGrid;
