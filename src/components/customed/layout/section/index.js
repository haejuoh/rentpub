import PropTypes from "prop-types";
import TitleSub from "../../title/sub/TitleSub";
import SkrStack from "../../../skr/SkrStack";
import SkrIconButton from "../../../skr/SkrIconButton";
import { SearchIcon } from "../../../../assets/style/icons";
// Style
import * as SectionStyle from "./style";

const Index = ({ className = "", variant, titleToggle, children, ...rest }) => {
  return (
    <SectionStyle.Section variant={variant} {...rest}>
      {variant === "toggle" && <TitleSub titleData={titleToggle} />}
      {children}
      {variant === "search" && (
        <SkrStack direction="row" justifyContent="flex-end" pt={18}>
          <SkrIconButton color="primary">
            <SearchIcon />
          </SkrIconButton>
        </SkrStack>
      )}
    </SectionStyle.Section>
  );
};

Index.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "search", "data", "toggle"]),
};
export default Index;
