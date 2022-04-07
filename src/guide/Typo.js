import React from "react";
import { Typography } from "@mui/material";

const Typo = () => {
  return (
    <>
      <Typography variant="h1" mt={2}>
        H1/Pretendard/Regular/29px
      </Typography>
      <Typography variant="h2" mt={2}>
        H2/Pretendard/Medium/24px
      </Typography>
      <Typography variant="h3" mt={2}>
        H3/Pretendard/Regular/20px
      </Typography>
      <Typography variant="h4" mt={2}>
        H4/Pretendard/Medium/16px
      </Typography>
      <Typography variant="st1" mt={2}>
        ST1/Pretendard/Regular/16px
      </Typography>
      <Typography variant="st2" mt={2}>
        ST2/Pretendard/Semibold/14px
      </Typography>
      <Typography variant="b1" mt={2}>
        B1/Pretendard/Regular/14px
      </Typography>
      <Typography variant="sb1" mt={2}>
        SB1/Pretendard/Medium/14px
      </Typography>
      <Typography variant="b2" mt={2}>
        B2/Pretendard/Regular/12px
      </Typography>
      <Typography variant="sb2" mt={2}>
        SB2/Pretendard/Semibold/12px
      </Typography>
      <Typography variant="ct" mt={2} sx={{ display: "block" }}>
        CT/Pretendard/Light/12px
      </Typography>
      <Typography variant="bt" mt={2} sx={{ display: "block" }}>
        BT/Pretendard/Medium/14px
      </Typography>
      <Typography variant="ht" mt={2} sx={{ display: "block" }}>
        HT/Pretendard/Medium/12px
      </Typography>
    </>
  );
};

export default Typo;
