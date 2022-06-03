import React from "react";
import { Stack } from "@mui/material";

/**
 * @typedef {import('@mui/material').StackProps} StackProps
 */

/**
 * @type { React.FC<StackProps> }
 */

const SkrStack = ({
  component,
  direction,
  divider,
  spacing,
  sx,
  children,
  ...rest
}) => {
  return (
    <>
      <Stack
        component={component}
        direction={direction}
        divider={divider}
        spacing={spacing}
        sx={sx}
        {...rest}
      >
        {children}
      </Stack>
    </>
  );
};

export default SkrStack;
