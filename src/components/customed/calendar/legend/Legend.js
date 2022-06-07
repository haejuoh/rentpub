import React from "react";
import SkrTypography from "../../../skr/SkrTypography";
// Style
import * as LegendStyle from "./style";

const Legend = ({ legend, status }) => {
  return (
    <LegendStyle.Item>
      <SkrTypography>{legend}</SkrTypography>
      <LegendStyle.Status status={status}></LegendStyle.Status>
    </LegendStyle.Item>
  );
};

export default Legend;
