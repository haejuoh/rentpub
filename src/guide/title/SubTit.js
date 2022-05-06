import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import { SubTitle } from "../../components/Title";

import { CodeBox, ConditionTitle } from "../../assets/style/guideStyle";

const TitleDefault = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
const TitleToggle = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: true,
  tooltip: false,
};
const TitleTooltip = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: true,
};
const TitleOption = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: true,
  tooltip: true,
};
const TitleDesc = {
  title: "고객정보",
  desc: {
    isShow: true,
    content: "(계약번호: 111111111111)",
  },
  toggle: false,
  tooltip: false,
};
const TitleToggleDesc = {
  title: "고객정보",
  desc: {
    isShow: true,
    content: "(계약번호: 111111111111)",
  },
  toggle: true,
  tooltip: false,
};
const TitleTooltipDesc = {
  title: "고객정보",
  desc: {
    isShow: true,
    content: "(계약번호: 111111111111)",
  },
  toggle: false,
  tooltip: true,
};
const TitleOptionDesc = {
  title: "고객정보",
  desc: {
    isShow: true,
    content: "(계약번호: 111111111111)",
  },
  toggle: true,
  tooltip: true,
};

const SubTit = () => {
  return (
    <>
      <Typography variant="h3" pb={12}>
        Default
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle titleData={TitleDefault} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDefault = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: false,
};
<SubTitle titleData={TitleDefault} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Toggle
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle titleData={TitleToggle} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleToggle = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: true,
  tooltip: false,
};
<SubTitle titleData={TitleToggle} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Tooltip
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle titleData={TitleTooltip} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleTooltip = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: false,
  tooltip: true,
};
<SubTitle titleData={TitleTooltip} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Toggle &amp; Tooltip
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle titleData={TitleOption} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleOption = {
  title: "고객정보",
  desc: {
    isShow: false,
    content: "",
  },
  toggle: true,
  tooltip: true,
};
<SubTitle titleData={TitleOption} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Button
      </Typography>

      <Grid container spacing={2} pb={20}>
        <Grid item xs={8}>
          <Stack spacing={20}>
            <SubTitle titleData={TitleToggle}>
              <Button color="primary" variant="outlined">
                Button
              </Button>
            </SubTitle>
            <SubTitle titleData={TitleOption}>
              <Button color="primary" variant="outlined">
                Button
              </Button>
            </SubTitle>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`<SubTitle titleData={TitleToggle}>
  <Button color="primary" variant="outlined">Button</Button>
</SubTitle>

<SubTitle titleData={TitleOption}>
  <Button color="primary" variant="outlined">Button</Button>
</SubTitle>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Description
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack spacing={20}>
            <SubTitle titleData={TitleDesc} />
            <SubTitle titleData={TitleToggleDesc} />
            <SubTitle titleData={TitleTooltipDesc} />
            <SubTitle titleData={TitleOptionDesc} />
            <SubTitle titleData={TitleDesc}>
              <Button color="primary" variant="outlined">
                Button
              </Button>
            </SubTitle>
            <SubTitle titleData={TitleToggleDesc}>
              <Button color="primary" variant="outlined">
                Button
              </Button>
            </SubTitle>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`<SubTitle titleData={TitleDesc} />
<SubTitle titleData={TitleToggleDesc} />
<SubTitle titleData={TitleTooltipDesc} />
<SubTitle titleData={TitleOptionDesc} />
<SubTitle titleData={TitleDesc}>
  <Button color="primary" variant="outlined">Button</Button>
</SubTitle>
<SubTitle titleData={TitleToggleDesc}>
  <Button color="primary" variant="outlined">Button</Button>
</SubTitle>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default SubTit;
