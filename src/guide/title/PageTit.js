import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
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
// const titleData = {
//   path: [
//     {
//       menu: "BreadCrumb",
//       link: "/",
//     },
//     {
//       menu: "BreadCrumb",
//       link: "/",
//     },
//     {
//       menu: "BreadCrumb",
//       link: "/",
//     },
//   ],
//   bookMark: true,
// };
// console.log(titleData.path);
const PageTit = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8}>
          <PageTitle titleData={titleData} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;PageTitle <br />
            <b>
              &nbsp;title="페이지 타이틀"
              <br />
              &nbsp;breadCrumbs=&#123;&#123; depth1: "Breadcrumb", depth2:
              "Breadcrumb", depth3: "Breadcrumb"
            </b>
            &#125;&#125;
            <br />
            /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default PageTit;
