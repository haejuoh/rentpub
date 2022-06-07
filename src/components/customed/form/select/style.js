import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";
import { MenuItem } from "@mui/material";

const PlaceholderWrap = styled("div")(({ theme }) => ({
  color: `${theme.palette.grey[400]}`,
}));

export { PlaceholderWrap };
