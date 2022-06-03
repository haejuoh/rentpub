import { styled } from "@mui/styles";
import SkrToggleButton from "./../../../skr/SkrToggleButton";
import { ChevronDownIcon } from "../../../../assets/style/icons";
import SkrTypography from "./../../../skr/SkrTypography";
const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const Title = styled(SkrTypography)(({ theme }) => ({
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

const ToggleIcon = styled(ChevronDownIcon)(({ selected }) => {
  return !selected
    ? {
        transform: "scaleY(-1)",
      }
    : {};
});
export { Wrap, Title, ToggleIcon };
