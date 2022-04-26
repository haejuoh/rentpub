import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Button, Typography } from "@mui/material";
import { PencilOutline } from "react-ionicons";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[700]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));
const ConditionTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 1.142rem;
  font-weight: 700;
  color: ${theme.palette.primary.light400}
`
);
// let IconElemSm;

// IconElemSm = styled(elIcon)(({ theme }) => ({
//   // "& path": {
//   //   fill: theme.palette.iconColor.light,
//   // },
//   marginLeft: "2px",
// }));
export const BtnSize = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ConditionTitle>Small</ConditionTitle>
          <Button color="primary" size="small" variant="contained">
            Button
          </Button>
          <Button
            color="primary"
            size="small"
            variant="contained"
            endIcon={<IconPencil size="small" />}
          >
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button color="primary" variant="contained"
            <b>&nbsp;size="small"</b>
            /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <ConditionTitle>Medium (Default)</ConditionTitle>
          <Button color="primary" variant="contained">
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button color="primary" variant="contained"
            <b>&nbsp;size="medium"</b>
            /&gt;
            <br />
            <br />
            <b>// property size 생략</b>
            <br /> &lt;Button color="primary" variant="contained" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <ConditionTitle>Large</ConditionTitle>
          <Button color="primary" size="large" variant="contained">
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button color="primary" variant="contained"
            <b>&nbsp;size="large"</b>
            /&gt;
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
          <ConditionTitle>Primary</ConditionTitle>
          <Button color="primary" variant="contained">
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
          <ConditionTitle>Default</ConditionTitle>
          <Button color="default" variant="contained">
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button <b>color="default"</b> variant="contained" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <ConditionTitle>Disabled</ConditionTitle>
          <Button color="disabled" variant="contained">
            Button
          </Button>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            &lt;Button <b>color="disabled"</b> variant="contained" /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
