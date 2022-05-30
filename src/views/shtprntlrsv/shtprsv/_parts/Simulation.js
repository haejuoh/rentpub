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
  FormControlLabel,
  Checkbox,
  Chip,
  Divider,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import {
  LayoutStyle,
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
import {
  SelectField,
  DefaultSelectField,
  SelectLabelHidden,
} from "../../../../components/Select";

const TitleTooltip = {
  title: "대여가격",
  desc: "",
  toggle: false,
  tooltip: true,
};
const TitleSubData = {
  title: "할인유형",
  desc: "",
  toggle: true,
  tooltip: false,
};

const defaultSelect01 = {
  label: "제휴할인유형",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["제휴할인유형"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect02 = {
  label: "할인명 선택",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["할인명 선택"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect03 = {
  label: "쿠폰할인유형",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["쿠폰할인유형"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect04 = {
  label: "쿠폰할인유형",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["쿠폰할인유형"],
  disabled: false,
  isIcon: false,
  required: false,
};

const LyList = ({ subtitle, children, ...rest }) => {
  return (
    <>
      <Divider type="item15" />
      {subtitle && (
        <Typography variant="st2" color="grey.900" mb={15}>
          {subtitle}
        </Typography>
      )}
      <Stack spacing={10}>{children}</Stack>
    </>
  );
};
const ListItem = ({ children, ...rest }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        {children}
      </Stack>
    </>
  );
};
const ItemTitle = ({ title, children, ...rest }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography variant="b1" color="grey.600">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};
const ItemDesc = ({ desc, children, color, ...rest }) => {
  switch (color) {
    case "primary":
      return (
        <Stack direction="row" spacing={5}>
          <Typography variant="b1" color="primary">
            {desc}
          </Typography>
          {children}
        </Stack>
      );
    default:
      return (
        <Stack direction="row" spacing={5}>
          <Typography variant="b1" color="grey.900">
            {desc}
          </Typography>
          {children}
        </Stack>
      );
  }
};
const ListItemTotal = ({ title, desc, ...rest }) => {
  const LyTotal = styled("div")(({ theme }) => ({
    padding: "15px 10px",
    borderRadius: "2px",
    backgroundColor: `${theme.palette.background[300]}`,
  }));
  return (
    <LyTotal>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" color="grey.900">
          {title}
        </Typography>
        <Typography variant="h4" color="#EA002C">
          {desc}
        </Typography>
      </Stack>
    </LyTotal>
  );
};
const CustomBadge = styled(Chip)(({ theme }) => ({
  "&.MuiChip-root": {
    color: `${theme.palette.primary.light}`,
    borderColor: `${theme.palette.primary.light}`,
  },
}));

const SectionRentalPrice = () => {
  const layout = LayoutStyle({ theme });
  return (
    <>
      <Section>
        <SubTitle titleData={TitleTooltip}></SubTitle>
        <LyList>
          <ListItem>
            <ItemTitle title="대여날짜"></ItemTitle>
            <ItemDesc desc="2022-04-25 18:30">
              <Chip label="제주지점" color="default" variant="outlined" />
            </ItemDesc>
          </ListItem>
          <ListItem>
            <ItemTitle title="반납날짜"></ItemTitle>
            <ItemDesc desc="2022-04-25 18:30">
              <Chip label="제주지점" color="default" variant="outlined" />
            </ItemDesc>
          </ListItem>
        </LyList>
        <LyList subtitle="표준요금">
          <ListItem>
            <ItemTitle title="4일 00시간" />
            <ItemDesc desc="680,000원" />
          </ListItem>
        </LyList>
        <LyList subtitle="추가요금">
          <ListItem>
            <ItemTitle title="카시트" />
            <ItemDesc desc="0원" />
          </ListItem>
        </LyList>
        <LyList subtitle="차량손해 면책금액">
          <ListItem>
            <ItemTitle title="일반자차 면책금액" />
            <ItemDesc desc="10,000원" />
          </ListItem>
        </LyList>
        <LyList subtitle="할인">
          <ListItem>
            <ItemTitle title="제휴할인">
              <CustomBadge label="80%" color="default" variant="outlined" />
            </ItemTitle>
            <ItemDesc desc="(-) 535,000원" color="primary" />
          </ListItem>
          <ListItem>
            <ItemTitle title="쿠폰할인">
              <CustomBadge label="20%" color="default" variant="outlined" />
            </ItemTitle>
            <ItemDesc desc="- 0원" color="primary" />
          </ListItem>
          <ListItem>
            <ItemTitle title="기타절삭"></ItemTitle>
            <ItemDesc desc="-100원" color="primary" />
          </ListItem>
        </LyList>
        <LyList>
          <ListItemTotal title="총 금액" desc="186,000원"></ListItemTotal>
        </LyList>
      </Section>
    </>
  );
};

export default SectionRentalPrice;
