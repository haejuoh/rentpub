import React from "react";
import { Divider } from "@mui/material";

/**
 * @typedef {import('@mui/material').DividerProps} DividerProps
 */

/**
 * @type { React.FC<DividerProps> }
 */

const SkrDivider = ({
  absolute,
  flexItem,
  orientation,
  sx,
  textAlign,
  variant,
  children,
}) => {
  return (
    <>
      <Divider
        absolute={absolute}
        flexItem={flexItem}
        orientation={orientation}
        sx={sx}
        textAlign={textAlign}
        variant={variant}
      >
        {children}
      </Divider>
    </>
  );
};

export default SkrDivider;
