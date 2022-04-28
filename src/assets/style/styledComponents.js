import React from "react";
import { styled } from "@mui/material/styles";
import { Theme } from "./customTheme";
import { TextField } from "@mui/material";
const DefaultTextField = styled(TextField)(
  ({ theme }) => `
    flex-direction:row;
    position:relative;
    align-items:center;
      label{
         display:inline;
         min-width:120px;
      }
      .MuiInput-root{
          min-width:calc(100% - 120px)
      }
      .MuiFormHelperText-root{
          position:absolute;
          left:120px;
          bottom:-18px;
      }
      `
);
export { DefaultTextField };
