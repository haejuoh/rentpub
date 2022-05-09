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
const CustomNoRowsOverlay = ({ message }) => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">{message}</Typography>
    </Stack>
  );
};

export function SortedDescendingIcon() {
  return <IconArrowDown className="icon" />;
}
export function SortedAscendingIcon() {
  return <IconArrowUp className="icon" />;
}
export function ColumnMenuIcon() {
  return <IconFilter className="icon" />;
}
const TableGrid = ({
  columnData,
  rowData,
  isCheckbox,
  customNoRowsOverlay,
  customNoResultsOverlay,
}) => {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <>
      <DataGrid
        headerHeight={40}
        rowHeight={40}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        rows={rowData}
        columns={columnData}
        checkboxSelection={isCheckbox}
        components={{
          Footer: CustomPagination,
          ColumnSortedDescendingIcon: SortedDescendingIcon,
          ColumnSortedAscendingIcon: SortedAscendingIcon,
          ColumnMenuIcon: ColumnMenuIcon,
          NoRowsOverlay: customNoRowsOverlay,
          NoResultsOverlay: customNoResultsOverlay,
        }}
      />
    </>
  );
};

export default TableGrid;
