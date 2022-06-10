import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";

const SwitchGroupWrap = styled("li")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "160px",
  height: "34px",
  padding: "0 8px",
  color: `${theme.palette.grey[400]}`,
}));

export { SwitchGroupWrap };
