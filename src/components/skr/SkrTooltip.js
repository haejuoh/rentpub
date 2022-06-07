import React from "react";
import { Tooltip } from "@mui/material";

/**
 * @typedef {import('@mui/material').TooltipProps} TooltipProps
 */

/**
 * @type { React.FC<TooltipProps> }
 */

const SkrTooltip = ({ children, ...rest }) => {
  const onOpen = () => {
    console.log("aaa");
  };
  return (
    <>
      <Tooltip {...rest}>{children}</Tooltip>
    </>
  );
};

// const SkrTooltip = React.forwardRef((ref, { ...rest }) => {
//   const onOpen = () => {
//     console.log("aaa");
//   };
//   return (
//     <>
//       <Tooltip {...rest} ref={ref}>

//       </Tooltip>
//     </>
//   );
// });

export default SkrTooltip;
