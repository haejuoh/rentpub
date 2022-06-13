import { styled } from "@mui/styles";

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "44px",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.palette.border[500]}`,
}));
const Option = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "20px",
}));
const Select = styled("div")(({ theme }) => ({
  width: "103px",
}));

const Count = styled("div")(({ theme }) => ({
  color: ` ${theme.palette.primary.main}`,
}));
const Icon = styled("span")(() => ({
  display: "inline-block",
  width: "14px",
  height: "14px",
  "& svg": {
    width: "100%",
    height: "100%",
  },
}));

const Chip = styled("span")(({ theme, active }) => {
  return active
    ? {
        "& svg": {
          "& path": {
            fill: `${theme.palette.grey[900]}`,
          },
        },
      }
    : {
        "& svg": {
          "& path": {
            fill: `${theme.palette.grey[400]}`,
          },
        },
      };
});

export { Wrap, Option, Select, Count, Icon, Chip };
