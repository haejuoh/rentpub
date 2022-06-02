import React from "react";
import { Grid, Stack } from "@mui/material";
import { CodeBox, GuideTitle } from "../assets/style/guideStyle";
import SkrChip from "../components/skr/SkrChip";
import SkrTypography from "../components/skr/SkrTypography";

const Badge = () => {
  return (
    <>
      <GuideTitle>Badge Variants</GuideTitle>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <SkrTypography variant="st2" pb={10}>
            Color
          </SkrTypography>
          <Stack direction="row" spacing={10}>
            <SkrChip label="Badge" color="default" variant="outlined" />
            <SkrChip label="Badge" color="done" />
            <SkrChip label="Badge" color="success" />
            <SkrChip label="Badge" color="primary" />
            <SkrChip label="Badge" color="warning" />
            <SkrChip label="Badge" color="ready" />
            <SkrChip label="Badge" color="danger" />
            <SkrChip label="Badge" color="cancel" />
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <CodeBox>
            <pre>{`<SkrChip label="Badge" color="default" variant="outlined" />
<SkrChip label="Badge" color="done" />
<SkrChip label="Badge" color="success" />
<SkrChip label="Badge" color="primary" />
<SkrChip label="Badge" color="warning" />
<SkrChip label="Badge" color="ready" />
<SkrChip label="Badge" color="danger" />
<SkrChip label="Badge" color="cancel" />`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <GuideTitle>Badge Size</GuideTitle>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <SkrTypography variant="st2" pb={10}>
            Default(Medium)
          </SkrTypography>
          <Stack direction="row" spacing={10}>
            <SkrChip label="Badge" color="default" variant="outlined" />
            <SkrChip label="Badge" color="done" />
            <SkrChip label="Badge" color="success" />
            <SkrChip label="Badge" color="primary" />
            <SkrChip label="Badge" color="warning" />
            <SkrChip label="Badge" color="ready" />
            <SkrChip label="Badge" color="danger" />
            <SkrChip label="Badge" color="cancel" />
          </Stack>
          <SkrTypography variant="st2" pt={20} pb={10}>
            Large
          </SkrTypography>
          <Stack direction="row" spacing={10}>
            <SkrChip
              label="Badge"
              color="default"
              variant="outlined"
              size="large"
            />
            <SkrChip label="Badge" color="done" size="large" />
            <SkrChip label="Badge" color="success" size="large" />
            <SkrChip label="Badge" color="primary" size="large" />
            <SkrChip label="Badge" color="warning" size="large" />
            <SkrChip label="Badge" color="ready" size="large" />
            <SkrChip label="Badge" color="danger" size="large" />
            <SkrChip label="Badge" color="cancel" size="large" />
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// medium
// default porperty로 size 생략해도 medium 적용됨
<SkrChip label="Badge" color="default" variant="outlined" />

// large
<SkrChip label="Badge" color="default" variant="outlined" size="large"/>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Badge;
