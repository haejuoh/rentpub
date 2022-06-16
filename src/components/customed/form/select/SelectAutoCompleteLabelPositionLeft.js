import React from "react";
import { TextField } from "@mui/material";
import SkrAutocomplete from "../../../skr/SkrAutocomplete";
import SkrFormControl from "../../../skr/SkrFormControl";
import SkrInputLabel from "../../../skr/SkrInputLabel";
import SkrTextField from "../../../skr/SkrTextField";

// Icons
import { SearchIcon, CloseCircleIcon } from "../../../../assets/style/icons";

const SelectAutoCompleteLabelPositionLeft = ({
  label,
  autocompleteData,
  placeholder,
}) => {
  return (
    <SkrFormControl variant="standard" position="left" sx={{ width: "100%" }}>
      <SkrInputLabel
        id="sample"
        sx={{
          lineHeight: "34px",
        }}
      >
        {label}
      </SkrInputLabel>
      <SkrAutocomplete
        disablePortal
        options={autocompleteData.map((option) => option.optionLabel)}
        renderInput={(params) => (
          <SkrTextField {...params} placeholder={placeholder} />
        )}
        popupIcon={<SearchIcon />}
        clearIcon={<CloseCircleIcon />}
        placeholder={placeholder}
      />
    </SkrFormControl>
  );
};

export default SelectAutoCompleteLabelPositionLeft;
