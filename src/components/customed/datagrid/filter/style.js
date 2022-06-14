import { styled } from "@mui/styles";

const Wrap = styled("div")(({ theme }) => ({
  width: "234px",
  border: `1px solid ${theme.palette.border[700]}`,
}));
const Header = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "15px 8px 0",
}));
const Content = styled("div")(({ theme }) => ({
  width: "100%",
  height: "370px",
}));
const List = styled("ul")(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "scroll",
  "& li": {
    width: "100%",
    maxWidth: "100%",
  },
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#c4c4c4",
    borderRadius: "6px",
    width: "6px",
    margin: "5.6px 2px 0",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f3f5",
  },
}));
const Form = styled("div")(({ theme }) => ({
  width: "269px",
  padding: "15px",
  border: `1px solid ${theme.palette.border[700]}`,
}));
const Control = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "5px",
}));
const Footer = styled("dix")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "10px",
}));
export { Wrap, Header, Content, List, Form, Control, Footer };
