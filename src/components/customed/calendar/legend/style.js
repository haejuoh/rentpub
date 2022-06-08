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
  "& > span": {
    display: "inline-block",
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },
}));
const Chip = styled("span")(({ theme, status }) => {
  return status === "ready"
    ? { backgroundColor: `${theme.palette.ready.main}` }
    : status === "success"
    ? { backgroundColor: `${theme.palette.success.main}` }
    : status === "warning"
    ? { backgroundColor: `${theme.palette.warning.main}` }
    : status === "done"
    ? { backgroundColor: `${theme.palette.done.main}` }
    : status === "danger"
    ? { backgroundColor: `${theme.palette.danger.main}` }
    : status === "cancel"
    ? { backgroundColor: `${theme.palette.cancel.main}` }
    : {};
});
export { Item, ChipBox, Chip };
