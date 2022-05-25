import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles, styled } from "@mui/styles";
import {
  Grid,
  TextField,
  Stack,
  Divider,
  Typography,
  Box,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { theme } from "../assets/style/customTheme";
import {
  LayoutStyle,
  DefaultTextField,
  FormContents,
} from "../assets/style/common";
import Mdi from "../components/Mdi";
import { PageTitle, TableTitle } from "../components/Title";
import { Section } from "../components/Section";
import { SelectField } from "../components/Select";
import TableGrid from "../components/TableGrid";
import Segment from "../components/Segment";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import { ReactComponent as IconOpiton } from "../assets/images/icons/options.svg";
import { ReactComponent as IconClose } from "../assets/images/icons/close.svg";
import { ReactComponent as IconCloseCircle } from "../assets/images/icons/close-circle.svg";

const tabData = [
  { type: "home", label: "Home", active: false },
  { label: "업무그룹관리", active: true },
];
const titleData = [
  {
    path: "/",
    menu: "사용자",
  },
  {
    type: "bookmark",
    menu: "업무그룹관리",
    active: true,
  },
];
const defaultData = {
  label: "사용여부",
  // select combo box 너비 지정
  style: {
    PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
  },
  option: ["전체"],
  disabled: false,
  isIcon: false,
};
const tableTitleData = {
  title: "업무그룹",
  desc: {
    isShow: true,
    content: "12,340",
  },
};

const SegmentData = {
  disabled: false,
  group: [
    { label: "사용", name: "Segment", checked: true },
    { label: "사용안함", name: "Segment", checked: false },
  ],
};

const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    fontSize: `${theme.typography.h4.fontSize}`,
    fontWeight: `${theme.typography.h4.fontWeight}`,
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative",
    "&:before": {
      content: "''",
      display: "inline-block",
      width: "6px",
      height: "6px",
      backgroundColor: `${theme.palette.primary.bright}`,
      clear: "both",
      borderRadius: 1,
    },
    "& .MuiIconButton-root": {
      width: "24px",
      height: "24px",
      padding: "5.62px",
      svg: {
        width: "100%",
        height: "100%",
      },
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
}));
const ModalTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose}>
            <IconClose />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Divider type="section15" />
    </>
  );
};
const CustomNoRowsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">
        검색 조건을 입력하고, 검색 버튼을 눌러주세요.
      </Typography>
    </Stack>
  );
};
const CustomNoResultsOverlay = () => {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="b1">검색조건에 맞는 결과가 없습니다.</Typography>
    </Stack>
  );
};

const ModalRegister = ({ title, btnCancel, btnAction }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        {title}
      </Button>
      <Modal onClose={handleClose} open={open}>
        <ModalTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </ModalTitle>
        <DialogContent>
          <Stack spacing={30}>
            <DefaultTextField
              label="업무그룹명"
              placeholder=""
              defaultValue="업무그룹"
              focused
            />
            <DefaultTextField
              label="업무그룹설명"
              placeholder=""
              defaultValue="업무그룹등록"
            />
            <FormContents label="사용여부" required={false}>
              <Segment segmentData={SegmentData} />
            </FormContents>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="sub" variant="contained" onClick={handleClose}>
            {btnAction}
          </Button>
          <Button color="modal" onClick={handleClose}>
            {btnCancel}
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
};
const Table = ({
  columnData,
  rowData,
  customNoRowsOverlay,
  isCheckbox,
  title,
  btnCancel,
  btnAction,
}) => {
  const [open, openModify] = React.useState(false);
  const openModal = React.useCallback(
    () => () => {
      openModify(true);
    },
    []
  );
  const handleClose = () => {
    openModify(false);
  };
  const rows = [
    {
      id: 1,
      col1: "00001111111",
      col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
      col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
      status: "사용",
      col5: "홍길동",
      col6: "2022-04-01 12:00:30",
    },
    {
      id: 2,
      col1: "00001111111",
      col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
      col3: "차정영업관련된설명입니다",
      status: "사용안함",
      col5: "홍길동",
      col6: "2022-04-01 12:00:30",
    },
    {
      id: 3,
      col1: "00001111111",
      col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
      col3: "차정영업관련된설명입니다",
      status: "사용",
      col5: "홍길동",
      col6: "2022-04-01 12:00:30",
    },
    {
      id: 4,
      col1: "00001111111",
      col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
      col3: "차정영업관련된설명입니다",
      status: "사용",
      col5: "홍길동",
      col6: "2022-04-01 12:00:30",
    },
    {
      id: 5,
      col1: "00001111111",
      col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
      col3: "차정영업관련된설명입니다",
      status: "사용",
      col5: "홍길동",
      col6: "2022-04-01 12:00:30",
    },
    {
      id: 6,
      col1: "00001111111",
      col2: "차정영업및세차영업관차정영업및세차영업관차정영업및세차영업관",
      col3: "차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다차정영업관련된설명입니다",
      status: "사용",
      col5: "홍길동",
      col6: "2022-04-01 12:00:30",
    },
  ];
  const columns = [
    {
      field: "col1",
      headerName: "직무ID",
      width: 142,
    },
    {
      field: "col2",
      headerName: "업무그룹명",
      width: 176,
    },
    {
      field: "col3",
      headerName: "업무그룹설명",
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
      field: "col5",
      headerName: "입력사용자",
      width: 142,
    },
    {
      field: "col6",
      headerName: "최종 수정일",
      width: 178,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "actions",
      type: "actions",
      width: 40,
      renderHeader: () => (
        <IconOpiton style={{ width: "18px", height: "18px" }} />
      ),
      getActions: (params) => [
        <GridActionsCellItem
          icon={<IconPencil />}
          onClick={openModal()}
          label="수정"
          showInMenu
        />,
        <GridActionsCellItem
          icon={
            params.row.status === "사용" ? <IconCloseCircle /> : <IconCheck />
          }
          label={params.row.status === "사용" ? "사용안함" : "사용"}
          showInMenu
        />,
      ],
    },
  ];
  const TableGridStyle = makeStyles((theme) => ({
    wrap: {
      width: "100%",
      height: "284px",
    },
  }));
  const lytable = TableGridStyle();
  return (
    <>
      <Box className={lytable.wrap}>
        <TableGrid
          columnData={columns}
          rowData={rows}
          customNoRowsOverlay={CustomNoRowsOverlay}
          customNoResultsOverlay={CustomNoResultsOverlay}
          isCheckbox={false}
        />
      </Box>
      <Modal onClose={handleClose} open={open}>
        <ModalTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </ModalTitle>
        <DialogContent>
          <Stack spacing={30}>
            <DefaultTextField
              label="업무그룹명"
              placeholder=""
              defaultValue="업무그룹"
              focused
            />
            <DefaultTextField
              label="업무그룹설명"
              placeholder=""
              defaultValue="업무그룹수정"
            />
            <FormContents label="사용여부" required={false}>
              <Segment segmentData={SegmentData} />
            </FormContents>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="sub" variant="contained" onClick={handleClose}>
            {btnAction}
          </Button>
          <Button color="modal" onClick={handleClose}>
            {btnCancel}
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
};

const BusinessGroupManage = () => {
  const layout = LayoutStyle({ theme });
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
                <TextField label="업무그룹명" placeholder="업무그룹명" />
              </Grid>
            </Grid>
          </Section>
          <Section variant="data">
            <Box pb={10}>
              <TableTitle titleData={tableTitleData}>
                <ModalRegister
                  title="업무그룹 등록"
                  btnCancel="취소"
                  btnAction="등록"
                />
              </TableTitle>
            </Box>
            <Divider type="section15" />
            <Grid container>
              <Grid item xs={12}>
                <Table
                  title="업무그룹 수정"
                  btnAction="수정"
                  btnCancel="취소"
                />
              </Grid>
            </Grid>
          </Section>
        </Stack>
      </div>
    </>
  );
};

export default BusinessGroupManage;
