import React from "react";
import { DataGrid } from "@mui/x-data-grid";
/**
 * @typedef {import('@mui/x-data-grid').DataGridProps} DataGridProps
 */

/**
 * @type { React.FC<DataGridProps> }
 */

const SkrDataGrid = React.forwardRef(({ ...rest }, ref) => {
  return <DataGrid ref={ref} {...rest} />;
});
SkrDataGrid.displayName = "SkrDataGrid";

export default SkrDataGrid;
