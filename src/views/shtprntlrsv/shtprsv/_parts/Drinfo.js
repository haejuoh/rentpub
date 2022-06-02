import React from "react";
import { styled } from "@mui/styles";
import {
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
  Checkbox,
  Divider,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import {
  DefaultTextField,
  FormContents,
} from "../../../../assets/style/common";
import { SubTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import LySectionInfo from "../../../../components/LySectionInfo";

// image
import { ReactComponent as IconAdd } from "../../../../assets/images/icons/add.svg";
import { ReactComponent as IconDelete } from "../../../../assets/images/icons/trash.svg";

const TitleSubData = {
  title: "운전자정보",
  desc: "",
  toggle: false,
  tooltip: false,
};
const checkBoxData = [
  { label: "SNS", checkItem: true, disabled: false },
  { label: "이메일", checkItem: true, disabled: false },
];
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
        <Divider variants="item15" />
        <Typography variant="st2" mb={25}>
          제1 운전자
        </Typography>
        <LySectionInfo>
          <Grid item xs={12}>
            <DefaultTextField
              label="고객명"
              placeholder="고객명"
              defaultValue="홍길동"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="연락처"
              placeholder="연락처"
              defaultValue="010-0000-0000"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="생년월일"
              placeholder="생년월일"
              defaultValue="2020-00-00"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허종류"
              placeholder="면허종류"
              defaultValue="1종 보통"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="운전면허번호"
              placeholder="운전면허번호"
              defaultValue="38허9988"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허유효기간"
              placeholder="면허유효기간"
              defaultValue="2025-12-31"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허발급일자"
              placeholder="면허발급일자"
              defaultValue="2010-12-31"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end" spacing={8}>
              <Checkbox checked />
              <Button color="primary" variant="outlined">
                운전면허검증
              </Button>
            </Stack>
          </Grid>
        </LySectionInfo>
        <LySectionInfo>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={8} mt={20}>
              <Typography variant="st2">제2 운전자</Typography>
              <IconButton color="delete" variant="outlined">
                <IconDelete />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <DefaultTextField
              label="고객명"
              placeholder="고객명"
              defaultValue="홍길동"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="연락처"
              placeholder="연락처"
              defaultValue="010-0000-0000"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="생년월일"
              placeholder="생년월일"
              defaultValue="2020-00-00"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허종류"
              placeholder="면허종류"
              defaultValue="1종 보통"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="운전면허번호"
              placeholder="운전면허번호"
              defaultValue="38허9988"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허유효기간"
              placeholder="면허유효기간"
              defaultValue="2025-12-31"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultTextField
              label="면허발급일자"
              placeholder="면허발급일자"
              defaultValue="2010-12-31"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end" spacing={8}>
              <Checkbox checked disabled />
              <Button color="primary" variant="outlined">
                운전면허검증
              </Button>
            </Stack>
          </Grid>
        </LySectionInfo>
      </Section>
    </>
  );
};

export default Drinfo;
