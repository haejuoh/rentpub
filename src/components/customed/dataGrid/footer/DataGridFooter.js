import React from "react";
import SkrTypography from "../../../skr/SkrTypography";
// Style
import * as FooterStyled from "./style";
import SkrPagination from "./../../../skr/SkrPagination";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
const DataGridFooter = () => {
  const selectRowsPer = {
    style: {
      PaperProps: {
        style: {
          width: 103,
        },
      },
    },
    option: ["5건 보기", "10건 보기", "20건 보기"],
    disabled: false,
    isIcon: false,
  };
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <FooterStyled.Wrap>
      <SkrTypography variant="b2">
        <SkrTypography variant="sb2" color="primary">
          0
        </SkrTypography>
        <span>건 선택됨</span>
      </SkrTypography>
      <FooterStyled.Option>
        <FooterStyled.Select>
          {/* Select Component */}
          {/* <SelectLabelHidden selectData={selectRowsPer} /> */}
        </FooterStyled.Select>
        <SkrPagination
          color="primary"
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
          showFirstButton
          showLastButton
          size="small"
        />
      </FooterStyled.Option>
    </FooterStyled.Wrap>
  );
};

export default DataGridFooter;
