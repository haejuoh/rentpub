import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { IconButton, Typography, Grid } from "@mui/material/";
import { CodeBox } from "../../../assets/style/guideStyle";
import IconSnackbarSuccessView from "../../../assets/images/icons/snackbar-success-view.svg";
import IconSnackbarSuccessInfo from "../../../assets/images/icons/snackbar-success-info.svg";
import IconSnackbarSuccessWaring from "../../../assets/images/icons/snackbar-success-warning.svg";

import { useDispatch } from "react-redux";
import { showSnackbar } from "./actions";
import Demo from "./Demo";

export const SnackBarSample = () => {
  const dispatch = useDispatch();

  function showSnack1() {
    dispatch(
      showSnackbar({
        snackData: {
          type: "success",
          message: `단기예약정보가 변경되었습니다`,
          icon: IconSnackbarSuccessView,
          link: <Link href="#">상세보기</Link>,
        },
      })
    );
  }

  function showSnack2() {
    dispatch(
      showSnackbar({
        snackData: {
          type: "info",
          message: `단기예약정보가 변경되었습니다`,
          icon: IconSnackbarSuccessInfo,
        },
      })
    );
  }

  function showSnack3() {
    dispatch(
      showSnackbar({
        snackData: {
          type: "warning",
          message: `단기예약정보가 변경되었습니다`,
          icon: IconSnackbarSuccessWaring,
        },
      })
    );
  }

  return (
    <>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <div>
            <Button
              variant="outlined"
              onClick={showSnack1}
              style={{ margin: "0 10px 0 0" }}
            >
              Success Snackbar
            </Button>
            <Button
              variant="outlined"
              onClick={showSnack2}
              style={{ margin: "0 10px 0 0" }}
            >
              Info Snackbar
            </Button>
            <Button
              variant="outlined"
              onClick={showSnack3}
              style={{ margin: "0 10px 0 0" }}
            >
              Warning Snackbar
            </Button>
            <Demo />
          </div>
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
