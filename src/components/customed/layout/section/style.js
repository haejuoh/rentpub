import { styled } from "@mui/styles";

const Section = styled("div")(({ theme, variant }) => ({
  height: "auto",
  margin: 0,
  padding: `${variant === "data" ? "30px" : "30px 30px 25px"}`,
  backgroundColor: `${theme.palette.background[500]}`,
  border: "none",
  borderRadius: `${theme.shape.borderRadius}px`,
  boxShadow: `${theme.shadows[2]}`,
  position: "relative",
}));
const Container = styled("div")(() => ({
  display: "flex",
  gap: "30px",
}));
const Sticky = styled("div")(() => ({
  width: "300px",
  flexShrink: "0",
}));

export { Section, Container, Sticky };
