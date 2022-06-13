import React from "react";
import { Tooltip } from "@mui/material";

/**
 * @typedef {import('@mui/material').TooltipProps} TooltipProps
 */

/**
 * @type { React.FC<TooltipProps> }
 */

const SkrTooltip = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <Tooltip {...rest} ref={ref}>
      {children}
    </Tooltip>
  );
});

SkrTooltip.displayName = "SkrTooltip";
export default SkrTooltip;
