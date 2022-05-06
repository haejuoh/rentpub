import React from "react";
import { Grid, Stack, Chip } from "@mui/material";
import { CodeBox } from "../assets/style/guideStyle";
const Badge = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={1}>
            <Chip label="Badge" color="default" variant="outlined" />
            <Chip label="Badge" color="primary" />
            <Chip label="Badge" color="ready" />
            <Chip label="Badge" color="success" />
            <Chip label="Badge" color="warning" />
            <Chip label="Badge" color="error" />
            <Chip label="Badge" color="info" />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>//가이드 명시</CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Badge;
