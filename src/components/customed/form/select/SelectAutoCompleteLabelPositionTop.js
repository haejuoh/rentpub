import React from "react";
import { TextField } from "@mui/material";
import SkrAutocomplete from "../../../skr/SkrAutocomplete";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrTextField from "../../../skr/SkrTextField";

// Icons
import { SearchIcon, CloseCircleIcon } from "../../../../assets/style/icons";

const SelectAutoCompleteLabelPositionTopList = ({
  label,
  autocompleteData,
}) => {
  return (
    <SkrFormControl variant="standard" sx={{ width: "100%" }}>
      <SkrInputLabel id="sample">{label}</SkrInputLabel>
      <SkrAutocomplete
        disablePortal
        options={autocompleteData.map((option) => option.optionLabel)}
        renderInput={(params) => <SkrTextField {...params} />}
        popupIcon={<SearchIcon />}
        clearIcon={<CloseCircleIcon />}
      />
    </SkrFormControl>
  );
};

export default SelectAutoCompleteLabelPositionTopList;
