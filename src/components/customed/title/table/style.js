import { styled } from "@mui/styles";
import SkrTypography from "./../../../skr/SkrTypography";
const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const Title = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  "&:before": {
    content: "''",
    display: "inline-block",
    width: "6px",
    height: "6px",
    clear: "both",
    backgroundColor: `${theme.palette.primary.bright}`,
    borderRadius: 1,
  },
}));
export { Wrap, Title };
