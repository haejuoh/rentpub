import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Box } from "@mui/material";
const SegmentStyle = styled(Box)(({ theme }) => ({
  display: "inline-block",
  height: "34px",
  position: "relative",
  userSelect: "none",
  zIndex: 1,
  backgroundColor: `${theme.palette.background[700]}`,
  color: `${theme.palette.grey[400]}`,
  padding: "3px",
  borderRadius: "4px",
  "& input": {
    display: "none",
    "&:checked + label": {
      color: `${theme.palette.primary.main}`,
      fontSize: `${theme.typography.bt.fontSize}`,
      fontWeight: `${theme.typography.bt.fontWeight}`,
      borderRadius: "4px",

      "&:before": {
        content: "''",
        width: "100%",
        height: "28px",
        borderRadius: "4px",
        boxShadow: `${theme.shadows[1]}`,
        background: `${theme.palette.common.white}`,
        clear: "both",
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: -1,
      },
    },
  },
  "& label": {
    flex: 1,
    textAlign: "center",
    cursor: "pointer",
    height: "28px",
    display: "flex-inline",
    alignItems: "center",
    position: "relative",
    left: 0,
    top: "4px",
    padding: "6px 9px",
  },
  "&.disabled": {
    opacity: "0.52",
  },
}));
const Segment = ({ segmentData }) => {
  return (
    <SegmentStyle className={segmentData.disabled ? "disabled" : ""}>
      {segmentData.group.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <input
              type="radio"
              name={item.name}
              value={idx}
              id={item.name + idx}
              defaultChecked={item.checked}
              disabled={segmentData.disabled}
            />
            <label htmlFor={item.name + idx}>
              <span>{item.label}</span>
            </label>
          </Fragment>
        );
      })}
    </SegmentStyle>
  );
};

export default Segment;
