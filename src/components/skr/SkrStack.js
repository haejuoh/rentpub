import React from "react";
import { Stack } from "@mui/material";

/**
 * @typedef {import('@mui/material').StackProps} StackProps
 */

/**
 * @type { React.FC<StackProps> }
 */

const SkrStack = ({ component, direction, divider, spacing, sx, children }) => {
  return (
    <>
      <Stack
        component={component}
        direction={direction}
        divider={divider}
        spacing={spacing}
        sx={sx}
      >
        {children}
      </Stack>
    </>
  );
};

export default SkrStack;
