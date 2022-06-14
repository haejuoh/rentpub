import { styled } from "@mui/styles";
const Item = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "5px",
}));
const ChipBox = styled("div")(() => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "18px",
  height: "18px",
  padding: "0.1rem",
}));
const Chip = styled("span")(({ theme, status }) => {
  return {
    display: "inline-block",
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    backgroundColor: theme.palette[status].main,
  };
});
export { Item, ChipBox, Chip };
