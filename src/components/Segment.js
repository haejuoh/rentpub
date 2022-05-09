import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Box } from "@mui/material";
const SegmentStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
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
    },
    "&:nth-of-type(1):checked ~ label:last-of-type:before": {
      transform: "translateX(calc(0% + 0px))",
      borderRadius: "4px",
      boxShadow: `${theme.shadows[1]}`,
      margin: "3px",
    },
    "&:nth-of-type(2):checked ~ label:last-of-type:before": {
      transform: "translateX(calc(100% + 0px))",
      borderRadius: "4px",
      boxShadow: `${theme.shadows[1]}`,
      margin: "3px",
    },
    "&:nth-of-type(3):checked ~ label:last-of-type:before": {
      transform: "translateX(calc(200% + 0px))",
      borderRadius: "4px",
      boxShadow: `${theme.shadows[1]}`,
      margin: "3px",
    },
    "&:nth-of-type(4):checked ~ label:last-of-type:before": {
      transform: "translateX(calc(300% + 0px))",
      borderRadius: "4px",
      boxShadow: `${theme.shadows[1]}`,
      margin: "3px",
    },
  },
  "& label": {
    flex: 1,
    textAlign: "center",
    cursor: "pointer",
    padding: "4px 9px",
    transition: "color 250ms cubic-bezier(0, 0.95, 0.38, 0.98)",
    "&:before": {
      background: `${theme.palette.common.white}`,
      transition: "all 250ms cubic-bezier(0, 0.95, 0.38, 0.98)",
    },
    "&:last-of-type:before": {
      content: "''",
      display: "block",
      maxWidth: "calc(50% - 3px)",
      margin: "2px",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      transform: "translateX(0)",
    },
  },
  "&.segment": {
    "&-2": {
      "& label": {
        "&:last-of-type:before": {
          maxWidth: "calc(50% - 3px)",
        },
      },
    },
    "&-3": {
      "& label": {
        "&:last-of-type:before": {
          maxWidth: "calc(calc(100% / 3) - 3px)",
        },
      },
    },
    "&-4": {
      "& label": {
        "&:last-of-type:before": {
          maxWidth: "calc(25% - 3px)",
        },
      },
    },
  },
}));
const Segment = ({ className = "", variant, segmentData, ...rest }) => {
  return (
    <SegmentStyle className={"segment-" + variant} {...rest}>
      {segmentData.map((item, idx) => {
        return (
          <>
            <input
              type="radio"
              name={item.name}
              value={idx}
              id={item.name + idx}
              defaultChecked={item.checked}
              key={idx}
            />
            <label htmlFor={item.name + idx}>{item.label}</label>
          </>
        );
      })}
    </SegmentStyle>
  );
};
Segment.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["2", "3", "4"]),
};

export default Segment;
