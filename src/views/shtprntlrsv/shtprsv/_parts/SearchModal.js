import React, { Fragment, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {
  Grid,
  Stack,
  Button,
  Divider,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { SubTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import {
  DefaultTextField,
  FormContents,
} from "../../../../assets/style/common";
import { SelectField, DefaultSelectField } from "../../../../components/Select";
import TableGrid from "../../../../components/TableGrid";
import { ReactComponent as IconSearch } from "../../../../assets/images/icons/search.svg";
import { ReactComponent as IconClose } from "../../../../assets/images/icons/close.svg";

const SelectData = {
  spot: {
    label: "지점",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["전체"],
    disabled: false,
    isIcon: false,
  },
  type: {
    label: "차량종류",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["전체"],
    disabled: false,
    isIcon: false,
  },
  bsnSpot: {
    label: "영업지점",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["전체"],
    disabled: false,
    isIcon: false,
  },
  name: {
    label: "차량명",
    style: {
      PaperProps: { style: { minWidth: 290, maxHeight: 160, height: "auto" } },
    },
    option: ["전체"],
    disabled: false,
    isIcon: false,
  },
};

const TitleDesc = {
  title: "차정검색",
  desc: "12,340건",
};
const columns = [
  {
    field: "col1",
    headerName: "지점명",
    width: 142,
  },
  {
    field: "col2",
    headerName: "차정명",
    flex: 1,
  },
  {
    field: "col3",
    headerName: "유종",
    width: 142,
  },
  {
    field: "col4",
    headerName: "대수",
    width: 142,
  },
];

const rows = [
  {
    id: 1,
    col1: "79000033",
    col2: "[20년7월] [출고특판] 2020 G80 2.5T [가솔린] 2WD",
    col3: "휘발유",
    col4: "7",
  },
  {
    id: 2,
    col1: "79000033",
    col2: "[20년7월] [출고특판] 2020 아반떼 [가솔린]",
    col3: "휘발유",
    col4: "1",
  },
  {
    id: 3,
    col1: "79000033",
    col2: "[출고특판] 2021 THE NEW 싼타페 D2.2 [디젤] AWD 5인승",
    col3: "경유",
    col4: "2",
  },
  {
    id: 4,
    col1: "79000033",
    col2: "[출고특판] 2021 쏘나타 스마트트림 G2.2 [가솔린] AWD 5인승",
    col3: "휘발유",
    col4: "5",
  },
  {
    id: 5,
    col1: "79000033",
    col2: "[출고특판] 2021 GENESIS GV80 2.5터보 [가솔린] 5인승 2WD",
    col3: "휘발유",
    col4: "6",
  },
];

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

const SearchTable = () => {
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
        <TableGrid columnData={columns} rowData={rows} isCheckbox={false} />
      </Box>
    </>
  );
};

const SelectModal = () => {
  const [modalState, ctrlModal] = React.useState(false);
  const ctrlOpen = () => {
    ctrlModal(true);
  };
  const ctrlClose = () => {
    ctrlModal(false);
  };
  return (
    <>
      <IconButton color="function" variant="outlined" onClick={ctrlOpen}>
        <IconSearch />
      </IconButton>
      <Modal open={modalState} onClose={ctrlClose} maxWidth="xl">
        <ModalTitle id="customized-dialog-title">차정검색</ModalTitle>
        <DialogContent>
          <Grid container columnSpacing={20}>
            <Grid item xs={3}>
              <DefaultSelectField selectData={SelectData.spot} />
            </Grid>
            <Grid item xs={4}>
              <DefaultTextField
                label="대여일시"
                placeholder="YY-MM-DD 00:00"
                required
              />
            </Grid>
            <Grid item xs={5}>
              <Grid container alignItems="flex-end" spacing={20}>
                <Grid item xs={7}>
                  <DefaultSelectField selectData={SelectData.type} />
                </Grid>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="정비시간 체크안함"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container columnSpacing={20} mt={20}>
            <Grid item xs={3}>
              <DefaultSelectField selectData={SelectData.bsnSpot} />
            </Grid>
            <Grid item xs={4}>
              <DefaultTextField
                label="반납일시"
                placeholder="YY-MM-DD 00:00"
                required
              />
            </Grid>
            <Grid item xs={5}>
              <Grid container alignItems="flex-end" spacing={20}>
                <Grid item xs={7}>
                  <DefaultSelectField selectData={SelectData.name} />
                </Grid>
                <Grid item xs>
                  <TextField placeholder="차량명 입력" required />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} textAlign="right" mt={20}>
              <IconButton color="primary">
                <IconSearch />
              </IconButton>
            </Grid>
          </Grid>
          <SubTitle titleData={TitleDesc} />
          <Divider type="section15" />
          <SearchTable />
        </DialogContent>
        <DialogActions>
          <Button color="modal" onClick={ctrlClose}>
            취소{" "}
          </Button>
          <Button color="sub" onClick={ctrlClose} variant="contained">
            선택
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
};

export default SelectModal;
