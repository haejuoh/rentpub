import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";

const PlaceholderWrap = styled("div")(({ theme }) => ({
  color: `${theme.palette.grey[400]}`,
}));

export { PlaceholderWrap };
