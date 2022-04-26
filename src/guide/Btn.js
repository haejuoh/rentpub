import React from "react";
// import { styled, makeStyles } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Box,
  Button,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { PencilOutline } from "react-ionicons";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../assets/images/icons/excel.svg";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[700]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));

export const BtnSize = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4" pb={1}>
                Small
              </Typography>
              <Button color="primary" size="small" variant="contained">
                Button
              </Button>
            </div>
            <div>
              <Typography variant="h4" pb={1}>
                Medium (Default)
              </Typography>
              <Button color="primary" variant="contained">
                Button
              </Button>
            </div>
            <div>
              <Typography variant="h4" pb={1}>
                Large
              </Typography>
              <Button color="primary" size="large" variant="contained">
                Button
              </Button>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // small
            <br />
            &lt;Button color="primary" variant="contained"
            <b>&nbsp;size="small"</b>
            /&gt;
            <br />
            <br />
            // meduim
            <br />
            // default porperty로 size 생략해도 medium 적용됨
            <br />
            &lt;Button color="primary" variant="contained"
            <b>&nbsp;size="medium"</b>
            /&gt;
            <br /> &lt;Button color="primary" variant="contained" /&gt;
            <br />
            <br />
            // large
            <br /> &lt;Button color="primary" variant="contained"
            <b>&nbsp;size="large"</b>
            /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const BtnIcon = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Button With endIcon
          </Typography>
          <Button color="primary" variant="contained" endIcon={<IconPencil />}>
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button <b>color="primary"</b> variant="contained" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Only Icon
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton color="primary">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <IconButton color="default">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <IconButton color="sub">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <IconButton color="secondary">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined">
              <IconPencil />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button <b>color="primary"</b> variant="contained" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const BtnColor = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            primary
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="primary" size="small" variant="contained">
              Button
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="primary" size="small" variant="outlined">
              Button
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="primary" variant="contained">
              Button
            </Button>
            <Button
              color="primary"
              variant="contained"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="primary" variant="outlined">
              Button
            </Button>
            <Button color="primary" variant="outlined" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="primary" size="large" variant="contained">
              Button
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="primary" size="large" variant="outlined">
              Button
            </Button>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // primary
            <br />
            &lt;Button <b>color="primary" variant="contained"</b> /&gt;
            <br />
            &lt;Button <b>color="primary" variant="outlined"</b> /&gt;
            <br />
            <br />
            // primary , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="primary" variant="contained" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
            <br />
            &lt;Button&nbsp;
            <b>
              color="primary" variant="outlined" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Default
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="default" size="small" variant="contained">
              Button
            </Button>
            <Button
              color="default"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="default" size="small" variant="outlined">
              Button
            </Button>
            <Button
              color="default"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="default" variant="contained">
              Button
            </Button>
            <Button
              color="default"
              variant="contained"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="default" variant="outlined">
              Button
            </Button>
            <Button color="default" variant="outlined" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="default" size="large" variant="contained">
              Button
            </Button>
            <Button
              color="default"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="default" size="large" variant="outlined">
              Button
            </Button>
            <Button
              size="large"
              color="default"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // default
            <br />
            &lt;Button <b>color="default" variant="contained"</b> /&gt;
            <br />
            &lt;Button <b>color="default" variant="outlined"</b> /&gt;
            <br />
            <br />
            // default , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="default" variant="contained" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
            <br />
            &lt;Button&nbsp;
            <b>
              color="default" variant="outlined" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Sub
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="sub" size="small" variant="contained">
              Button
            </Button>
            <Button
              color="sub"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="sub" variant="contained">
              Button
            </Button>
            <Button color="sub" variant="contained" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="sub" size="large" variant="contained">
              Button
            </Button>
            <Button
              color="sub"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // sub
            <br />
            &lt;Button <b>color="sub" variant="contained"</b> /&gt;
            <br />
            <br />
            // sub , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="sub" variant="contained" endIcon=&#123;&lt;IconPencil /
              &gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Secondary
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="secondary" size="small" variant="contained">
              Button
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="secondary" size="small" variant="outlined">
              Button
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="secondary" variant="contained">
              Button
            </Button>
            <Button
              color="secondary"
              variant="contained"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="secondary" variant="outlined">
              Button
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="secondary" size="large" variant="contained">
              Button
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
            <Button color="secondary" size="large" variant="outlined">
              Button
            </Button>
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // secondary
            <br />
            &lt;Button <b>color="secondary" variant="contained"</b> /&gt;
            <br />
            &lt;Button <b>color="secondary" variant="outlined"</b> /&gt;
            <br />
            <br />
            // secondary , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="secondary" variant="contained" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
            <br />
            &lt;Button&nbsp;
            <b>
              color="secondary" variant="outlined" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Function
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="function" size="small" variant="outlined">
              Button
            </Button>
            <Button
              color="function"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="function" variant="outlined">
              Button
            </Button>
            <Button
              color="function"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="function" size="large" variant="outlined">
              Button
            </Button>
            <Button
              size="large"
              color="function"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // function
            <br />
            &lt;Button <b>color="function" variant="outlined"</b> /&gt;
            <br />
            <br />
            // function , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="function" variant="outlined" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Excel
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="excel"
              size="small"
              variant="contained"
              endIcon={<IconExcel />}
            >
              Button
            </Button>
            <Button color="excel" variant="contained" endIcon={<IconExcel />}>
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // excel
            <br />
            &lt;Button <b>color="excel" variant="contained"</b> /&gt;
            <br />
            <br />
            // excel , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="excel" variant="contained" endIcon=&#123;&lt;IconExcel
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Delete
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="delete" size="small" variant="outlined">
              Button
            </Button>
            <Button
              color="delete"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="delete" variant="outlined">
              Button
            </Button>
            <Button color="delete" variant="outlined" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="delete" size="large" variant="outlined">
              Button
            </Button>
            <Button
              size="large"
              color="delete"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // delete
            <br />
            &lt;Button <b>color="delete" variant="outlined"</b> /&gt;
            <br />
            <br />
            // delete , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="delete" variant="outlined" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            cancel
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="cancel" size="small" variant="outlined">
              Button
            </Button>
            <Button
              color="cancel"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="cancel" variant="outlined">
              Button
            </Button>
            <Button color="cancel" variant="outlined" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="cancel" size="large" variant="outlined">
              Button
            </Button>
            <Button
              size="large"
              color="cancel"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // cancel
            <br />
            &lt;Button <b>color="cancel" variant="outlined"</b> /&gt;
            <br />
            <br />
            // cancel , icon
            <br />
            &lt;Button&nbsp;
            <b>
              color="cancel" variant="outlined" endIcon=&#123;&lt;IconPencil
              /&gt;&#125;
            </b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const BtnDisabled = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Disabled
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button size="small" variant="contained" disabled>
              Button
            </Button>
            <Button
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
              disabled
            >
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button variant="outlined" disabled>
              Button
            </Button>
            <Button variant="outlined" endIcon={<IconPencil />} disabled>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} mt={2}>
            <Button color="primary" size="large" variant="contained" disabled>
              Button
            </Button>
            <Button
              color="sub"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
              disabled
            >
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // sub
            <br />
            &lt;Button color="sub" variant="contained" <b>disabled</b> /&gt;
            <br />
            <br />
            // sub , icon
            <br />
            &lt;Button&nbsp; color="sub" variant="contained"
            endIcon=&#123;&lt;IconPencil /&gt;&#125;&nbsp;
            <b>disabled</b>
            &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
