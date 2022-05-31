import * as React from "react";
import { styled } from "@mui/styles";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
  InputAdornment,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import {
  DefaultTextField,
  FormContents,
  FormLabelLeft,
} from "../../../../assets/style/common";
import { SubTitle, SectionTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import { DefaultSelectField } from "../../../../components/Select";
import LySectionInfo from "../../../../components/LySectionInfo";

import SearchModal from "./SearchModal";

// image
import { ReactComponent as IconSearch } from "../../../../assets/images/icons/search.svg";

const TitleSubData = {
  title: "대여정보",
  desc: "",
  toggle: false,
  tooltip: false,
};

const defaultSelect01 = {
  label: "상품",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["상품"],
  disabled: false,
  isIcon: false,
  required: true,
};
const defaultSelect02 = {
  label: "대여예약지점",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["대여예약지점"],
  disabled: false,
  isIcon: false,
  required: true,
};
const defaultSelect03 = {
  label: "반납예약지점",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["반납예약지점"],
  disabled: false,
  isIcon: false,
  required: true,
};
const defaultSelect04 = {
  label: "대여지점",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["대여지점"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect05 = {
  label: "반납지점",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["반납지점"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect06 = {
  label: "자차보험",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["자차보험"],
  disabled: false,
  isIcon: false,
  required: true,
};
const defaultSelect07 = {
  label: "블럭선택",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["블럭선택"],
  disabled: false,
  isIcon: false,
  required: true,
};

const RentalInfo = () => {
  return (
    <>
      <Section>
        <SubTitle titleData={TitleSubData} />
        <Divider type="section15" />
        <LySectionInfo>
          <Grid item xs={12}>
            <DefaultSelectField selectData={defaultSelect01} required />
          </Grid>
          <Grid item xs={6}>
            <FormContents label="대여일시" required={true}>
              {/* datepicker */}
            </FormContents>
          </Grid>
          <Grid item xs={6}>
            <FormContents label="반납일시" required={true}>
              {/* datepicker */}
            </FormContents>
          </Grid>
          <Grid item xs={6}>
            <DefaultSelectField selectData={defaultSelect02} />
          </Grid>
          <Grid item xs={6}>
            <DefaultSelectField selectData={defaultSelect03} />
          </Grid>
          <Grid item xs={6}>
            <DefaultSelectField selectData={defaultSelect04} />
          </Grid>
          <Grid item xs={6}>
            <DefaultSelectField selectData={defaultSelect05} />
          </Grid>
          <Grid item xs={12}>
            <DefaultTextField
              label="차정"
              placeholder="차정명 검색"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* <IconButton color="function" size="small">
                      <IconSearch />
                    </IconButton> */}
                    <SearchModal />
                  </InputAdornment>
                ),
              }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultSelectField selectData={defaultSelect06} />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="블럭선택"
              placeholder="불럭 검색"
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
          </Grid>

          <Grid item xs={6}>
            <FormLabelLeft>
              <FormControlLabel control={<Checkbox />} label="기사예약" />
              <TextField hiddenLabel placeholder="금액 입력" />
            </FormLabelLeft>
          </Grid>
          <Grid item xs={6}>
            <FormLabelLeft>
              <FormControlLabel control={<Checkbox />} label="네비게이션" />
              <TextField hiddenLabel placeholder="네비게이션 선택" />
            </FormLabelLeft>
          </Grid>
        </LySectionInfo>
      </Section>
    </>
  );
};

export default RentalInfo;
