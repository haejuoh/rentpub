import React from "react";
import { DataGrid } from "@mui/x-data-grid";
/**
 * @typedef {import('@mui/x-data-grid').DataGridProps} DataGridProps
 */

/**
 * @type { React.FC<DataGridProps> }
 */

const SkrDataGrid = ({
  columns,
  rows,
  checkboxSelection,
  components,
  headerHeight,
  onPageSizeChange,
  page,
  pageSize,
  rowHeight,
  rowsPerPageOptions,
}) => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      checkboxSelection={checkboxSelection}
      components={components}
      headerHeight={headerHeight}
      onPageSizeChange={onPageSizeChange}
      page={page}
      pageSize={pageSize}
      rowHeight={rowHeight}
      rowsPerPageOptions={rowsPerPageOptions}
    />
  );
};

export default SkrDataGrid;
