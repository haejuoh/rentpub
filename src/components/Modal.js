import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Divider,
  Grid,
} from "@mui/material/";
import { CodeBox } from "../assets/style/guideStyle";
import { ReactComponent as IconClose } from "../assets/images/icons/close.svg";

const Modal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    fontSize: `${theme.typography.h4.fontSize}`,
    fontWeight: `${theme.typography.h4.fontWeight}`,
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative",
    "&:before": {
      content: "''",
      display: "inline-block",
      width: "6px",
      height: "6px",
      backgroundColor: `${theme.palette.primary.bright}`,
      clear: "both",
      borderRadius: 1,
    },
    ".MuiIconButton-root": {
      width: "24px",
      height: "24px",
      padding: "5.62px",
      svg: {
        width: "100%",
        height: "100%",
      },
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
}));

const ModalTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose}>
            <IconClose />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Divider type="section15" />
    </>
  );
};

ModalTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const ModalSample = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open Modal
          </Button>
          <Modal onClose={handleClose} open={open}>
            <ModalTitle id="customized-dialog-title" onClose={handleClose}>
              Title
            </ModalTitle>
            <DialogContent>
              <Typography gutterBottom>Contents</Typography>
            </DialogContent>
            <DialogActions>
              <Button color="modal" onClick={handleClose}>
                취소
              </Button>
              <Button color="sub" variant="contained" onClick={handleClose}>
                확인
              </Button>
            </DialogActions>
          </Modal>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Click Button
<Button variant="outlined" onClick={handleClickOpen}>
    Open Modal
</Button>

// Modal 
// * Default( size="sm" )
// ** size property ( sm / md / lg / xl )
<Modal onClose={handleClose} open={open}>
    <ModalTitle id="customized-dialog-title" onClose={handleClose}>
        Title
    </ModalTitle>
    <DialogContent>
        <Typography gutterBottom>Contents</Typography>
    </DialogContent>
    <DialogActions>
        <Button color="modal" onClick={handleClose}>
            취소
        </Button>
        <Button color="sub" variant="contained" onClick={handleClose}>
            확인
        </Button>
    </DialogActions>
</Modal>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
