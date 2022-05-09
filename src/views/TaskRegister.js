import React from "react";
import { makeStyles, styled } from "@mui/styles";
import {
  Grid,
  IconButton,
  Box,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  Typography,
  Pagination,
} from "@mui/material";
import Mdi from "../components/Mdi";
import { LayoutStyle } from "../assets/style/common";
import { DefaultTextField } from "../assets/style/common";
import { Section } from "../components/Section";
import { PageTitle, SubTitle } from "../components/Title";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { SelectLabelHidden } from "../components/Select";
import { ReactComponent as IconChevronForward } from "../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronBack } from "../assets/images/icons/chevron-back.svg";
import { ReactComponent as IconSearch } from "../assets/images/icons/search.svg";
import { ReactComponent as IconArrowUp } from "../assets/images/icons/arrow-up.svg";
import { ReactComponent as IconArrowDown } from "../assets/images/icons/arrow-down.svg";
import { ReactComponent as IconFilter } from "../assets/images/icons/filter.svg";

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
    menu: "직무등록",
    active: true,
  },
];
const TitleDefault01 = {
  title: "직무상세",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
const TitleDefault02 = {
  title: "권한설정",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
const TitleDefault03 = {
  title: "권한선택",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
const TransferStyle = makeStyles((theme) => ({
  container: {
    // position: "relative",
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    height: "382px",
    // minHeight: "381px",
  },
  btnWrap: {
    position: "absolute",
    top: "179px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "24px",
  },
  btn: {
    "&:first-child": {
      marginBottom: "15px",
    },
  },
}));

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
const rows = [
  {
    id: 1,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
  {
    id: 2,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
  {
    id: 3,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
  {
    id: 4,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
  {
    id: 5,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
  {
    id: 6,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
  {
    id: 7,
    col1: "차정영업1",
    col2: "홍길동",
    col3: "2022-04-01 12:00:30",
  },
];
const columns = [
  {
    field: "col1",
    headerName: "권한명",
    width: 188,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "col2",
    headerName: "입력사용자",
    width: 134,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "col3",
    headerName: "입력일",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];
const MuiGridTable01 = () => {
  const [pageSize, setPageSize] = React.useState(5);
  const DataGridStyle = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "333px",
  }));

  return (
    <DataGridStyle>
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
      />
    </DataGridStyle>
  );
};
const MuiGridTable02 = () => {
  const [pageSize, setPageSize] = React.useState(5);
  const DataGridStyle = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "284px",
    marginTop: "15px",
  }));

  return (
    <DataGridStyle>
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
      />
    </DataGridStyle>
  );
};

const TaskRegister = () => {
  const layout = LayoutStyle();
  const transfer = TransferStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}></PageTitle>
        <Stack spacing={30}>
          <Section variant="default">
            <SubTitle titleData={TitleDefault01} />
            <Divider type="section15" />
            <Grid container rowSpacing={16} columnSpacing={15}>
              <Grid item xs={3}>
                <DefaultTextField
                  label="직무명"
                  placeholder="직무명"
                  value="차정영업"
                />
              </Grid>
              <Grid item xs={3}>
                <DefaultTextField
                  label="사용여부"
                  placeholder="사용여부"
                  value="사용여부"
                />
              </Grid>
              <Grid item xs={12}>
                <DefaultTextField
                  label="직무설명"
                  placeholder="직무설명"
                  value="직무설명을 위한 공간"
                />
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">
            <Box className={transfer.container}>
              <Grid container columnSpacing={64}>
                <Grid container item xs={6} className={transfer.wrap}>
                  <SubTitle titleData={TitleDefault02} />
                  <Divider type="section15" />
                  <MuiGridTable01 />
                </Grid>
                <Grid container item xs={6} className={transfer.wrap}>
                  <SubTitle titleData={TitleDefault03} />
                  <Divider type="section15" />
                  <TextField
                    hiddenLabel
                    fullWidth
                    placeholder="검색할 권한을 입력해주세요"
                    defaultValue=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton color="function" size="small">
                            <IconSearch />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <MuiGridTable02 />
                </Grid>
              </Grid>
              <Box className={transfer.btnWrap}>
                <IconButton
                  color="function"
                  variant="outlined"
                  size="small"
                  className={transfer.btn}
                >
                  <IconChevronForward />
                </IconButton>
                <IconButton
                  color="function"
                  variant="outlined"
                  size="small"
                  className={transfer.btn}
                >
                  <IconChevronBack />
                </IconButton>
              </Box>
            </Box>
          </Section>
        </Stack>
      </div>
    </>
  );
};

export default TaskRegister;
