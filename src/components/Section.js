import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

// const SectionStyle = styled(Paper)(
//   ({ theme }) => `
//     min-Height: 400px;
//     padding: 30px;
//     margin: 0;
//     border: none;
//     border-radius: ${theme.shape.borderRadius}px;
//     box-shadow: ${theme.shadows[2]};
//     &.section {
//       &-default {
//         padding:30px;
//       }
//       &-search {
//         padding:20px 30px;
//       }
//     }
// `
// );
const SectionStyle = styled(Paper)(({ theme }) => ({
  position: "relative",
  height: "auto",
  padding: "30px",
  margin: 0,
  border: "none",
  borderRadius: `${theme.shape.borderRadius}px`,
  boxShadow: `${theme.shadows[2]}`,
  "&.section": {
    "&-default": {
      padding: "30px",
    },
    "&-search": {
      padding: "20px 30px",
    },
  },
}));

export const Section = ({ className = "", variant = "default", children, ...rest }) => {
  return (
    <SectionStyle className={"section-" + variant} {...rest}>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "search"]),
};
