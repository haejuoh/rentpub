import React from "react";
import { styled } from "@mui/styles";
import {
  Grid,
  Stack,
  Button,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
  InputAdornment,
  FormGroup,
  Switch,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import {
  DefaultTextField,
  FormContents,
} from "../../../../assets/style/common";
import { SubTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import { DefaultSelectField } from "../../../../components/Select";
import Segment from "../../../../components/Segment";
import LySectionInfo from "../../../../components/LySectionInfo";

import { ReactComponent as IconSearch } from "../../../../assets/images/icons/search.svg";

const TitleSubData = {
  title: "고객정보",
  desc: "",
  toggle: false,
  tooltip: false,
};
const SegmentData = {
  disabled: false,
  group: [
    { label: "미선택", name: "Segment0", checked: false },
    { label: "남성", name: "Segment0", checked: true },
    { label: "여성", name: "Segment0", checked: false },
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
      <Button color="primary" variant="outlined">
        검색
      </Button>
      <Button color="primary" variant="outlined">
        계약이력
      </Button>
      <Button color="primary" variant="outlined">
        고객정보수정
      </Button>
      <Button color="primary" variant="outlined">
        W
      </Button>
    </>
  );
};

const CusInfo = () => {
  return (
    <>
      <Section>
        <SubTitle
          titleData={TitleSubData}
          buttonGroup={<CustomButtonGroup />}
        />
        <Divider variants="item15" />
        <LySectionInfo>
          <Grid item xs={6}>
            <DefaultTextField
              label="고객명"
              placeholder="고객명 입력"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="연락처"
              placeholder="핸드폰번호 입력"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <FormContents label="생년월일" required={false}>
              <Stack direction="row" spacing={15}>
                <TextField hiddenLabel placeholder="생년월일 6글자" />
                <Segment segmentData={SegmentData} />
              </Stack>
            </FormContents>
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField label="이메일" placeholder="이메일 입력" />
          </Grid>
          <Grid container item spacing={15} alignItems="flex-end">
            <Grid item xs={4}>
              <FormContents label="주소">
                <TextField
                  hiddenLabel
                  placeholder="우편번호 검색"
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
              </FormContents>
            </Grid>
            <Grid item xs={4}>
              <TextField
                hiddenLabel
                placeholder="우편번호 검색 시 자동 주소 입력"
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField hiddenLabel placeholder="상세주소 입력" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DefaultTextField
              label="사업자번호"
              placeholder="사업자번호 입력"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="전화번호(회사)"
              placeholder="전화번호(회사) 입력"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField label="팩스" placeholder="팩스번호 입력" />
          </Grid>
          <Grid container item spacing={15} alignItems="flex-end">
            <Grid item xs={4}>
              <FormContents label="주소">
                <TextField
                  hiddenLabel
                  placeholder="우편번호 검색"
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
              </FormContents>
            </Grid>
            <Grid item xs={4}>
              <TextField
                hiddenLabel
                placeholder="우편번호 검색 시 자동 주소 입력"
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField hiddenLabel placeholder="상세주소 입력" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DefaultSelectField selectData={defaultSelect01} />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="운전면허번호"
              placeholder="운전면허번호 입력"
            />
          </Grid>
          <Grid item xs={6}>
            <FormContents label="면허유효기간">{/* datepicker */}</FormContents>
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="국제면허등급"
              placeholder="국제면허등급 입력"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField label="국적" placeholder="국적 입력" />
          </Grid>
          <Grid item xs={6}>
            <FormContents label="국제면허유효기간">
              {/* datepicker */}
            </FormContents>
          </Grid>
          <Grid item xs={6}>
            <FormContents label="국제면허발급일자">
              {/* datepicker */}
            </FormContents>
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField label="고객유형" placeholder="고객유형 입력" />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="EPR거래처코드"
              placeholder="EPR거래처코드 입력"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultSelectField selectData={defaultSelect02} />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField label="이용횟수" placeholder="이용횟수 입력" />
          </Grid>
          <Grid item xs={6}>
            <FormContents label="정보수신여부">
              <CheckBoxGroup />
            </FormContents>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              value="switch"
              control={<Switch color="primary" />}
              label="개인정보수집동의 유/무"
              labelPlacement="start"
              defaultChecked
            />
          </Grid>
          <Grid item xs={12}>
            <DefaultTextField label="고객UID" placeholder="UID 자동생성" />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="최초등록일/등록자"
              placeholder="YYYY.MM.DD/등록자"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="마지막수정일/수정자"
              placeholder="YYYY.MM.DD/수정자"
            />
          </Grid>
        </LySectionInfo>
      </Section>
    </>
  );
};

export default CusInfo;
