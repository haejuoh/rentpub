import { styled } from "@mui/styles";
import { theme } from "../../../../assets/style/customTheme";

const PlaceholderWrap = styled("div")(({ theme }) => ({
  color: `${theme.palette.grey[400]}`,
}));

const MultiResultWrap = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px 3px",
  paddingBottom: "5px",
  "& .MuiChip-root svg": {
    marginRight: "0",
  },
}));

export { PlaceholderWrap, MultiResultWrap };
