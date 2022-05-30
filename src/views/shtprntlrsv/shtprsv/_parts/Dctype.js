import React from "react";
import { styled } from "@mui/styles";
import {
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import { SubTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import { SelectLabelHidden } from "../../../../components/Select";
import LySectionInfo from "../../../../components/LySectionInfo";

// image
import { ReactComponent as IconAdd } from "../../../../assets/images/icons/add.svg";

const TitleSubData = {
  title: "할인유형",
  desc: "",
  toggle: false,
  tooltip: false,
};
const defaultSelect01 = {
  label: "제휴할인",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["제휴할인 선택"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect02 = {
  label: "제휴할인명 선택",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["제휴할인명 선택"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect03 = {
  label: "쿠폰할인",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["쿠폰할인 구매처 선택"],
  disabled: false,
  isIcon: false,
  required: false,
};
const defaultSelect04 = {
  label: "쿠폰할인",
  style: {
    PaperProps: { style: { minWidth: 203, maxHeight: 160, height: "auto" } },
  },
  option: ["쿠폰할인 구매처 선택"],
  disabled: false,
  isIcon: false,
  required: false,
};

const Dctype = () => {
  return (
    <>
      <Section>
        <SubTitle titleData={TitleSubData}></SubTitle>
        <Divider type="section15" />
        <LySectionInfo>
          <Grid item xs={12}>
            <Typography variant="st2">제휴할인</Typography>
          </Grid>
          <Grid container item spacing={15}>
            <Grid item xs>
              <SelectLabelHidden selectData={defaultSelect01} />
            </Grid>
            <Grid item xs>
              <SelectLabelHidden selectData={defaultSelect02} />
            </Grid>
            <Grid item xs="auto">
              <Stack direction="row" spacing={8}>
                <Button color="cancel" variant="outlined">
                  취소
                </Button>
                <Button color="primary" variant="outlined">
                  인증
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="st2">쿠폰할인</Typography>
          </Grid>
          <Grid container item spacing={15}>
            <Grid item xs>
              <SelectLabelHidden selectData={defaultSelect03} />
            </Grid>
            <Grid item xs>
              <TextField hiddenLabel placeholder="쿠폰번호 입력" />
            </Grid>
            <Grid item xs="auto">
              <Stack direction="row" spacing={8}>
                <Button color="cancel" variant="outlined">
                  취소
                </Button>
                <Button color="primary" variant="outlined">
                  인증
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container item spacing={15}>
            <Grid item xs>
              <SelectLabelHidden selectData={defaultSelect04} />
            </Grid>
            <Grid item xs>
              <TextField hiddenLabel placeholder="쿠폰번호 입력" />
            </Grid>
            <Grid item xs="auto">
              <Stack direction="row" spacing={8}>
                <Button color="cancel" variant="outlined">
                  취소
                </Button>
                <Button color="primary" variant="outlined">
                  인증
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <Button color="sub" variant="contained" endIcon={<IconAdd />}>
                추가
              </Button>
            </Stack>
          </Grid>
        </LySectionInfo>
      </Section>
    </>
  );
};

export default Dctype;
