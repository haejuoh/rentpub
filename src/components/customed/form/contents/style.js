import { styled } from "@mui/styles";

const Contents = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  "& .MuiInput-root": {
    flex: "0 0 100%",
    width: "100%",
  },
}));

export { Contents };
