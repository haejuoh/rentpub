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
const data = [
  {
    type: "bookmark",
    title: "즐겨찾기 메뉴 2",
  },
  {
    type: "docAttach",
    title: "다운로드 양식 2",
  },
  {
    type: "docText",
    title: "다운로드 메뉴얼 2",
  },
];
const List = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8}>
          <MuiList listData={data} />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            //data 선언 <br />
            const data = [&#123;
            <br />
            &nbsp;type: "bookmark",
            <br />
            &nbsp;title: "즐겨찾기 메뉴 2",
            <br />
            &#125;,
            <br />
            &#123;
            <br />
            &nbsp;type: "docAttach",
            <br />
            &nbsp;title: "다운로드 양식 2",
            <br />
            &#125;,
            <br />
            &#123;
            <br />
            &nbsp;type: "docText",
            <br />
            &nbsp;title: "다운로드 메뉴얼 2",
            <br />
            &#125;]
            <br />
            <br />
            &lt;MuiList <b>listData=&#123;data&#125;</b> /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
