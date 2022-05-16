import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Button } from "@mui/material";
import { SectionTitle } from "../../components/Title";
import { CodeBox, ConditionTitle } from "../../assets/style/guideStyle";

const TitleDefault = {
  title: "홍길동님의 계약정보",
};
const TitleDesc = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
};
const TitleBadge = {
  title: "홍길동님의 계약정보",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};
const TitleOption = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};

const SectionTit = () => {
  return (
    <>
      <Typography variant="h3" pb={12}>
        Default
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SectionTitle titleData={TitleDefault} />
          <SectionTitle titleData={TitleDefault}>
            <Button color="default" variant="outlined">
              수정하기
            </Button>
          </SectionTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDefault = {
  title: "홍길동님의 계약정보",
};

// Default
<SectionTitle titleData={TitleDefault} />
// Default with Button
<SectionTitle titleData={TitleDefault}>
            <Button color="default" variant="outlined">
              수정하기
            </Button>
          </SectionTitle>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Description
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SectionTitle titleData={TitleDesc} />
          <SectionTitle titleData={TitleDesc}>
            <Button color="default" variant="outlined">
              수정하기
            </Button>
          </SectionTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleDesc = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
};

// Description
<SectionTitle titleData={TitleDesc} />
// Description with Button
<SectionTitle titleData={TitleDesc}>
  <Button color="default" variant="outlined">
    수정하기
  </Button>
</SectionTitle>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Badge
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SectionTitle titleData={TitleBadge} />
          <SectionTitle titleData={TitleBadge}>
            <Button color="default" variant="outlined">
              수정하기
            </Button>
          </SectionTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleBadge = {
  title: "홍길동님의 계약정보",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};

// Badge
<SectionTitle titleData={TitleBadge} />
// Badge with Button
<SectionTitle titleData={TitleBadge}>
  <Button color="default" variant="outlined">
    수정하기
  </Button>
</SectionTitle>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
      <Typography variant="h3" pb={12}>
        Description &amp; Badge
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SectionTitle titleData={TitleOption} />
          <SectionTitle titleData={TitleOption}>
            <Button color="default" variant="outlined">
              수정하기
            </Button>
          </SectionTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const TitleOption = {
  title: "홍길동님의 계약정보",
  desc: "(계약번호: 111111111111)",
  badge: {
    title: "Badge",
    color: "default",
    variant: "outlined",
  },
};

// Description & Badge
<SectionTitle titleData={TitleOption} />
// Description & Badge with Button
<SectionTitle titleData={TitleOption}>
  <Button color="default" variant="outlined">
    수정하기
  </Button>
</SectionTitle>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionTit;
