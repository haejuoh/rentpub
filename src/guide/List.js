import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import MuiList from "../components/MuiList";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[700]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));
const ListData = [
  {
    type: "bookmark",
    title: "즐겨찾기 메뉴 1",
  },
  {
    type: "docAttach",
    title: "다운로드 양식 1",
  },
  {
    type: "docText",
    title: "다운로드 메뉴얼 1",
  },
];
const List = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8}>
          {/* <MuiList  /> */}
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;MuiList <br />
            <b>
              &nbsp;listData="페이지 타이틀"
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

export default List;
