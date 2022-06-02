import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import SkrTypography from "../components/skr/SkrTypography";
import SkrGrid from "../components/skr/SkrGrid";
import SkrBox from "../components/skr/SkrBox";
import { CodeBox } from "../assets/style/guideStyle";

const Typo = () => {
  return (
    <>
      <SkrGrid container spacing={2} mt={2}>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="h1">H1/Pretendard/Regular/24px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="h1"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="h2">
            H2/Pretendard/Semibold/18px
          </SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="h2"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="h3">H3/Pretendard/Medium/18px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="h3"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="h4">H4/Pretendard/Medium/16px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="h4"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="st1">
            ST1/Pretendard/Semibold/16px
          </SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="st1"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="st2">
            ST2/Pretendard/Semibold/14px
          </SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="st2"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="b1">B1/Pretendard/Regular/14px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="b1"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="b1">SB1/Pretendard/Medium/14px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="sb1"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="b2">B2/Pretendard/Regular/12px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="b2"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="sb2">
            SB2/Pretendard/Semibold/12px
          </SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="sb2"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="ct">CT/Pretendard/Light/12px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="ct"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="bt">BT/Pretendard/Medium/14px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="bt"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="ht">HT/Pretendard/Medium/10px</SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="ht"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
        <SkrGrid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <SkrTypography variant="label">
            HT/Pretendard/Medium/12px
          </SkrTypography>
        </SkrGrid>
        <SkrGrid item xs={4}>
          <CodeBox>
            &lt;SkrTypography <b>variant="label"</b>&gt;&lt;/SkrTypography&gt;
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

export default Typo;
