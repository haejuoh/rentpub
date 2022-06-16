import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const SnackbarEx = styled(Snackbar)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "auto",
    height: "auto",
    minWidth: "342px",
    minHeight: "44px !important",
    backgroundColor: "white",
    boxShadow: `${theme.shadows[1]}`,
    "&.MuiAlert-root": {
      "& .MuiAlert-icon": {
        width: "17.56px",
        height: "17.56px",
        color: "orange",
        display: "none",
      },
      "& .MuiAlert-message": {
        color: "#434C4C",
        fontSize: "0.875rem",
        lineHeight: "10px",
        display: "flex",
        alignItems: "center",
        svg: {
          width: "17.56px",
          height: "17.56px",
          margin: "10px 10px 0 0",
          lineHeight: "19px",
        },
        "& img": {
          width: "17.56px",
          height: "17.56px",
          margin: "0 10px 0 0",
        },
      },
      "& .MuiIconButton-root": {
        color: "#434C4C",
        width: "1em",
        height: "1em",
        "&:hover": {
          backgroundColor: "white",
        },
      },
      "& .MuiTypography-root": {
        color: "#434C4C",
        margin: "9px 0 0 0",
        height: "1em",
      },
      "& .MuiLink-root": {
        color: "#009A93",
        margin: "3px 0 0 10px",
        textDecoration: "none",
      },     
      "& .css-ki1hdl-MuiAlert-action": {
        padding: "6px 0px 0 0",
        marginRight: "-7px",
      },
    },
  },
}));

function Snackbars({ snackData, showSnackbar, onHideSnackbar }) {
  console.log(snackData,showSnackbar)
  const handleCloseSuccessSnack = (event, reason) => {
    if (reason !== "clickaway") {
      onHideSnackbar();
    }
  };

  const snackColor = snackData.color ? snackData.color : snackData.type;
  const snackTitle = snackData.title ? (
    <AlertTitle>{snackData.title}</AlertTitle>
  ) : null;
  const snackIcon = snackData.icon ? <img src={snackData.icon} /> : null;
  const snackLink = snackData.link ? (
    <Link href="#">{snackData.link}</Link>
  ) : null;
  const snackAction = snackData.action ? (
    <Button onClick={snackData.action.clicked} color="inherit" size="small">
      {snackData.action.text}
    </Button>
  ) : null;

  return (
    <SnackbarEx
      open={showSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSuccessSnack}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        onClose={handleCloseSuccessSnack}
        severity={snackData.type}
        color={snackColor}
        variant="filled"
        elevation={6}
        action={snackAction}
      >
        {snackTitle}
        {snackIcon}
        {snackData.message}
        {snackLink}
      </Alert>
    </SnackbarEx>
  );
}
export default Snackbars