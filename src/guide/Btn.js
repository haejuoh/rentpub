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
  ButtonGroup,
} from "@mui/material";
import { PencilOutline } from "react-ionicons";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../assets/images/icons/excel.svg";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[900]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));

export const BtnSize = () => {
  return (
    <>
      <Grid container spacing={5}>
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
            &lt;Button color="primary" variant="contained" &nbsp;size="small"
            /&gt;
            <br />
            <br />
            // meduim
            <br />
            // default porperty로 size 생략해도 medium 적용됨
            <br />
            &lt;Button color="primary" variant="contained" &nbsp;size="medium"
            /&gt;
            <br /> &lt;Button color="primary" variant="contained" /&gt;
            <br />
            <br />
            // large
            <br /> &lt;Button color="primary" variant="contained"
            &nbsp;size="large" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const BtnIcon = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Only Icon
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="primary">
              <IconPencil />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;IconButton color="primary"&gt; &lt;IconPencil /&gt;
            &lt;/IconButton&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
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
            &lt;Button color="primary" variant="contained" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const BtnVariation = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Primary
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="primary" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="primary">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="primary"&gt; &lt;IconPencil /&gt;
            &lt;/IconButton&gt;
            <br />
            &lt;IconButton color="primary" variant="outlined"&gt; &lt;IconPencil
            /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="primary" variant="contained" /&gt;
            <br />
            &lt;Button color="primary" variant="outlined" /&gt;
            <br />
            <br />
            // primary , icon
            <br />
            &lt;Button&nbsp; color="primary" variant="contained"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
            <br />
            &lt;Button&nbsp; color="primary" variant="outlined"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Default
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="default" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="default">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="default" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="default"&gt; &lt;IconPencil /&gt;
            &lt;/IconButton&gt;
            <br />
            &lt;IconButton color="default" variant="outlined"&gt; &lt;IconPencil
            /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="default" variant="contained" /&gt;
            <br />
            &lt;Button color="default" variant="outlined" /&gt;
            <br />
            <br />
            // default , icon
            <br />
            &lt;Button&nbsp; color="default" variant="contained"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
            <br />
            &lt;Button&nbsp; color="default" variant="outlined"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Sub
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="sub" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="sub">
              <IconPencil />
            </IconButton>
            <IconButton color="sub" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
            <Button color="sub" variant="contained">
              Button
            </Button>
            <Button color="sub" variant="contained" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="sub"&gt; &lt;IconPencil /&gt;
            &lt;/IconButton&gt;
            <br />
            &lt;Button color="sub" variant="contained" /&gt;
            <br />
            <br />
            // sub , icon
            <br />
            &lt;Button&nbsp; color="sub" variant="contained"
            endIcon=&#123;&lt;IconPencil / &gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Secondary
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="secondary" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="secondary"&gt; &lt;IconPencil /&gt;
            &lt;/IconButton&gt;
            <br />
            &lt;IconButton color="secondary" variant="outlined"&gt;
            &lt;IconPencil /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="secondary" variant="contained" /&gt;
            <br />
            &lt;Button color="secondary" variant="outlined" /&gt;
            <br />
            <br />
            // secondary , icon
            <br />
            &lt;Button&nbsp; color="secondary" variant="contained"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
            <br />
            &lt;Button&nbsp; color="secondary" variant="outlined"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Function
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="function" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="function" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="function">
              <IconPencil />
            </IconButton>
            <IconButton color="function" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="function" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="function" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="function"&gt; &lt;IconPencil /&gt;
            &lt;/IconButton&gt;
            <br />
            &lt;IconButton color="function" variant="outlined"&gt;
            &lt;IconPencil /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="function" variant="outlined" /&gt;
            <br />
            <br />
            // function , icon
            <br />
            &lt;Button&nbsp; color="function" variant="outlined"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Excel
          </Typography>
          <Stack direction="row" spacing={5}>
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
            &lt;Button color="excel" variant="contained" /&gt;
            <br />
            <br />
            // excel , icon
            <br />
            &lt;Button&nbsp; color="excel" variant="contained"
            endIcon=&#123;&lt;IconExcel /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Delete
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="delete" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="delete" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="delete" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
            <Button color="delete" variant="outlined">
              Button
            </Button>
            <Button color="delete" variant="outlined" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="delete" variant="outlined"&gt; &lt;IconPencil
            /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="delete" variant="outlined" /&gt;
            <br />
            <br />
            // delete , icon
            <br />
            &lt;Button&nbsp; color="delete" variant="outlined"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            cancel
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="cancel" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="cancel" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="cancel" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
            <Button color="cancel" variant="outlined">
              Button
            </Button>
            <Button color="cancel" variant="outlined" endIcon={<IconPencil />}>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
            &lt;IconButton color="cancel" variant="outlined"&gt; &lt;IconPencil
            /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="cancel" variant="outlined" /&gt;
            <br />
            <br />
            // cancel , icon
            <br />
            &lt;Button&nbsp; color="cancel" variant="outlined"
            endIcon=&#123;&lt;IconPencil /&gt;&#125; &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const BtnDisabled = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Disabled
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="primary" size="small" disabled>
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" disabled>
              <IconPencil />
            </IconButton>
            <IconButton color="function" size="large" disabled>
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
          <Stack direction="row" spacing={5} mt={5}>
            <Button variant="outlined" disabled>
              Button
            </Button>
            <Button variant="outlined" endIcon={<IconPencil />} disabled>
              Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
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
            // disabled
            <br />
            &lt;IconButton color="delete" variant="outlined" disabled&gt;
            &lt;IconPencil /&gt; &lt;/IconButton&gt;
            <br />
            &lt;Button color="sub" variant="contained" disabled /&gt;
            <br />
            <br />
            // disabled , icon
            <br />
            &lt;Button&nbsp; color="sub" variant="contained"
            endIcon=&#123;&lt;IconPencil /&gt;&#125;&nbsp; disabled &nbsp; /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
const buttons = [
  <Button key="one">Button</Button>,
  <Button key="two">Button</Button>,
];

export const GroupBtn = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Stack Spacing
          </Typography>
          <Box mt={10}>
            <Stack direction="row" spacing={5}>
              <Button color="primary" variant="contained" size="small">
                Button
              </Button>
              <Button color="primary" variant="contained" size="small">
                Button
              </Button>
              <Button color="primary" variant="contained" size="small">
                Button
              </Button>
              <Button color="primary" variant="contained" size="small">
                Button
              </Button>
              <Button color="primary" variant="contained" size="small">
                Button
              </Button>
            </Stack>
          </Box>
          <Box mt={20}>
            <Stack direction="row" spacing={8}>
              <Button color="primary" variant="contained">
                Button
              </Button>
              <Button color="primary" variant="contained">
                Button
              </Button>
              <Button color="primary" variant="contained">
                Button
              </Button>
              <Button color="primary" variant="contained">
                Button
              </Button>
              <Button color="primary" variant="contained">
                Button
              </Button>
            </Stack>
          </Box>
          <Box mt={20}>
            <Stack direction="row" spacing={10}>
              <Button color="primary" variant="contained" size="large">
                Button
              </Button>
              <Button color="primary" variant="contained" size="large">
                Button
              </Button>
              <Button color="primary" variant="contained" size="large">
                Button
              </Button>
              <Button color="primary" variant="contained" size="large">
                Button
              </Button>
              <Button color="primary" variant="contained" size="large">
                Button
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // small _ spacing 5px
            <br />
            &lt;Stack direction="row" spacing=&#123;5&#125;&gt; input Button
            components &lt;Stack&gt;
            <br />
            <br />
            // medium _ spacing 8px
            <br />
            &lt;Stack direction="row" spacing=&#123;8&#125;&gt; input Button
            components &lt;Stack&gt;
            <br />
            <br />
            // large _ spacing 10px
            <br />
            &lt;Stack direction="row" spacing=&#123;10&#125;&gt; input Button
            components &lt;Stack&gt;
            <br />
            <br />
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Button Group
          </Typography>
          <Stack direction="row" spacing={5}>
            <ButtonGroup variant="outlined" color="primary" size="small">
              {buttons}
            </ButtonGroup>
            <ButtonGroup
              variant="outlined"
              color="primary"
              size="small"
              disableElevation
              disabled
            >
              {buttons}
            </ButtonGroup>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <ButtonGroup variant="outlined" color="primary">
              {buttons}
            </ButtonGroup>
            <ButtonGroup
              variant="outlined"
              color="primary"
              disableElevation
              disabled
            >
              {buttons}
            </ButtonGroup>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <ButtonGroup variant="outlined" color="primary" size="large">
              {buttons}
            </ButtonGroup>
            <ButtonGroup
              variant="outlined"
              color="primary"
              size="large"
              disableElevation
              disabled
            >
              {buttons}
            </ButtonGroup>
          </Stack>

          {/* <ButtonGroup variant="outlined" color="default">
            {buttons}
          </ButtonGroup>
          <ButtonGroup variant="outlined" color="secondary">
            {buttons}
          </ButtonGroup>
          <ButtonGroup variant="outlined" color="function">
            {buttons}
          </ButtonGroup>
          <ButtonGroup variant="outlined" color="delete">
            {buttons}
          </ButtonGroup>
          <ButtonGroup variant="outlined" color="cancel">
            {buttons}
          </ButtonGroup> */}
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // default
            <br />
            &lt;ButtonGroup variant="outlined" /&gt;input Button components
            &lt;ButtonGroup&gt;
            <br />
            &lt;ButtonGroup variant="outlined" color="primary" /&gt;input Button
            components &lt;ButtonGroup&gt;
            <br />
            <br />
            // disabled
            <br />
            // disabled활성시 disableElevation, disabled porperty
            <br />
            &lt;ButtonGroup variant="outlined" color="primary" disableElevation
            disabled /&gt;
            <br />
            &nbsp;&nbsp;input Button components
            <br /> &lt;ButtonGroup&gt;
            <br />
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
