import React from "react";
import { makeStyles, styled } from "@mui/styles";
import { Grid, TextField, Stack, Divider, Typography, Pagination, Box, Button, Chip } from "@mui/material";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { PageTitle } from "../components/Title";
import { Section } from "../components/Section";
import { TableTitle } from "../components/Title";
import { SelectField } from "../components/Select";
import { DataGrid, gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import { SelectLabelHidden } from "../components/Select";
import { ReactComponent as IconArrowUp } from "../assets/images/icons/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../assets/images/icons/arrow-down.svg";
import { ReactComponent as IconFilter } from "../assets/images/icons/filter.svg";
import { ReactComponent as IconExcel } from "../assets/images/icons/excel.svg";
import { ReactComponent as IconDelete } from "../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import { theme } from "../assets/style/customTheme";
import { GridActionsCellItem, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import TableGrid from "../components/TableGrid";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "직무관리", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "기준정보",
  },
  {
    type: "bookmark",
    menu: "직무조회",
    active: true,
  },
];
const defaultData = {
  label: "사용여부",
  // select combo box 너비 지정
  style: { PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } } },
  option: ["전체"],
  disabled: false,
  isIcon: false,
};
const tableTitleData = {
  title: "직무조회 목록",
  desc: {
    isShow: true,
    content: "12,340",
  },
};

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
const rows = [
  {
    id: 1,
    col1: "00001111111",
    col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
    col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
    col4: "badge",
    col5: "홍길동",
    col6: "2022-04-01 12:00:30",

    status: "사용",
  },
  {
    id: 1,
    col1: "00001111111",
    col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
    col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
    col4: "badge",
    col5: "홍길동",
    col6: "2022-04-01 12:00:30",

    status: "미사용",
  },
  {
    id: 1,
    col1: "00001111111",
    col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
    col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
    col4: "badge",
    col5: "홍길동",
    col6: "2022-04-01 12:00:30",

    status: "사용",
  },
  {
    id: 1,
    col1: "00001111111",
    col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
    col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
    col4: "badge",
    col5: "홍길동",
    col6: "2022-04-01 12:00:30",

    status: "사용",
  },
  {
    id: 1,
    col1: "00001111111",
    col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
    col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
    col4: "badge",
    col5: "홍길동",
    col6: "2022-04-01 12:00:30",

    status: "사용",
  },
  {
    id: 1,
    col1: "00001111111",
    col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
    col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
    col4: "badge",
    col5: "홍길동",
    col6: "2022-04-01 12:00:30",

    status: "사용",
  },
];
const columns = [
  { field: "col1", headerName: "직무ID", width: 140, headerAlign: "center", align: "center" },
  { field: "col2", headerName: "직무명", width: 176, headerAlign: "center", align: "center" },
  { field: "col3", headerName: "직무설명", flex: 1, headerAlign: "center", align: "center" },
  { field: "col4", headerName: "사용여부", width: 118, headerAlign: "center", align: "center" },
  { field: "col5", headerName: "입력사용자", width: 140, headerAlign: "center", align: "center" },
  { field: "col6", headerName: "최종 수정일", width: 176, headerAlign: "center", align: "center" },
  // { field: "col7", headerName: " ", width: 40, headerAlign: "center", align: "center" },
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
    getActions: (params) => [<GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />, <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />],
  },
  // { field: "col7", headerName: "", flex: 1 },
];

const CustomNoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">검색 조건을 입력하고, 검색 버튼을 눌러주세요.</Typography>
    </Stack>
  );
};

// const MuiGridTable = () => {
//   const [pageSize, setPageSize] = React.useState(5);
//   const DataGridStyle = styled(Box)(({ theme }) => ({
//     width: "100%",
//     height: "284px",
//   }));

//   return (
//     <DataGridStyle>
//       <DataGrid
//         pageSize={pageSize}
//         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//         rowsPerPageOptions={[5, 10, 20]}
//         rows={rows}
//         columns={columns}
//         components={{
//           Footer: CustomPagination,
//           ColumnSortedDescendingIcon: SortedDescendingIcon,
//           ColumnSortedAscendingIcon: SortedAscendingIcon,
//           ColumnMenuIcon: ColumnMenuIcon,
//         }}
//       />
//     </DataGridStyle>
//   );
// };

const Table = ({ columnData, rowData, customNoRowsOverlay, isCheckbox }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <TableGrid columnData={columns} rowData={rows} customNoRowsOverlay={CustomNoRowsOverlay} isCheckbox={false} />
    </div>
  );
};

const TaskManage = () => {
  const layout = LayoutStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}></PageTitle>
        <Stack spacing={30}>
          <Section variant="search">
            <Grid container columnSpacing={20}>
              <Grid item xs={3}>
                <SelectField selectData={defaultData} />
              </Grid>
              <Grid item xs={9}>
                <TextField label="직무명" placeholder="직무명" />
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">
            <Box pb={10}>
              <TableTitle titleData={tableTitleData}>
                <Button color="primary" variant="contained">
                  직무등록
                </Button>
              </TableTitle>
            </Box>
            <Divider type="section15" />
            <Grid container>
              <Grid item xs={12}>
                <Table />
              </Grid>
            </Grid>
          </Section>
        </Stack>
      </div>
    </>
  );
};

export default TaskManage;
