import React from "react";
import { Grid, Stack, Chip, Typography } from "@mui/material";
import { CodeBox, GuideTitle } from "../assets/style/guideStyle";
const Badge = () => {
  return (
    <>
      <GuideTitle>Badge Variants</GuideTitle>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography variant="st2" pb={10}>
            Color
          </Typography>
          <Stack direction="row" spacing={10}>
            <Chip label="Badge" color="default" variant="outlined" />
            <Chip label="Badge" color="done" />
            <Chip label="Badge" color="success" />
            <Chip label="Badge" color="primary" />
            <Chip label="Badge" color="warning" />
            <Chip label="Badge" color="ready" />
            <Chip label="Badge" color="danger" />
            <Chip label="Badge" color="cancel" />
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <CodeBox>
            <pre>{`<Chip label="Badge" color="default" variant="outlined" />
<Chip label="Badge" color="done" />
<Chip label="Badge" color="success" />
<Chip label="Badge" color="primary" />
<Chip label="Badge" color="warning" />
<Chip label="Badge" color="ready" />
<Chip label="Badge" color="danger" />
<Chip label="Badge" color="cancel" />`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <GuideTitle>Badge Size</GuideTitle>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography variant="st2" pb={10}>
            Default(Medium)
          </Typography>
          <Stack direction="row" spacing={10}>
            <Chip label="Badge" color="default" variant="outlined" />
            <Chip label="Badge" color="done" />
            <Chip label="Badge" color="success" />
            <Chip label="Badge" color="primary" />
            <Chip label="Badge" color="warning" />
            <Chip label="Badge" color="ready" />
            <Chip label="Badge" color="danger" />
            <Chip label="Badge" color="cancel" />
          </Stack>
          <Typography variant="st2" pt={20} pb={10}>
            Large
          </Typography>
          <Stack direction="row" spacing={10}>
            <Chip
              label="Badge"
              color="default"
              variant="outlined"
              size="large"
            />
            <Chip label="Badge" color="done" size="large" />
            <Chip label="Badge" color="success" size="large" />
            <Chip label="Badge" color="primary" size="large" />
            <Chip label="Badge" color="warning" size="large" />
            <Chip label="Badge" color="ready" size="large" />
            <Chip label="Badge" color="danger" size="large" />
            <Chip label="Badge" color="cancel" size="large" />
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// medium
// default porperty로 size 생략해도 medium 적용됨
<Chip label="Badge" color="default" variant="outlined" />

// large
<Chip label="Badge" color="default" variant="outlined" size="large"/>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Badge;
