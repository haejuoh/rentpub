import React from "react";
//component
import SkrGrid from "../../../components/skr/SkrGrid";
import { Section } from "../../../components/customed/layout/Section";
import SelectLabelPositionTop from "../../../components/customed/form/select/SelectLabelPositionTop";

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
  disabled: false,
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
  disabled: false,
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
  disabled: false,
  isIcon: false,
};
const select4 = {
  label: "상태",
  style: {
    PaperProps: {
      style: {
        width: 289,
      },
    },
  },
  option: ["품의완료", "기아자동차", "쉐보레", "렉서스", "도요타", "포르쉐"],
  disabled: false,
  isIcon: false,
};
const Search = () => {
  return (
    <Section variant="search">
      <SkrGrid container columnSpacing={20}>
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={select1} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={select2} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={select3} />
        </SkrGrid>
        <SkrGrid item xs={3}>
          <SelectLabelPositionTop selectData={select4} />
        </SkrGrid>
      </SkrGrid>
    </Section>
  );
};

export default Search;
