import React from "react";
import { styled, makeStyles } from "@mui/styles";
import {
  Grid,
  Stack,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Chip,
  Divider,
} from "@mui/material";
import { theme } from "../assets/style/customTheme";
import { LayoutStyle, DefaultTextField } from "../assets/style/common";
import { SubTitle } from "../components/Title";
import { Section } from "../components/Section";
import { SelectField, DefaultSelectField } from "../components/Select";
import Segment from "../components/Segment";
import TableGrid from "../components/TableGrid";
import { ReactComponent as IconDelete } from "../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../assets/images/icons/checkmark-circle.svg";
import { ReactComponent as IconOpiton } from "../assets/images/icons/options.svg";
import { GridActionsCellItem } from "@mui/x-data-grid";

const TitleToggle = {
  title: "결제정보",
  desc: "",
  toggle: false,
  tooltip: false,
};
const SegmentData = {
  disabled: false,
  group: [
    { label: "세금계산서 발행", name: "Segment1", checked: false },
    { label: "세금계산서 미발행", name: "Segment1", checked: true },
  ],
};

const selectData = {
  payCase: {
    label: "청구구분",
    style: {
      PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
    },
    option: ["선택", "선택2"],
    disabled: false,
    isIcon: false,
    required: true,
  },
  select01: {
    label: "",
    style: { PaperProps: { style: { width: 444 } } },
    option: ["선택", "선택2", "선택3", "선택4", "선택5", "선택6"],
    disabled: false,
    isIcon: false,
  },
};
const CustomButtonGroup1 = () => {
  return (
    <>
      <Stack direction="row" spacing={8}>
        <Button color="primary" variant="outlined">
          결제
        </Button>
        <Button color="primary" variant="outlined">
          결제취소
        </Button>
        <Button color="primary" variant="outlined">
          전표출력
        </Button>
      </Stack>
    </>
  );
};
const CustomButtonGroup2 = () => {
  return (
    <>
      <Stack direction="row" spacing={8}>
        <Button color="primary" variant="outlined">
          포인트조회
        </Button>
        <Button color="primary" variant="outlined">
          회선시험
        </Button>
        <Button color="primary" variant="outlined">
          단말결제승인추가
        </Button>
      </Stack>
    </>
  );
};
const CustomNoRowsOverlay = () => {
  return "";
};
const CustomTable = () => {
  const row = [
    {
      id: 1,
      col1: "신용카드",
      col2: "온라인",
      col3: "430,000",
      col4: "****-****-****",
      col5: "N",
      col6: "-",
      col7: "2022-06-30",
      col8: "KB국민카드",
      col9: "2022-07-30",
    },
    {
      id: 2,
      col1: "신용카드",
      col2: "온라인",
      col3: "430,000",
      col4: "****-****-****",
      col5: "N",
      col6: "-",
      col7: "2022-06-30",
      col8: "KB국민카드",
      col9: "2022-07-30",
    },
  ];

  const col = [
    { field: "col1", headerName: "결제수단", flex: 1 },
    { field: "col2", headerName: "결제시스템", flex: 1 },
    { field: "col3", headerName: "결제금액", flex: 1 },
    { field: "col4", headerName: "카드번호", flex: 1 },
    { field: "col5", headerName: "취소", flex: 1 },
    { field: "col6", headerName: "승인번호", flex: 1 },
    { field: "col7", headerName: "거래일자", flex: 1 },
    { field: "col8", headerName: "카드사", flex: 1 },
    { field: "col9", headerName: "매출일자", flex: 1 },

    {
      field: "actions",
      type: "actions",
      width: 40,
      renderHeader: () => (
        <IconOpiton style={{ width: "18px", height: "18px" }} />
      ),
      getActions: (params) => [
        <GridActionsCellItem icon={<IconCheck />} label="사용함" showInMenu />,
        <GridActionsCellItem icon={<IconDelete />} label="삭제" showInMenu />,
      ],
    },
  ];
  return (
    <Box sx={{ height: 165 }} mt={15}>
      <TableGrid
        columnData={col}
        rowData={row}
        isCheckbox={true}
        customNoRowsOverlay={CustomNoRowsOverlay}
      />
    </Box>
  );
};

const PaymentInfo = () => {
  return (
    <>
      <Section>
        <SubTitle titleData={TitleToggle} />
        <Divider variants="item15" />
        <Grid container spacing={15} alignItems="center">
          <Grid item xs={3.4}>
            <Segment segmentData={SegmentData} />
          </Grid>
          <Grid item xs={4.3}>
            <DefaultTextField label="발행일자" placeholder="날짜선택" />
          </Grid>
          <Grid item xs={4.3}>
            <DefaultSelectField
              selectData={selectData.payCase}
              placeholder="선택"
            />
          </Grid>
          <Grid item xs={2}>
            <SelectField selectData={selectData.select01} />
          </Grid>
          <Grid item xs={3.1}>
            <CustomButtonGroup1 /> {/*버튼 그룹 결제,결제취소,전표출력*/}
          </Grid>
          <Grid item xs={2.6}>
            <FormControlLabel
              control={<Checkbox />}
              label="신용카드결제 보안단말기 사용"
            />
          </Grid>
          <Grid item xs={4.3}>
            <CustomButtonGroup2 />
          </Grid>
        </Grid>
        <CustomTable />
      </Section>
    </>
  );
};

export default PaymentInfo;
