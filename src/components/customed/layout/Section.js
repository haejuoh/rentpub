import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
// import { SubTitle } from "../../Title";
import TitleSub from "../title/sub/TitleSub";
import SkrStack from "../../skr/SkrStack";
import SkrIconButton from "../../skr/SkrIconButton";
import { SearchIcon } from "../../../assets/style/icons";

const SectionStyle = styled("div")(({ theme }) => ({
  position: "relative",
  height: "auto",
  padding: "30px",
  margin: 0,
  backgroundColor: `${theme.palette.background[500]}`,
  border: "none",
  borderRadius: `${theme.shape.borderRadius}px`,
  boxShadow: `${theme.shadows[2]}`,
  "&.section": {
    "&-default": {
      padding: "30px",
    },
    "&-data": {
      padding: "30px 30px 25px 30px",
    },
  },
}));

export const Section = ({
  className = "",
  variant,
  titleToggle,
  children,
  ...rest
}) => {
  return (
    <SectionStyle className={"section-" + variant} {...rest}>
      {variant === "toggle" && <TitleSub titleData={titleToggle} />}
      {children}
      {variant === "search" && (
        <SkrStack direction="row" justifyContent="flex-end" pt={18}>
          <SkrIconButton color="primary">
            <SearchIcon />
          </SkrIconButton>
        </SkrStack>
      )}
    </SectionStyle>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "search", "data", "toggle"]),
};
