import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Stack, Button } from "@mui/material";
import { TitlePage } from "../../components/customed/title/page/TitlePage";
import { CodeBox } from "../../assets/style/guideStyle";
const titleData = [
  {
    path: "/",
    menu: "즐겨찾기 메뉴 1",
  },
  {
    path: "/",
    menu: "다운로드 양식 1",
  },
  {
    type: "bookmark",
    menu: "다운로드 메뉴얼 1",
  },
];
export const TitlePageDefault = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8}>
          <TitlePage titleData={titleData} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`<TitlePage titleData={titleData}/>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const TitlePageWithButton = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8}>
          <TitlePage titleData={titleData}>
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
            </Stack>
          </TitlePage>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`<TitlePage titleData={titleData}>
  <Stack direction="row" spacing={8}>
    <Button color="primary" variant="contained">Button</Button>
    <Button color="primary" variant="contained">Button</Button>
  </Stack>
</TitlePage>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
