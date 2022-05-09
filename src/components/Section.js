import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Paper, IconButton, Grid, Stack } from "@mui/material";
import { ReactComponent as IconSearch } from "../assets/images/icons/search.svg";

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
    "&-data": {
      padding: "30px 30px 25px 30px",
    },
  },
}));

export const Section = ({ className = "", variant, children, ...rest }) => {
  if (variant === "search") {
    return (
      <SectionStyle className={"section-" + variant} {...rest}>
        {children}
        <Stack direction="row" justifyContent="flex-end" pt={18}>
          <IconButton color="primary">
            <IconSearch />
          </IconButton>
        </Stack>
      </SectionStyle>
    );
  } else {
    return (
      <SectionStyle className={"section-" + variant} {...rest}>
        {children}
      </SectionStyle>
    );
  }
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "search", "data"]),
};
