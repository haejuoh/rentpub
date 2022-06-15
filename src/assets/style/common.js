import React from "react";
import { styled } from "@mui/styles";
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  width: "100%",
}));

const Contents = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const Page = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100% - 57px)",
  // backgroundColor: `${theme.palette.background[700]}`,
  backgroundColor: "#F2F5F5",
  padding: "30px 50px",
}));

export { Container, Contents, Page };
