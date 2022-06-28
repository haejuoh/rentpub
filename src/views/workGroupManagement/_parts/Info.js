import React from "react";

//components
import SkrGrid from "../../../components/skr/SkrGrid";
import SkrDivider from "../../../components/skr/SkrDivider";
import SkrTypography from "./../../../components/skr/SkrTypography";
import SkrIconButton from "../../../components/skr/SkrIconButton";
import Section from "../../../components/customed/layout/section";
import TitleSub from "../../../components/customed/title/sub/TitleSub";
import SelectLabelPositionLeft from "../../../components/customed/form/select/SelectLabelPositionLeft";
import FormContents from "../../../components/customed/form/contents/FormContents";
import SelectMultipleLabelLeft from "../../../components/customed/form/select/SelectMultipleLabelLeft";
import Segment from "../../../components/customed/form/radio/Segment";
import InputLabelHidden from "./../../../components/customed/form/input/InputLabelHidden";

//icons
import { CalendarIcon } from "../../../assets/style/icons";

const TitleDefault = {
  title: "작업자 근무파트 정보",
  desc: "",
  toggle: false,
  tooltip: false,
};

const defaultSelect01 = {
  label: "근무구분",
  style: { PaperProps: { style: { width: 172 } } },
  option: [
    "근무구분",
    "근무구분",
    "근무구분",
    "근무구분",
    "근무구분",
    "근무구분",
  ],
  disabled: false,
  isIcon: false,
  required: true,
};
const defaultSelect02 = {
  label: "근무파트",
  style: { PaperProps: { style: { width: 344 } } },
  option: [
    "근무파트",
    "근무파트",
    "근무파트",
    "근무파트",
    "근무파트",
    "근무파트",
  ],
  disabled: false,
  isIcon: false,
  required: true,
};
const multiSelect = {
  label: "근무자",
  style: { PaperProps: { style: { width: 1111 } } },
  option: [
    "김나래",
    "박만세",
    "송가을",
    "이예준",
    "이진세",
    "김나래01",
    "김나래02",
    "김나래03",
    "김나래04",
    "김나래05",
    "김나래06",
    "김나래07",
  ],
  disabled: false,
  isIcon: false,
  required: true,
};
const SegmentData = {
  disabled: false,
  group: [
    { label: "사용", name: "Segment", checked: true },
    { label: "미사용", name: "Segment", checked: false },
  ],
};

const Info = () => {
  return (
    <Section variant="default">
      <TitleSub titleData={TitleDefault} />
      <SkrDivider variant="section15" />
      <SkrGrid container spacing={15} alignItems="center">
        <SkrGrid item xs={3}>
          <SelectLabelPositionLeft selectData={defaultSelect01} />
        </SkrGrid>
        <SkrGrid item xs>
          <SelectLabelPositionLeft selectData={defaultSelect02} />
        </SkrGrid>
        <SkrGrid item xs>
          <FormContents label="유효일자" required={true} position="left">
            {/* datepicker */}
            <InputLabelHidden
              placeholder="Placeholder"
              defaultValue="2022-06-06"
              InputProps={{
                endAdornment: (
                  <SkrIconButton>
                    <CalendarIcon />
                  </SkrIconButton>
                ),
              }}
            />
            <SkrTypography variant="b1">~</SkrTypography>
            <InputLabelHidden
              placeholder="Placeholder"
              defaultValue="2022-06-06"
              InputProps={{
                endAdornment: (
                  <SkrIconButton>
                    <CalendarIcon />
                  </SkrIconButton>
                ),
              }}
            />
          </FormContents>
        </SkrGrid>
        <SkrGrid item xs={12}>
          <SelectMultipleLabelLeft selectData={multiSelect} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <FormContents label="사용여부" required={true} position="left">
            <Segment segmentData={SegmentData} />
          </FormContents>
        </SkrGrid>
      </SkrGrid>
    </Section>
  );
};

export default Info;
