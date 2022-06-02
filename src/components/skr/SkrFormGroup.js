import React from "react";
import { FormGroup } from "@mui/material";

/**
 * @typedef {import('@mui/material').FormGroupProps} FormGroupProps
 */

/**
 * @type { React.FC<FormGroupProps> }
 */

const SkrFormGroup = ({ row, sx, children }) => {
  return (
    <>
      <FormGroup row={row} sx={sx}>
        {children}
      </FormGroup>
    </>
  );
};

export default SkrFormGroup;
