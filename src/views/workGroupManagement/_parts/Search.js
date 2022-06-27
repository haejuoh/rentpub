import React from "react";
import Section from "../../../components/customed/layout/section";
import SkrGrid from "../../../components/skr/SkrGrid";
import SelectLabelPositionTop from "../../../components/customed/form/select/SelectLabelPositionTop";
import InputLabelHidden from "../../../components/customed/form/input/InputLabelHidden";

const defaultSelect01 = {
  label: "지점",
  style: { PaperProps: { style: { width: 288 } } },
  option: ["지점", "지점", "지점", "지점", "지점", "지점"],
  disabled: false,
  isIcon: false,
  required: true,
};
const defaultSelect02 = {
  label: "근무구분",
  style: { PaperProps: { style: { width: 288 } } },
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
  required: false,
};
const defaultSelect03 = {
  label: "근무파트",
  style: { PaperProps: { style: { width: 288 } } },
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
  required: false,
};

const Search = () => {
  return (
    <Section variant="search">
      <SkrGrid container columnSpacing={20} alignItems="flex-end">
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={defaultSelect01} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={defaultSelect02} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={defaultSelect03} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <InputLabelHidden placeholder="근무자명 검색" />
        </SkrGrid>
      </SkrGrid>
    </Section>
  );
};

export default Search;
