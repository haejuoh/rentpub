import React from "react";
import { Pagination } from "@mui/material";
/**
 * @typedef {import('@mui/material').PaginationProps} PaginationProps
 */

/**
 * @type { React.FC<PaginationProps> }
 */

const SkrPagination = ({
  color,
  onChange,
  page,
  renderItem,
  shape,
  size,
  sx,
  variant,
  children,
}) => {
  return (
    <Pagination
      color={color}
      onChange={onChange}
      page={page}
      renderItem={renderItem}
      shape={shape}
      size={size}
      sx={sx}
      variant={variant}
    >
      {children}
    </Pagination>
  );
};

export default SkrPagination;
