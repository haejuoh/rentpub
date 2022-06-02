import React from "react";
import { Grid } from "@mui/material";

/**
 * @typedef {import('@mui/material').GridProps} GridProps
 */

/**
 * @type { React.FC<GridProps> }
 */

const SkrGrid = ({
  columns,
  columnSpacing,
  container,
  direction,
  item,
  rowSpacing,
  spacing,
  sx,
  wrap,
  xs,
  children,
}) => {
  return (
    <>
      <Grid
        columns={columns}
        columnSpacing={columnSpacing}
        container={container}
        direction={direction}
        item={item}
        rowSpacing={rowSpacing}
        spacing={spacing}
        sx={sx}
        wrap={wrap}
        xs={xs}
      >
        {children}
      </Grid>
    </>
  );
};

export default SkrGrid;
