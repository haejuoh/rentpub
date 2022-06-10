import React from "react";
//skr
import SkrDataGrid from "./../../skr/SkrDataGrid";
import DataGridFooter from "./footer/DataGridFooter";
//icons
import {
  SortedDescendingIcon,
  SortedAscendingIcon,
  ColumnMenuIcon,
} from "./Icons";

const DataGrid = React.forwardRef(
  (
    {
      columnData,
      rowData,
      isCheckbox,
      customNoRowsOverlay,
      customNoResultsOverlay,
      ...rest
    },
    ref
  ) => {
    const [pageSize, setPageSize] = React.useState(5);
    return (
      <>
        <SkrDataGrid
          headerHeight={40}
          rowHeight={40}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          rows={rowData}
          columns={columnData}
          checkboxSelection={isCheckbox}
          components={{
            Footer: DataGridFooter,
            ColumnSortedDescendingIcon: SortedDescendingIcon,
            ColumnSortedAscendingIcon: SortedAscendingIcon,
            ColumnMenuIcon: ColumnMenuIcon,
            NoRowsOverlay: customNoRowsOverlay,
            NoResultsOverlay: customNoResultsOverlay,
          }}
          {...rest}
          ref={ref}
        />
      </>
    );
  }
);
SkrDataGrid.displayName = "DataGrid";
export default DataGrid;
