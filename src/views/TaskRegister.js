import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  IconButton,
  Button,
  Box,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { theme } from "../assets/style/customTheme";
import {
  LayoutStyle,
  DefaultTextField,
  FormContents,
} from "../assets/style/common";
import Mdi from "../components/Mdi";
import { Section } from "../components/Section";
import { PageTitle, SubTitle } from "../components/Title";
import Segment from "../components/Segment";
import TableGrid from "../components/TableGrid";
import { ReactComponent as IconChevronForward } from "../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronBack } from "../assets/images/icons/chevron-back.svg";
import { ReactComponent as IconSearch } from "../assets/images/icons/search.svg";

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
    position: "relative",
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    height: "384px",
  },
  btnWrap: {
    position: "absolute",
    top: "149px",
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

const rows01 = [];
const columns01 = [
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
const rows02 = [
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
const columns02 = [
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
const CustomNoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">
        권한을 등록하려면, 우측에 있는 권한선택 테이블에서 권한을
        이동시켜주세요.
      </Typography>
    </Stack>
  );
};
const Table01 = ({ columnData, rowData, customNoRowsOverlay, isCheckbox }) => {
  const TableGridStyle = makeStyles((theme) => ({
    wrap: {
      flex: "1",
      width: "100%",
    },
  }));
  const lytable = TableGridStyle();
  return (
    <Box className={lytable.wrap}>
      <TableGrid
        columnData={columns01}
        rowData={rows01}
        customNoRowsOverlay={CustomNoRowsOverlay}
        isCheckbox={true}
      />
    </Box>
  );
};
const Table02 = ({ columnData, rowData, customNoRowsOverlay, isCheckbox }) => {
  const TableGridStyle = makeStyles((theme) => ({
    wrap: {
      flex: "1",
      width: "100%",
      marginTop: "15px",
    },
  }));
  const lytable = TableGridStyle();
  return (
    <Box className={lytable.wrap}>
      <TableGrid
        columnData={columns02}
        rowData={rows02}
        customNoRowsOverlay={CustomNoRowsOverlay}
        isCheckbox={true}
      />
    </Box>
  );
};

const SegmentData = {
  disabled: false,
  group: [
    { label: "사용", name: "Segment", checked: true },
    { label: "미사용", name: "Segment", checked: false },
  ],
};
const SegmentStyle = makeStyles((theme) => ({
  label: {
    width: "120px",
  },
  wrap: {
    width: "116px",
    height: "34px",
  },
}));

const TaskRegister = () => {
  const layout = LayoutStyle({ theme });
  const transfer = TransferStyle();
  const seg = SegmentStyle();
  return (
    <>
      <Mdi tabData={tabData} />
      <div className={layout.page}>
        <PageTitle titleData={titleData}></PageTitle>
        <Stack spacing={30}>
          <Section variant="default">
            <SubTitle titleData={TitleDefault01} />
            <Divider variants="section15" />
            <Grid container rowSpacing={16} columnSpacing={15}>
              <Grid item xs={3}>
                <DefaultTextField
                  label="직무명"
                  placeholder="직무명"
                  defaultValue="차정영업"
                />
              </Grid>
              <Grid item xs={3}>
                {/* <Stack direction="row" alignItems="center">
                  <Typography variant="label" className={seg.label}>
                    사용여부
                  </Typography>
                  <Box className={seg.wrap}>
                    <Segment segmentData={SegmentData} variant="2" />
                  </Box>
                </Stack> */}

                <FormContents label="사용여부" required={false}>
                  <Segment segmentData={SegmentData} />
                </FormContents>
              </Grid>
              <Grid item xs={12}>
                <DefaultTextField
                  label="직무설명"
                  placeholder="직무설명"
                  defaultValue="직무설명을 위한 공간"
                />
              </Grid>
            </Grid>
          </Section>
          <Section variant="default">
            <Box className={transfer.container}>
              <Grid container columnSpacing={84}>
                <Grid item xs={6}>
                  <Box className={transfer.wrap}>
                    <SubTitle titleData={TitleDefault02} />
                    <Divider variants="section15" />
                    <Table01 className={transfer.table} />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={transfer.wrap}>
                    <SubTitle titleData={TitleDefault03} />
                    <Divider variants="section15" />
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
                    <Table02 className={transfer.table} />
                  </Box>
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
        <Stack direction="row" justifyContent="flex-end" spacing={8} mt={20}>
          <Button color="cancel" variant="outlined">
            취소
          </Button>
          <Button color="primary" variant="contained">
            저장
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default TaskRegister;
