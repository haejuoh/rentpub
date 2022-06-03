import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";
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
const Desc = styled("div")(({ theme }) => ({
  color: `${theme.palette.grey[600]}`,
}));
const Toggle = styled("div")(({ theme }) => ({
  transform: "scaleY(-1)",
}));
