import React from "react";
import SkrAutocomplete from "../../../skr/SkrAutocomplete";
import SkrTextField from "../../../skr/SkrTextField";

// Icons
import { SearchIcon, CloseCircleIcon } from "../../../../assets/style/icons";

const SelectAutoCompleteLabelHidden = ({ autocompleteData, placeholder }) => {
  return (
    <SkrAutocomplete
      disablePortal
      options={autocompleteData.map((option) => option.optionLabel)}
      renderInput={(params) => (
        <SkrTextField {...params} placeholder={placeholder} />
      )}
      popupIcon={<SearchIcon />}
      clearIcon={<CloseCircleIcon />}
    />
  );
};

export default SelectAutoCompleteLabelHidden;
