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
import { theme } from "../../../assets/style/customTheme";
import { LayoutStyle } from "../../../assets/style/common";
import Mdi from "../../../components/Mdi";
import { PageTitle, TableTitle } from "../../../components/Title";
import { Section } from "../../../components/Section";
import { SelectField } from "../../../components/Select";
import TableGrid from "../../../components/TableGrid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { ReactComponent as IconPencil } from "../../../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../../../assets/images/icons/excel.svg";
import { ReactComponent as IconDelete } from "../../../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../../../assets/images/icons/checkmark-circle.svg";
import { ReactComponent as IconOpiton } from "../../../assets/images/icons/options.svg";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "주차장관리", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "차량준비",
  },
  {
    type: "bookmark",
    menu: "주차장관리",
    active: true,
  },
];
const selectData = {
  location: {
    label: "지점",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["방배", "일산"],
    disabled: false,
    isIcon: false,
  },
  value: {
    label: "구분",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["전체", "대여료", "자차면책제도요금"],
    disabled: false,
    isIcon: false,
  },
  state: {
    label: "상태",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["신규등록"],
    disabled: false,
    isIcon: false,
  },
};
const tableTitleData = {
  title: "전체 주차장 목록",
  desc: {
    isShow: true,
    content: "12,340",
  },
};
const rows = [
  {
    id: 1,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "사용",
  },
  {
    id: 2,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "사용",
  },
  {
    id: 3,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "사용",
  },
  {
    id: 4,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "사용",
  },
  {
    id: 5,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "미사용",
  },
  {
    id: 6,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "미사용",
  },
  {
    id: 7,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "미사용",
  },
  {
    id: 8,
    col1: "제주 EV Park",
    col2: "지점",
    col3: "해당 주차장명 주소",
    status: "미사용",
  },
];

//
const columns = [
  {
    field: "col1",
    headerName: "지점명",
    width: 150,
  },
  {
    field: "col2",
    headerName: "주차장명",
    width: 150,
  },
  {
    field: "col3",
    headerName: "주소",
    flex: 1,
  },
  {
    field: "status",
    headerName: "사용여부",
    width: 118,
    renderCell: (params) => {
      switch (params.value) {
        case "사용":
          return <Chip label={params.value} color="success" />;
        default:
          return <Chip label={params.value} color="cancel" />;
      }
    },
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
      <GridActionsCellItem icon={<IconCheck />} label="1" showInMenu />,
      <GridActionsCellItem icon={<IconCheck />} label="2" showInMenu />,
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

const RateInqury = () => {
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
              신규등록
            </Button>
          </Stack>
        </PageTitle>
        <Stack spacing={30}>
          <Section variant="search">
            <Grid container spacing={20} alignItems="flex-end">
              <Grid item xs={3}>
                <SelectField selectData={selectData.location} />
              </Grid>
              <Grid item xs={9}>
                <TextField placeholder="주차장명 검색" />
              </Grid>
            </Grid>
          </Section>
          <Section variant="data">
            <TableTitle titleData={tableTitleData} />
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

export default RateInqury;
