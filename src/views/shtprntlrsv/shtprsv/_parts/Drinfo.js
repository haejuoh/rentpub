import React from "react";
import { styled } from "@mui/styles";
import {
  Grid,
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Switch,
  FormControlLabel,
  Checkbox,
  Chip,
  Divider,
  Link,
  Paper,
  Collapse,
  InputAdornment,
  FormGroup,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import {
  DefaultTextField,
  FormContents,
} from "../../../../assets/style/common";
import {
  PageTitle,
  SubTitle,
  TableTitle,
  SectionTitle,
} from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import LySectionInfo from "../../../../components/LySectionInfo";

import {
  SelectField,
  DefaultSelectField,
  SelectLabelHidden,
} from "../../../../components/Select";
import Segment from "../../../../components/Segment";
import TableGrid from "../../../../components/TableGrid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { ReactComponent as IconPencil } from "../../../../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../../../../assets/images/icons/excel.svg";
import { ReactComponent as IconDelete } from "../../../../assets/images/icons/trash.svg";
import { ReactComponent as IconCheck } from "../../../../assets/images/icons/checkmark-circle.svg";
import { ReactComponent as IconOpiton } from "../../../../assets/images/icons/options.svg";
import { ReactComponent as IconChevronForward } from "../../../../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronBack } from "../../../../assets/images/icons/chevron-back.svg";
import { ReactComponent as IconSearch } from "../../../../assets/images/icons/search.svg";

// image
import { ReactComponent as IconAdd } from "../../../../assets/images/icons/add.svg";

const TitleSubData = {
  title: "운전자정보",
  desc: "",
  toggle: false,
  tooltip: false,
};
const SegmentData = {
  disabled: false,
  group: [
    { label: "미선택", name: "Segment", checked: false },
    { label: "남성", name: "Segment", checked: true },
    { label: "여성", name: "Segment", checked: false },
  ],
};
const defaultSelect01 = {
  label: "면허종류",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["면허종류"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect02 = {
  label: "고객등급",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["고객등급"],
  disabled: false,
  isIcon: false,
  required: false,
};

const checkBoxData = [
  { label: "SNS", checkItem: true, disabled: false },
  { label: "이메일", checkItem: true, disabled: false },
];
const CheckBoxGroup = () => {
  const [checkItem, setCheckItem] = React.useState(true);
  const handleChange = (event) => {
    setCheckItem(event.target.checked);
  };
  return (
    <>
      <FormGroup>
        {checkBoxData.map((item, idx) => {
          return (
            <FormControlLabel
              control={<Checkbox />}
              label={item.label}
              disabled={item.disabled}
              key={idx}
              onChange={handleChange}
            />
          );
        })}
      </FormGroup>
    </>
  );
};

const CustomButtonGroup = () => {
  return (
    <>
      <Button color="sub" variant="contained" endIcon={<IconAdd />}>
        추가
      </Button>
    </>
  );
};

const Drinfo = () => {
  return (
    <>
      <Section>
        <SubTitle
          titleData={TitleSubData}
          buttonGroup={<CustomButtonGroup />}
        />
        <Divider type="item15" />
        <Typography variant="st2">제1 운전자</Typography>
        <LySectionInfo>
          <Grid item xs={4}>
            <DefaultTextField
              label="고객명"
              placeholder="고객명"
              defaultValue="고객명"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4}>
            <DefaultTextField
              label="연락처"
              placeholder="연락처"
              defaultValue="연락처"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4}>
            <DefaultTextField
              label="생년월일"
              placeholder="생년월일"
              defaultValue="생년월일"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허종류"
              placeholder="면허종류"
              defaultValue="면허종류"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="운전면허번호"
              placeholder="운전면허번호"
              defaultValue="운전면허번호"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormContents label="면허유효기간">{/* datepicker */}</FormContents>
          </Grid>
          <Grid item xs={6}>
            <FormContents label="면허발급일자">{/* datepicker */}</FormContents>
          </Grid>
        </LySectionInfo>

        <Stack direction="row" justifyContent="flex-end" spacing={15}>
          <Button color="primary" variant="outlined">
            운전면허검증
          </Button>
          <Checkbox checked />
        </Stack>
      </Section>
    </>
  );
};

export default Drinfo;
