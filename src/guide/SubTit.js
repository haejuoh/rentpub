import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";
import SubTitle from "../components/title/SubTitle";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[700]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));
const ConditionTitle = styled(Typography)(
  ({ theme }) => `
  font-size: 1.142rem;
  font-weight: 700;
  color: ${theme.palette.primary.light400}
`
);

const SubTit = () => {
  return (
    <>
      <ConditionTitle mt={4}>기본</ConditionTitle>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle title="서브 타이틀" />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;SubTitle <b>title="서브 타이틀"</b>/&gt;
          </CodeBox>
        </Grid>
      </Grid>
      <ConditionTitle mt={4}>제목에 버튼이 있는 경우</ConditionTitle>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <SubTitle
            type="isButton"
            title="서브 타이틀"
            btn={{
              name: "버튼이름",
              color: "primary",
              style: "outlined",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;SubTitle <br />
            <b>
              &nbsp;type="isButton"
              <br />
              &nbsp;title="서브 타이틀"
              <br />
              &nbsp;btn=&#123;&#123; name: "버튼이름", color: "primary", style:
              "outlined"
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

export default SubTit;
