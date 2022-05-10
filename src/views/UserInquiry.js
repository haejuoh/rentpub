import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  TextField,
  Stack,
  Button,
  Chip,
  Box,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
  Link,
} from "@mui/material";
import { theme } from "../assets/style/customTheme";
import { LayoutStyle } from "../assets/style/common";
import Mdi from "../components/Mdi";
import { PageTitle, TableTitle } from "../components/Title";
import { Section } from "../components/Section";
import { SelectField } from "../components/Select";
import TableGrid from "../components/TableGrid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../assets/images/icons/excel.svg";
import { ReactComponent as IconDelete } from "../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import { ReactComponent as IconOpiton } from "../assets/images/icons/options.svg";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "사용자조회", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "사용자",
  },
  {
    type: "bookmark",
    menu: "사용자조회",
    active: true,
  },
];
const defaultData = {
  label: "사용자구분",
  // select combo box 너비 지정
  style: {
    PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
  },
  option: ["전체", "일반사용자", "채널사용자", "시스템관리자"],
  disabled: false,
  isIcon: false,
};
const tableTitleData = {
  title: "사용자목록",
  desc: {
    isShow: true,
    content: "12,340",
  },
};
const rows = [
  {
    id: 1,
    col1: "79000033",
    col2: "swoh",
    col3: "홍길동",
    col4: "79000033",
    col5: "010-0000-0000",
    col6: "0",
    status: "정상",
    col8: "일반사용자",
  },
  {
    id: 2,
    col1: "79000033",
    col2: "swoh",
    col3: "홍길동",
    col4: "79000033",
    col5: "010-0000-0000",
    col6: "0",
    status: "생성대기",
    col8: "일반사용자",
  },
  {
    id: 3,
    col1: "79000033",
    col2: "swoh",
    col3: "홍길동",
    col4: "79000033",
    col5: "010-0000-0000",
    col6: "0",
    status: "퇴사",
    col8: "일반사용자",
  },
  {
    id: 4,
    col1: "79000033",
    col2: "swoh",
    col3: "홍길동",
    col4: "79000033",
    col5: "010-0000-0000",
    col6: "0",
    status: "비활성",
    col8: "일반사용자",
  },
  {
    id: 5,
    col1: "79000033",
    col2: "swoh",
    col3: "홍길동",
    col4: "79000033",
    col5: "010-0000-0000",
    col6: "0",
    status: "휴면",
    col8: "일반사용자",
  },
  {
    id: 6,
    col1: "79000033",
    col2: "swoh",
    col3: "홍길동",
    col4: "79000033",
    col5: "010-0000-0000",
    col6: "0",
    status: "정상",
    col8: "일반사용자",
  },
];
const columns = [
  {
    field: "col1",
    headerName: "로그인ID",
    width: 176,
  },
  {
    field: "col2",
    headerName: "사용자ID",
    width: 176,
  },
  {
    field: "col3",
    headerName: "사용자명",
    width: 118,
    renderCell: (params) => (
      <Link to={`/form/${params.value}`}>{params.value}</Link>
    ),
  },
  {
    field: "col4",
    headerName: "사번",
    width: 153,
  },
  {
    field: "col5",
    headerName: "전화번호",
    flex: 1,
  },
  {
    field: "col6",
    headerName: "패스워드오류횟수",
    width: 141,
  },
  {
    field: "status",
    headerName: "상태",
    width: 118,
    renderCell: (params) => {
      switch (params.value) {
        case "정상":
          return <Chip label={params.value} color="success" />;
          break;
        case "생성대기":
          return <Chip label={params.value} color="ready" />;
          break;
        case "퇴사":
          return <Chip label={params.value} color="cancel" />;
          break;
        case "휴면":
          return <Chip label={params.value} color="warning" />;
          break;
        default:
          return (
            <Chip label={params.value} color="default" variant="outlined" />
          );
          break;
      }
    },
  },
  {
    field: "col8",
    headerName: "사용자구분",
    width: 140,
  },
  {
    field: "actions",
    type: "actions",
    width: 40,
    renderHeader: () => (
      <IconOpiton style={{ width: "18px", height: "18px" }} />
    ),
    getActions: (params) => [
      // 디자인 switch 로 변경되어 수정 예정
      <GridActionsCellItem icon={<IconCheck />} label="활성화" showInMenu />,
      <GridActionsCellItem icon={<IconCheck />} label="계정잠금" showInMenu />,
      <GridActionsCellItem icon={<IconCheck />} label="휴면설정" showInMenu />,
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
const Table = ({ columnData, rowData, customNoRowsOverlay, isCheckbox }) => {
  const TableGridStyle = makeStyles((theme) => ({
    wrap: {
      width: "100%",
      height: "284px",
    },
  }));
  const lytable = TableGridStyle();
  return (
    <Box className={lytable.wrap}>
      <TableGrid
        columnData={columns}
        rowData={rows}
        customNoRowsOverlay={CustomNoRowsOverlay}
        isCheckbox={false}
      />
    </Box>
  );
};
const SwitchGroup = () => {
  return (
    <FormControlLabel
      value="switch"
      control={<Switch color="primary" />}
      label="활성화"
      labelPlacement="start"
      defaultChecked
      showInMenu
    />
  );
};

const UserInquiry = () => {
  const layout = LayoutStyle({ theme });
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}>
          <Stack direction="row" spacing={8}>
            <Button
              color="primary"
              variant="contained"
              endIcon={<IconPencil />}
              components={<Switch color="primary" />}
            >
              등록
            </Button>
          </Stack>
        </PageTitle>
        <Stack spacing={30}>
          <Section variant="search">
            <Grid container spacing={20}>
              <Grid item xs={3}>
                <TextField label="로그인ID" placeholder="로그인ID 입력" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="사번" placeholder="사번 입력" />
              </Grid>
              <Grid item xs={3}>
                <TextField label="사용자명" placeholder="사용자명 입력" />
              </Grid>
              <Grid item xs={3}>
                <SelectField selectData={defaultData} />
              </Grid>
            </Grid>
          </Section>
          <Section variant="data">
            <Box pb={10}>
              <TableTitle titleData={tableTitleData}>
                <Button
                  color="excel"
                  variant="outlined"
                  endIcon={<IconExcel />}
                >
                  엑셀다운로드
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

export default UserInquiry;
