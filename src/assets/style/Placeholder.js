import React from "react";
// import { styled } from "@mui/material/styles";
import { styled, makeStyles } from "@mui/styles";
const usePlaceholderStyles = makeStyles((theme) => ({
  placeholder: {
    color: `${theme.palette.grey[400]}`,
    paddingLeft: "12px",
  },
}));

const Placeholder = ({ content }) => {
  const classes = usePlaceholderStyles();
  return <div className={classes.placeholder}>{content}</div>;
};
export default Placeholder;
