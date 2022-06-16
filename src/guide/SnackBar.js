import React from "react";
import { Snackbar, Button, IconButton } from "@mui/material";
import {
  CloseIcon,
  SadIcon,
  HappyIcon,
  AlertCircleIcon,
  CheckIcon,
} from "../assets/style/icons";
import SkrStack from "../components/skr/SkrStack";
import StatusIndicator from "../components/customed/status/StatusIndicator";
import StatusCheck from "../components/customed/status/StatusCheck";

const SnackBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="function"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button color="default" variant="contained" onClick={handleClick}>
        Open simple snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={800}
        onClose={handleClose}
        message="단기예약정보가 변경되었습니다"
        action={action}
      />
      <SkrStack spacing={10} mt={20}>
        <StatusIndicator status="success" />
        <StatusIndicator status="danger" />
        <StatusIndicator status="cancel" />
        <StatusCheck status="success" />
        <StatusCheck status="danger" />
        <StatusCheck status="cancel" />
      </SkrStack>
    </div>
  );
};

export default SnackBar;
