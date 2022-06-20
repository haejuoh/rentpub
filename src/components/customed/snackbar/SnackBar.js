import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { IconButton, Typography, Grid, Snackbar } from "@mui/material/";
import { CodeBox } from "../../../assets/style/guideStyle";
import {
  SadIcon,
  HappyIcon,
  AlertCircleIcon,
} from "../../../assets/style/icons";
import Snackbars from "./Snackbars";

export const SnackBarSample = () => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const [snackData, setSnackData] = React.useState({});

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  function showSnack1() {
    setSnackData({
      type: "success",
      message: `단기예약정보가 변경되었습니다`,
      icon: HappyIcon,
      link: <Link href="#">상세보기</Link>,
    });
    setOpen(true);
  }

  function showSnack2() {
    setSnackData({
      type: "info",
      message: `단기예약정보가 변경되었습니다2`,
      icon: SadIcon,
    });
    setOpen(true);
  }

  function showSnack3() {
    setSnackData({
      type: "warning",
      message: `단기예약정보가 변경되었습니다3`,
      icon: AlertCircleIcon,
    });
    setOpen(true);
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
            <Snackbars
              snackData={snackData}
              showSnackbar={open}
              onHideSnackbar={() => setOpen(false)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Click Button
<Button
  variant="outlined"
  onClick={showSnack1}
  style={{ margin: "0 10px 0 0" }}
>
  Success Snackbar2
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

// Snackbar
<Snackbars snackData={snackData} showSnackbar={open} onHideSnackbar={()=>setOpen(false)} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
