import React from "react";
import SkrStack from "../../../skr/SkrStack";
import InputLabelPositionTop from "../../form/input/InputLabelPositionTop";
// Style
import * as PanelStyled from "./style";
import SkrTypography from "./../../../skr/SkrTypography";
import SkrInputAdornment from "../../../skr/SkrInputAdornment";
import SkrButton from "../../../skr/SkrButton";
//Icon
import { ReloadIcon } from "../../../../assets/style/icons";
const NumOperator = () => {
  return (
    <PanelStyled.Form>
      <PanelStyled.Control direction="row" spacing={5}>
        <InputLabelPositionTop
          label="최소"
          defaultValue="0"
          InputProps={{
            endAdornment: (
              <SkrInputAdornment position="end">%</SkrInputAdornment>
            ),
          }}
        />
        <SkrTypography variant="b1" mb={10}>
          ~
        </SkrTypography>
        <InputLabelPositionTop
          label="최대"
          defaultValue="1,000,000"
          InputProps={{
            endAdornment: (
              <SkrInputAdornment position="end">%</SkrInputAdornment>
            ),
          }}
        />
      </PanelStyled.Control>
      <PanelStyled.Footer>
        <SkrButton
          color="modal"
          variant="contained"
          size="small"
          endIcon={<ReloadIcon />}
        >
          초기화
        </SkrButton>
        <SkrButton color="sub" variant="contained" size="small">
          적용
        </SkrButton>
      </PanelStyled.Footer>
    </PanelStyled.Form>
  );
};

export default NumOperator;
