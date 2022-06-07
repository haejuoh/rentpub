import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";

const SwitchGroupWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "160px",
  height: "34px",
  color: `${theme.palette.grey[400]}`,
}));

export { SwitchGroupWrap };
