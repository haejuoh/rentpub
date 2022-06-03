import { styled } from "@mui/styles";

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "25px",
}));
const Content = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  gap: "5px",
  flexDirection: "row",
}));

export { Wrap, Content };
