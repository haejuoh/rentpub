import { styled } from "@mui/styles";
const Item = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "5px",
}));
const Status = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: "14.63px",
  height: "14.63px",
  margin: "1.69px",
  borderRadius: "100%",
}));
// const Button =
//   styled("button") <
//   { active: boolean } >
//   (({ theme, active }) =>
//     active
//       ? {
//           "& svg": {
//             "& path": {
//               fill: `${theme.palette.primary.main}`,
//             },
//           },
//         }
//       : ``);
export { Item, Status };
