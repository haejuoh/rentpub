import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Box } from "@mui/material";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[700]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));

const Typo = () => {
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h1">H1/Pretendard/Regular/24px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="h1"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h2">H2/Pretendard/Semibold/18px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="h2"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">H3/Pretendard/Medium/18px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="h3"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4">H4/Pretendard/Medium/16px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="h4"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="st1">ST1/Pretendard/Semibold/16px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="st1"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="st2">ST2/Pretendard/Semibold/14px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="st2"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="b1">B1/Pretendard/Regular/14px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="b1"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="b1">SB1/Pretendard/Medium/14px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="sb1"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="b2">B2/Pretendard/Regular/12px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="b2"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="sb2">SB2/Pretendard/Semibold/12px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="sb2"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="ct">CT/Pretendard/Light/12px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="ct"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="bt">BT/Pretendard/Medium/14px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="bt"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="ht">HT/Pretendard/Medium/10px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="ht"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="label">HT/Pretendard/Medium/12px</Typography>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            &lt;Typography <b>variant="label"</b>&gt;&lt;/Typography&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default Typo;
