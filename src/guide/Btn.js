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

import { CodeBox, FlexBox } from "../assets/style/guideStyle";

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
            <pre>{`// small
<Button color="primary" variant="contained" size="small">Button</Button>
// medium
// default porperty로 size 생략해도 medium 적용됨
<Button color="primary" variant="contained" size="medium">Button</Button>
<Button color="primary" variant="contained">Button</Button>
//large
<Button color="primary" variant="contained" size="large">Button</Button>`}</pre>
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
            <pre>{`<IconButton color="primary"><IconPencil /></IconButton>`}</pre>
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
            <pre>{`<Button color="primary" variant="contained" endIcon={<IconPencil />}>Button</Button>`}</pre>
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
            <IconButton color="primaryOutlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="primary">
              <IconPencil />
            </IconButton>
            <IconButton color="primaryOutlined">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="primaryOutlined" size="large">
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
            <pre>{`// primary
<IconButton color="primary" size="small"><IconPencil /></IconButton>
<IconButton color="primary" variant="outlined" size="small"><IconPencil /></IconButton>
<Button color="primary" variant="contained" size="small">Button</Button>
<Button color="primary" variant="outlined" size="small">Button</Button>

// primary , icon
<Button color="primary" variant="contained" size="small" endIcon={<IconPencil />}>Button</Button>
<Button color="primary" variant="outlined" size="small" endIcon={<IconPencil />}>Button</Button>`}</pre>
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
            <IconButton color="defaultOutlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="default">
              <IconPencil />
            </IconButton>
            <IconButton color="defaultOutlined">
              <IconPencil />
            </IconButton>
            <IconButton color="default" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="defaultOutlined" size="large">
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
            <pre>{`// default
<IconButton color="default" size="small"><IconPencil /></IconButton>
<IconButton color="default" variant="outlined" size="small"><IconPencil /></IconButton>
<Button color="default" variant="contained" size="small">Button</Button>
<Button color="default" variant="outlined" size="small">Button</Button>

// default , icon
<Button color="default" variant="contained" size="small" endIcon={<IconPencil />}>Button</Button>
<Button color="default" variant="outlined" size="small" endIcon={<IconPencil />}>Button</Button>`}</pre>
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
            <pre>{`// sub
<IconButton color="sub" size="small"><IconPencil /></IconButton>
<Button color="sub" variant="contained" size="small">Button</Button>

// sub , icon
<Button color="sub" variant="contained" size="small" endIcon={<IconPencil />}>Button</Button>
`}</pre>
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
            <IconButton color="secondaryOutlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary">
              <IconPencil />
            </IconButton>
            <IconButton color="secondaryOutlined">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="secondaryOutlined" size="large">
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
            <pre>{`// secondary
<IconButton color="secondary" size="small"><IconPencil /></IconButton>
<IconButton color="secondary" variant="outlined" size="small"><IconPencil /></IconButton>
<Button color="secondary" variant="contained" size="small">Button</Button>
<Button color="secondary" variant="outlined" size="small">Button</Button>

// secondary , icon
<Button color="secondary" variant="contained" size="small" endIcon={<IconPencil />}>Button</Button>
<Button color="secondary" variant="outlined" size="small" endIcon={<IconPencil />}>Button</Button>`}</pre>
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
            <IconButton color="functionOutlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="function">
              <IconPencil />
            </IconButton>
            <IconButton color="functionOutlined">
              <IconPencil />
            </IconButton>
            <IconButton color="function" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="functionOutlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <Button color="function" size="small" variant="contained">
              Button
            </Button>
            <Button
              color="function"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
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
            <Button color="function" variant="contained">
              Button
            </Button>
            <Button
              color="function"
              variant="contained"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
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
            <Button color="function" size="large" variant="contained">
              Button
            </Button>
            <Button
              size="large"
              color="function"
              variant="contained"
              endIcon={<IconPencil />}
            >
              Button
            </Button>
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
            <pre>{`// function
<IconButton color="function" size="small"><IconPencil /></IconButton>
<IconButton color="function" variant="outlined" size="small"><IconPencil /></IconButton>
<Button color="function" variant="outlined" size="small">Button</Button>

// function , icon
<Button color="function" variant="outlined" size="small" endIcon={<IconPencil />}>Button</Button>`}</pre>
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
              variant="outlined"
              endIcon={<IconExcel />}
            >
              Button
            </Button>

            <Button color="excel" variant="outlined" endIcon={<IconExcel />}>
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// excel
<Button color="excel" variant="outlined" />
// excel , icon
<Button color="excel" variant="outlined" size="small" endIcon={<IconExcel />}>Button</Button>
<Button color="excel" variant="outlined" endIcon={<IconExcel />}>Button</Button>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Delete
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="deleteOutlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="deleteOutlined">
              <IconPencil />
            </IconButton>
            <IconButton color="deleteOutlined" size="large">
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
            <pre>{`// delete
<IconButton color="delete" variant="outlined" size="small"><IconPencil /></IconButton>
<Button color="delete" variant="outlined" size="small">Button</Button>

// delete , icon
<Button color="delete" variant="outlined" size="small" endIcon={<IconPencil />}>Button</Button>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            cancel
          </Typography>
          <Stack direction="row" spacing={5}>
            <IconButton color="cancelOutlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="cancelOutlined">
              <IconPencil />
            </IconButton>
            <IconButton color="cancelOutlined" size="large">
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
            <pre>{`// cancel
<IconButton color="cancel" variant="outlined" size="small"><IconPencil /></IconButton>
<Button color="cancel" variant="outlined" size="small">Button</Button>

// cancel , icon
<Button color="cancel" variant="outlined" size="small" endIcon={<IconPencil />}>Button</Button>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={5} mt={5}>
        <Grid item xs={6}>
          <Typography variant="h4" pb={1}>
            Modal
          </Typography>
          <Stack direction="row" spacing={5} mt={5}>
            <Button color="modal" size="small">
              Button
            </Button>
            <Button color="modal">Button</Button>
            <Button color="modal" size="large">
              Button
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// modal
<Button color="modal" size="small">Button</Button>
<Button color="modal">Button</Button>
<Button color="modal" size="large">Button</Button>
`}</pre>
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
            <pre>{`// disabled
<IconButton color="primary" size="small" disabled><IconPencil /></IconButton>
<Button color="primary" variant="contained" size="small" disabled>Button</Button>

// disabled , icon
<Button color="primary" variant="contained" size="small" endIcon={<IconPencil />} disabled>Button</Button>`}</pre>
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
            <pre>{`// small _ spacing 5px
<Stack direction="row" spacing={5}>
  <Button color="primary" variant="contained" size="small">Button</Button>
</Stack>

// medium _ spacing 8px
<Stack direction="row" spacing={8}>
  <Button color="primary" variant="contained">Button</Button>
</Stack>

// large _ spacing 10px
<Stack direction="row" spacing={10}>
  <Button color="primary" variant="contained" size="large">Button</Button>
</Stack>
`}</pre>
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
            <pre>{`// default
<ButtonGroup variant="outlined" size="small">
  <Button>Button</Button>
  <Button>Button</Button>
</ButtonGroup>
<ButtonGroup color="primary" variant="outlined" size="small">
  input Button components
</ButtonGroup>

// disabled (disabled 활성시 disableElevation, disabled porperty)
<ButtonGroup color="primary" variant="outlined" size="small" disableElevation disabled>
  input Button components
</ButtonGroup>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
