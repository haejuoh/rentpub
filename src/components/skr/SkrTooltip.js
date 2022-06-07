import React from "react";
import { Tooltip } from "@mui/material";

/**
 * @typedef {import('@mui/material').TooltipProps} TooltipProps
 */

/**
 * @type { React.FC<TooltipProps> }
 */

const SkrTooltip = ({ children, ...rest }) => {
  return <Tooltip {...rest}>{children}</Tooltip>;
};

export default SkrTooltip;
