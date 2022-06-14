import React from "react";
import SkrTypography from "../../components/skr/SkrTypography";
import SkrGrid from "../../components/skr/SkrGrid";
import ColumnFilter from "../../components/customed/datagrid/filter/ColumnFilter";
import NumOperator from "../../components/customed/datagrid/filter/NumOperator";

const GridPanel = () => {
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SkrTypography variant="st2" pb={10}>
          Column Filter
        </SkrTypography>
        <ColumnFilter />
      </SkrGrid>
      <SkrGrid item xs={6}>
        <SkrTypography variant="st2" pb={10}>
          Num Operator
        </SkrTypography>
        <NumOperator />
      </SkrGrid>
    </SkrGrid>
  );
};

export default GridPanel;
