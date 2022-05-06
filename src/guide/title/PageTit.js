import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Stack, Button } from "@mui/material";
import { PageTitle } from "../../components/Title";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[700]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));
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
    active: true,
  },
];
const PageTit = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8}>
          <PageTitle titleData={titleData}>
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
          </PageTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`<PageTitle titleData={titleData}>
  <Stack direction="row" spacing={8}>
    <Button color="primary" variant="contained">Button</Button>
    <Button color="primary" variant="contained">Button</Button>
  </Stack>
</PageTitle>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default PageTit;
