import React from "react";
import { Section } from "../../../components/customed/layout/Section";
import SkrGrid from "../../../components/skr/SkrGrid";
import SelectLabelPositionLeft from "../../../components/customed/form/select/SelectLabelPositionLeft";
import InputLabelPositionLeft from "../../../components/customed/form/input/InputLabelPositionLeft";
import { CalendarIcon } from "../../../assets/style/icons";
import SkrIconButton from "../../../components/skr/SkrIconButton";
//data
const select1 = {
  label: "권역-지점",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: [
    "제주-제주지점",
    "기아자동차",
    "쉐보레",
    "렉서스",
    "도요타",
    "포르쉐",
  ],
  disabled: true,
  isIcon: false,
};
const select2 = {
  label: "제조사",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: ["현대자동차", "기아자동차", "쉐보레", "렉서스", "도요타", "포르쉐"],
  disabled: true,
  isIcon: false,
};
const select3 = {
  label: "차종",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: [
    "GENESSIS G70",
    "기아자동차",
    "쉐보레",
    "렉서스",
    "도요타",
    "포르쉐",
  ],
  disabled: true,
  isIcon: false,
};

const Form = () => {
  return (
    <Section>
      <SkrGrid container columnSpacing={15}>
        <SkrGrid item xs={3}>
          <SelectLabelPositionLeft selectData={select1} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionLeft selectData={select2} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionLeft selectData={select3} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <InputLabelPositionLeft
            label="단기차정명"
            placeholder="Placeholder"
            defaultValue="2019 G70 2.2D[디젤]2WD"
          />
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container columnSpacing={15} pt={15}>
        <SkrGrid item xs={3}>
          <InputLabelPositionLeft
            label="요금시작일"
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
        </SkrGrid>
        <SkrGrid item xs={3}>
          <InputLabelPositionLeft
            label="요금종료일"
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
        </SkrGrid>
        <SkrGrid item xs={3}></SkrGrid>
        <SkrGrid item xs={3}></SkrGrid>
      </SkrGrid>
    </Section>
  );
};

export default Form;
