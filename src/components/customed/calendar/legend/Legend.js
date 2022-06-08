import React from "react";
import SkrTypography from "../../../skr/SkrTypography";
// Style
import * as LegendStyle from "./style";
/**
 * @typedef label
 * @type {string}
 * @typedef status
 * @type {string}
 */

/** @type {label} */
/** @type {status} */
var props;
const Legend = ({ label, status }) => {
  return (
    <LegendStyle.Item>
      <SkrTypography>{label}</SkrTypography>
      <LegendStyle.ChipBox>
        <LegendStyle.Chip status={status}></LegendStyle.Chip>
      </LegendStyle.ChipBox>
    </LegendStyle.Item>
  );
};

export default Legend;
