import React from "react";
import { Autocomplete } from "@mui/material";

/**
 * @typedef {import('@mui/material').AutocompleteProps} AutocompleteProps
 */

/**
 * @type { React.FC<AutocompleteProps> }
 */

const SkrAutocomplete = ({
  options,
  renderInput,
  clearIcon,
  defaultValue,
  disabled,
  disablePortal,
  popupIcon,
  sx,
}) => {
  return (
    <Autocomplete
      options={options}
      renderInput={renderInput}
      clearIcon={clearIcon}
      defaultValue={defaultValue}
      disabled={disabled}
      disablePortal={disablePortal}
      popupIcon={popupIcon}
      sx={sx}
    />
  );
};

export default SkrAutocomplete;
