import React, { Fragment, useState } from "react";
import { styled } from "@mui/styles";
import {
  Stack,
  Box,
  Typography,
  Button,
  FormControlLabel,
  Chip,
  Divider,
  Radio,
} from "@mui/material";
import { theme } from "../../../../assets/style/customTheme";
import { SubTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import LySection from "../../../../components/LySection";

const subTitleData01 = {
  title: "상세내역",
  desc: "",
  toggle: true,
  tooltip: false,
};

const LyList = ({ subtitle, children, borderNone, ...rest }) => {
  return (
    <>
      {!borderNone && <Divider variants="item15" />}
      {subtitle && (
        <Typography variant="st2" color="grey.900" mb={15}>
          {subtitle}
        </Typography>
      )}
      <Stack spacing={15}>{children}</Stack>
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
const ListItemTotal = ({ title, total, dc, ...rest }) => {
  const LyTotal = styled("div")(({ theme }) => ({
    padding: "15px",
    borderRadius: "2px",
    backgroundColor: `${theme.palette.background[300]}`,
  }));
  return (
    <LyTotal>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="grey.900">
          {title}
        </Typography>
        <Box>
          <Typography variant="h4" color="#EA002C" mb={5}>
            {total}원
          </Typography>
          <Typography variant="st2" color="primary">
            {dc}원
          </Typography>
        </Box>
      </Stack>
    </LyTotal>
  );
};
const CustomBadge = styled(Chip)(({ theme }) => ({
  "&.MuiChip-root": {
    marginLeft: "4px",
    color: `${theme.palette.primary.light}`,
    borderColor: `${theme.palette.primary.light}`,
  },
}));
const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
    fontSize: `${theme.typography.bt_large.fontSize}`,
  },
}));

const Simulation = () => {
  const [radios, setCheck] = React.useState({
    radio1: {
      value: true,
      name: "1",
    },
    radio2: {
      value: false,
      name: "2",
    },
    radio3: {
      value: false,
      name: "3",
    },
  });
  const checking = (event) => {
    const aaa = event.target.value;
    setCheck({
      radio1: {
        value: radios.radio1.name === aaa,
        name: "1",
      },
      radio2: {
        value: radios.radio2.name === aaa,
        name: "2",
      },
      radio3: {
        value: radios.radio3.name === aaa,
        name: "3",
      },
    });
  };
  // 아래 방식이 더 작업하기 편할듯 06.07
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("a");
  // 06.07
  return (
    <>
      <LySection>
        <Section>
          <Stack direction="row" justifyContent="space-between">
            {/* // 06.07 */}
            <CustomFormControlLabel
              control={<Radio name="aa" />}
              value="a"
              label="렌탈료 시뮬레이션 1"
              onChange={handleChange}
              checked={value === "a"}
            />
            <CustomFormControlLabel
              control={<Radio name="aa" />}
              value="b"
              label="렌탈료 시뮬레이션 1"
              onChange={handleChange}
              checked={value === "b"}
            />
            {/* 06.07 // */}
            <Button color="delete" variant="outlined">
              삭제
            </Button>
          </Stack>
          <LyList>
            <ListItemTotal
              title="총 금액"
              total="149,900"
              dc="-530,100"
            ></ListItemTotal>
          </LyList>
          <LyList>
            <Typography variant="v1" color="grey.900">
              YY.MM.DD hh:mm~YY.MM.DD hh:mm
            </Typography>
            <Typography variant="v1" color="grey.900">
              GENESSIS G70
            </Typography>
            <Typography variant="v1" color="grey.900">
              자차보험여부
            </Typography>
            <Typography variant="v1" color="grey.900">
              제휴할인유형표기
            </Typography>
          </LyList>
          <Divider variants="item15" />
          <SubTitle titleData={subTitleData01}>
            <LyList borderNone>
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
            <LyList subtitle="차량손해 면책금액">
              <ListItem>
                <ItemTitle title="일반자차 면책금액" />
                <ItemDesc desc="10,000원" />
              </ListItem>
            </LyList>
            <LyList>
              <ListItem>
                <Stack direction="row">
                  <Typography variant="st2" color="grey.900">
                    할인금액
                  </Typography>
                  <CustomBadge label="80%" color="default" variant="outlined" />
                </Stack>
                <ItemDesc desc="(-) 530,100원" color="primary" />
              </ListItem>
              <ListItem>
                <ItemTitle title="제휴할인">
                  <CustomBadge label="20%" color="default" variant="outlined" />
                </ItemTitle>
                <ItemDesc desc="- 500,000원" color="primary" />
              </ListItem>
              <ListItem>
                <ItemTitle title="쿠폰할인">
                  <CustomBadge label="60%" color="default" variant="outlined" />
                </ItemTitle>
                <ItemDesc desc="- 30,000원" color="primary" />
              </ListItem>
              <ListItem>
                <Typography variant="b1" color="grey.600">
                  쿠폰할인내역1
                </Typography>
                <Typography variant="b1" color="grey.900">
                  - 20,000원
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="b1" color="grey.600">
                  쿠폰할인내역2
                </Typography>
                <Typography variant="b1" color="grey.900">
                  - 20,000원
                </Typography>
              </ListItem>
              <ListItem>
                <ItemTitle title="기타절삭"></ItemTitle>
                <ItemDesc desc="-100원" color="primary" />
              </ListItem>
            </LyList>
            <LyList subtitle="추가요금">
              <ListItem>
                <ItemTitle title="카시트" />
                <ItemDesc desc="0원" />
              </ListItem>
            </LyList>
          </SubTitle>
        </Section>
        <Section>
          <Stack direction="row" justifyContent="space-between">
            <CustomFormControlLabel
              control={<Radio />}
              value={radios.radio2.name}
              label="렌탈료 시뮬레이션 2"
              onChange={checking}
              checked={radios.radio2.value}
            />
            <Button color="delete" variant="outlined">
              삭제
            </Button>
          </Stack>
          <LyList>
            <ListItemTotal
              title="총 금액"
              total="149,900"
              dc="-530,100"
            ></ListItemTotal>
          </LyList>
          <LyList>
            <Typography variant="v1" color="grey.900">
              YY.MM.DD hh:mm~YY.MM.DD hh:mm
            </Typography>
            <Typography variant="v1" color="grey.900">
              GENESSIS G70
            </Typography>
            <Typography variant="v1" color="grey.900">
              자차보험여부
            </Typography>
            <Typography variant="v1" color="grey.900">
              제휴할인유형표기
            </Typography>
          </LyList>
          <Divider variants="item15" />
          <SubTitle titleData={subTitleData01}>
            <LyList borderNone>
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
            <LyList subtitle="차량손해 면책금액">
              <ListItem>
                <ItemTitle title="일반자차 면책금액" />
                <ItemDesc desc="10,000원" />
              </ListItem>
            </LyList>
            <LyList>
              <ListItem>
                <Stack direction="row">
                  <Typography variant="st2" color="grey.900">
                    할인금액
                  </Typography>
                  <CustomBadge label="80%" color="default" variant="outlined" />
                </Stack>
                <ItemDesc desc="(-) 530,100원" color="primary" />
              </ListItem>
              <ListItem>
                <ItemTitle title="제휴할인">
                  <CustomBadge label="20%" color="default" variant="outlined" />
                </ItemTitle>
                <ItemDesc desc="- 500,000원" color="primary" />
              </ListItem>
              <ListItem>
                <ItemTitle title="쿠폰할인">
                  <CustomBadge label="60%" color="default" variant="outlined" />
                </ItemTitle>
                <ItemDesc desc="- 30,000원" color="primary" />
              </ListItem>
              <ListItem>
                <Typography variant="b1" color="grey.600">
                  쿠폰할인내역1
                </Typography>
                <Typography variant="b1" color="grey.900">
                  - 20,000원
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="b1" color="grey.600">
                  쿠폰할인내역2
                </Typography>
                <Typography variant="b1" color="grey.900">
                  - 20,000원
                </Typography>
              </ListItem>
              <ListItem>
                <ItemTitle title="기타절삭"></ItemTitle>
                <ItemDesc desc="-100원" color="primary" />
              </ListItem>
            </LyList>
            <LyList subtitle="추가요금">
              <ListItem>
                <ItemTitle title="카시트" />
                <ItemDesc desc="0원" />
              </ListItem>
            </LyList>
          </SubTitle>
        </Section>
        <Section>
          <Stack direction="row" justifyContent="space-between">
            <CustomFormControlLabel
              control={<Radio />}
              value={radios.radio3.name}
              label="렌탈료 시뮬레이션 3"
              onChange={checking}
              checked={radios.radio3.value}
            />
            <Button color="delete" variant="outlined">
              삭제
            </Button>
          </Stack>
          <LyList>
            <ListItemTotal
              title="총 금액"
              total="149,900"
              dc="-530,100"
            ></ListItemTotal>
          </LyList>
          <LyList>
            <Typography variant="v1" color="grey.900">
              YY.MM.DD hh:mm~YY.MM.DD hh:mm
            </Typography>
            <Typography variant="v1" color="grey.900">
              GENESSIS G70
            </Typography>
            <Typography variant="v1" color="grey.900">
              자차보험여부
            </Typography>
            <Typography variant="v1" color="grey.900">
              제휴할인유형표기
            </Typography>
          </LyList>
          <Divider variants="item15" />
          <SubTitle titleData={subTitleData01}>
            <LyList borderNone>
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
            <LyList subtitle="차량손해 면책금액">
              <ListItem>
                <ItemTitle title="일반자차 면책금액" />
                <ItemDesc desc="10,000원" />
              </ListItem>
            </LyList>
            <LyList>
              <ListItem>
                <Stack direction="row">
                  <Typography variant="st2" color="grey.900">
                    할인금액
                  </Typography>
                  <CustomBadge label="80%" color="default" variant="outlined" />
                </Stack>
                <ItemDesc desc="(-) 530,100원" color="primary" />
              </ListItem>
              <ListItem>
                <ItemTitle title="제휴할인">
                  <CustomBadge label="20%" color="default" variant="outlined" />
                </ItemTitle>
                <ItemDesc desc="- 500,000원" color="primary" />
              </ListItem>
              <ListItem>
                <ItemTitle title="쿠폰할인">
                  <CustomBadge label="60%" color="default" variant="outlined" />
                </ItemTitle>
                <ItemDesc desc="- 30,000원" color="primary" />
              </ListItem>
              <ListItem>
                <Typography variant="b1" color="grey.600">
                  쿠폰할인내역1
                </Typography>
                <Typography variant="b1" color="grey.900">
                  - 20,000원
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="b1" color="grey.600">
                  쿠폰할인내역2
                </Typography>
                <Typography variant="b1" color="grey.900">
                  - 20,000원
                </Typography>
              </ListItem>
              <ListItem>
                <ItemTitle title="기타절삭"></ItemTitle>
                <ItemDesc desc="-100원" color="primary" />
              </ListItem>
            </LyList>
            <LyList subtitle="추가요금">
              <ListItem>
                <ItemTitle title="카시트" />
                <ItemDesc desc="0원" />
              </ListItem>
            </LyList>
          </SubTitle>
        </Section>
      </LySection>
    </>
  );
};

export default Simulation;
