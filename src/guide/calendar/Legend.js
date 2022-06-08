import React from "react";
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGrid from "../../components/skr/SkrGrid";
import SkrBox from "../../components/skr/SkrBox";
import { CodeBox } from "../../assets/style/guideStyle";
import LegendGroup from "../../components/customed/calendar/legend/LegendGroup";

//data
const legendSingleData = [{ label: "legend", status: "ready" }];
const legendGroupData = [
  { label: "legend", status: "ready" },
  { label: "legend", status: "success" },
  { label: "legend", status: "warning" },
  { label: "legend", status: "done" },
  { label: "legend", status: "danger" },
  { label: "legend", status: "cancel" },
];

export const LegendSingleGuide = () => {
  return (
    <>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="st2" pb={10}>
            Single
          </SkrTypography>
          <LegendGroup group={legendSingleData} />
        </SkrGrid>

        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// data
const legendSingleData = [{ label: "legend", status: "ready" }];
            
<LegendGroup group={legendSingleData} />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

export const LegendGroupGuide = () => {
  return (
    <>
      <SkrGrid container spacing={5} pt={30}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="st2" pb={10}>
            Group
          </SkrTypography>
          <LegendGroup group={legendGroupData} />
        </SkrGrid>

        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// data
const legendGroupData = [
    { label: "legend", status: "ready" },
    { label: "legend", status: "success" },
    { label: "legend", status: "warning" },
    { label: "legend", status: "done" },
    { label: "legend", status: "danger" },
    { label: "legend", status: "cancel" },
  ];
            
<LegendGroup group={legendGroupData} />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
