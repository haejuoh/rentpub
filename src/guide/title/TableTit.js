import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import { TableTitle } from "../../components/Title";
import { CodeBox } from "../../assets/style/guideStyle";
import { ReactComponent as IconExcel } from "../../assets/images/icons/excel.svg";

const TitleData = {
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
          <TableTitle titleData={TitleData}>
            <Button color="excel" variant="contained" endIcon={<IconExcel />}>
              엑셀다운로드
            </Button>
          </TableTitle>
        </Grid>
        <Grid item xs={4}>
          <CodeBox>// 가이드 명시</CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export default TableTit;
