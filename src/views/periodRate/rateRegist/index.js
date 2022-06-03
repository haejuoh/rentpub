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
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { theme } from "../../../assets/style/customTheme";
import {
  LayoutStyle,
  DefaultTextField,
  FormContents,
} from "../../../assets/style/common";
import Mdi from "../../../components/Mdi";
import { PageTitle, TableTitle } from "../../../components/Title";
import { Section } from "../../../components/Section";
import { SelectField, DefaultSelectField } from "../../../components/Select";
import TableGrid from "../../../components/TableGrid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { ReactComponent as IconRemove } from "../../../assets/images/icons/remove.svg";
import { ReactComponent as IconExcel } from "../../../assets/images/icons/excel.svg";
import { ReactComponent as IconDelete } from "../../../assets/images/icons/trash.svg";
import { ReactComponent as IconAdd } from "../../../assets/images/icons/add.svg";
import { ReactComponent as IconOpiton } from "../../../assets/images/icons/options.svg";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "기간별요율등록", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "단기렌탈정보",
  },
  {
    path: "/",
    menu: "단기차정관리",
  },
  {
    type: "bookmark",
    menu: "기간별요율등록",
    active: true,
  },
];
const selectData = {
  location: {
    label: "권역-지점",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["제주-제주지점"],
    disabled: false,
    isIcon: false,
  },
  class: {
    label: "구분",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["대여료", "자차면책제도요금"],
    disabled: false,
    isIcon: false,
  },
  calc: {
    label: "계산방식",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["분할"],
    disabled: false,
    isIcon: false,
  },
  calcUnit: {
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["일", "시간"],
    disabled: false,
    isIcon: false,
  },
  startVal: {
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["0", "1", "6", "10", "12", "24"],
    disabled: false,
    isIcon: false,
  },
  endVal: {
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["0", "1", "6", "10", "12", "24", "이상"],
    disabled: false,
    isIcon: false,
  },
  calc2: {
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["분할"],
    disabled: false,
    isIcon: false,
  },
};
const tableTitle = {
  title: "대여료 적용 요율",
  desc: {
    isShow: false,
    content: "12,340",
  },
};
const applyTitle = {
  title: "적용구분",
  desc: {
    isShow: false,
    content: "12,340",
  },
};
const rows = [
  {
    id: 1,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
  {
    id: 2,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
  {
    id: 3,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
  {
    id: 4,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
  {
    id: 5,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
  {
    id: 6,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
  {
    id: 7,
    col1: "대여료",
    col2: null,
    col3: null,
    col4: null,
    col5: null,
  },
];

// renderCell: (cellValues) => {
//   return <SelectField selectData={tableSelect} />;
// },
const columns = [
  {
    field: "col1",
    headerName: "구분",
    width: 185,
    // renderCell: () => {
    //   return <TextField placeholder="구분 입력" defaultValue="대여료" />;
    // },
  },
  {
    field: "col2",
    headerName: "계산단위",
    width: 185,
    renderCell: () => {
      return <SelectField selectData={selectData.calcUnit} />;
    },
  },
  {
    field: "col3",
    headerName: "시작값",
    width: 185,
    renderCell: () => {
      return <SelectField selectData={selectData.startVal} />;
    },
  },
  {
    field: "col4",
    headerName: "종료값",
    width: 185,
    renderCell: () => {
      return <SelectField selectData={selectData.endVal} />;
    },
  },
  {
    field: "col5",
    headerName: "적용율",
    width: 185,
    renderCell: () => {
      return (
        <TextField
          placeholder="100"
          defaultValue="100"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
      );
    },
  },
  {
    field: "col6",
    headerName: "계산방식",
    width: 185,
    renderCell: () => {
      return <SelectField selectData={selectData.calc2} />;
    },
  },
  {
    field: "actions",
    type: "actions",
    renderHeader: () => (
      <IconOpiton style={{ width: "18px", height: "18px" }} />
    ),
    getActions: (params) => [
      // 디자인 switch 로 변경되어 수정 예정
      <GridActionsCellItem icon={<IconAdd />} label="행복사" showInMenu />,
      <GridActionsCellItem icon={<IconRemove />} label="행삭제" showInMenu />,
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

const MessageButton = () => {
  const [buttonState, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = buttonState;
  const msgOpen = (state) => () => {
    setState({
      open: true,
      ...state,
    });
  };
  const msgClose = () => {
    setState({
      open: false,
      ...buttonState,
    });
  };
  const style = {
    height: "45px",
    width: "144px",
  };
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={msgOpen({
          vertical: "top", // 메세지 위치 조정 (top / bottom)
          horizontal: "center",
        })}
      >
        승인요청
      </Button>
      {/* snakbar*/}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={msgClose}
        message="승인요청 완료"
        key={vertical + horizontal}
      />
    </>
  );
};

const RateRegist = () => {
  const layout = LayoutStyle({ theme });
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData} />
        <Stack spacing={30}>
          <Section variant="data">
            <TableTitle titleData={applyTitle} />
            <Divider type="section15" />
            <Grid container spacing={20}>
              <Grid item xs={3}>
                <DefaultSelectField selectData={selectData.location} />
              </Grid>
              <Grid item xs={3}>
                <DefaultSelectField selectData={selectData.class} />
              </Grid>
              {/* <Grid item xs={3}>
                <DefaultSelectField selectData={selectData.calc} />
              </Grid> */}
              <Grid item xs={3}>
                <FormContents label="적용시작일">
                  {/* datepicker */}
                  <TextField placeholder="2022-05-31" />
                </FormContents>
              </Grid>
              <Grid item xs={3}>
                <FormContents label="적용종료일">
                  {/* datepicker */}
                  <TextField placeholder="2022-12-31" />
                </FormContents>
              </Grid>
            </Grid>
          </Section>
          <Section variant="data">
            <Box pb={10}>
              <TableTitle titleData={tableTitle}>
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
          <Stack direction="row" justifyContent="flex-end" spacing={8}>
            <MessageButton />
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default RateRegist;
