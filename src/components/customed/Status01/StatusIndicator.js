import React from "react";
import {
  SadIcon,
  HappyIcon,
  AlertCircleIcon,
} from "../../../assets/style/icons";

// Style
import * as StatusStyled from "./style";

const StatusIndicator = ({ status }) => {
  return (
    <StatusStyled.StatusIndicatorWrap status={status}>
      {status === "success" && <HappyIcon />}
      {status === "danger" && <AlertCircleIcon />}
      {status === "cancel" && <SadIcon />}
    </StatusStyled.StatusIndicatorWrap>
  );
};

export default StatusIndicator;
