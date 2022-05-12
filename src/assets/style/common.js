import React from "react";
import { styled, makeStyles } from "@mui/styles";
import { theme } from "./customTheme";
import {
  TextField,
  MenuItem,
  FormControl,
  ToggleButton,
  InputLabel,
  Box,
} from "@mui/material";
//custom textField
const DefaultTextField = styled(TextField)(({ theme }) => ({
  "&.MuiFormControl-root": {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
  },
  "& .MuiInputLabel-root": {
    display: "inline",
    Width: "120px",
    flex: "0 0 120px",
  },
  "& .MuiInput-root": {
    width: "calc(100% - 120px)",
    flex: "0 0 calc(100% - 120px)",
  },
  "& .MuiFormHelperText-root": {
    position: "absolute",
    left: "120px",
    bottom: "-18px",
  },
}));

//placeholder
const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: `${theme.palette.grey[400]}`,
  },
}));
const Placeholder = ({ content }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{content}</div>;
};
//select
const SelectCombo = styled(MenuItem)(({ theme }) => ({
  height: "30px",
  padding: "8px",
  color: `${theme.palette.grey[700]}`,
  "&:hover": {
    backgroundColor: `${theme.palette.background[300]}`,
    "& .MuiListItemIcon-root": {
      svg: {
        "& path": {
          fill: `${theme.palette.primary.main}`,
        },
      },
    },
    // color: `${theme.palette.primary.main}`,
  },
  "&:disabled": {
    backgroundColor: `${theme.palette.background[700]}`,
  },

  "& .MuiListItemIcon-root": {
    minWidth: "14px",
    marginRight: "5px",
    svg: {
      "& path": {
        fill: `${theme.palette.grey[700]}`,
      },
    },
  },
  "& .MuiListItemText-root": {
    margin: 0,
    "& .MuiTypography-root": {
      margin: 0,
    },
  },
  "&.Mui-selected:hover": {
    backgroundColor: `${theme.palette.background[300]}`,
  },
}));
const DefaultFormControl = styled(FormControl)(({ theme }) => ({
  "&.MuiFormControl-root": {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
  },
  "& .MuiInputLabel-root": {
    display: "inline",
    Width: "120px",
    flex: "0 0 120px",
  },
  "& .MuiInput-root": {
    width: "calc(100% - 120px)",
    flex: "0 0 calc(100% - 120px)",
  },
}));
const LayoutStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    // flexDirection: "row",
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    // width: "calc(100% - 65px)",
  },
  page: {
    width: "100%",
    minHeight: "calc(100% - 57px)",
    // backgroundColor: `${theme.palette.background[700]}`,
    backgroundColor: "#F2F5F5",
    padding: "30px 50px",
  },
}));
const FormControlContents = styled(FormControl)(({ theme }) => ({
  "&.MuiFormControl-root": {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    width: "100%",
  },

  "& .MuiInputLabel-root": {
    display: "inline",
    Width: "120px",
    flex: "0 0 120px",
  },
  "& .MuiBox-root": {
    width: "calc(100% - 120px)",
    flex: "0 0 calc(100% - 120px)",
  },
}));
const FormContents = ({ label, required, children, ...rest }) => {
  return (
    <FormControlContents>
      <InputLabel htmlFor={label} required={required}>
        {label}
      </InputLabel>
      <Box>{children}</Box>
    </FormControlContents>
  );
};

export {
  DefaultTextField,
  Placeholder,
  SelectCombo,
  DefaultFormControl,
  LayoutStyle,
  FormContents,
};
