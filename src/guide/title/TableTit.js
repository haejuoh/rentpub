import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import { TableTitle } from "../../components/Title";
import { CodeBox } from "../../assets/style/guideStyle";
import { ReactComponent as IconExcel } from "../../assets/images/icons/excel.svg";

const tableTitleData = {
  title: "고객정보",
  desc: {
    isShow: true,
    content: "12,340",
  },
};

const TableTit = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TableTitle titleData={tableTitleData}>
            <Button color="excel" variant="outlined" endIcon={<IconExcel />}>
              엑셀다운로드
            </Button>
          </TableTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>
            <pre>{`const tableTitleData = {
  title: "고객정보",
  desc: {
    isShow: true,
    content: "12,340",
  },
};
<TableTitle titleData={tableTitleData}>
  <Button color="excel" variant="outlined" endIcon={<IconExcel />}>엑셀다운로드</Button>
</TableTitle>`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default TableTit;
