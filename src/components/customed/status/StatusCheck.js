import React from "react";
import { CheckIcon } from "../../../assets/style/icons";

// Style
import * as StatusStyled from "./style";

const StatusCheck = ({ status }) => {
  return (
    <StatusStyled.StatusCheckWrap status={status}>
      <CheckIcon />
    </StatusStyled.StatusCheckWrap>
  );
};

export default StatusCheck;
