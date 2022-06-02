import React from "react";
import { Link } from "react-router-dom";
// SkrComponents
import SkrTypography from "../../../skr/SkrTypography";
import SkrBreadcrumbs from "./../../../skr/SkrBreadcrumbs";
import SkrToggleButton from "./../../../skr/SkrToggleButton";
// Icons
import {
  BookmarkIcon,
  ChevronForwardIcon,
} from "../../../../assets/style/icons";
// Style
import * as TitlePageStyled from "./style";

export const TitlePage = ({ titleData, children, ...rest }) => {
  const [selected, setSelected] = React.useState(true);
  return (
    <TitlePageStyled.Wrap>
      <SkrBreadcrumbs
        separator={<ChevronForwardIcon />}
        aria-label="breadcrumb"
      >
        {titleData.map((title, idx) => {
          switch (title.type) {
            case "bookmark":
              return (
                <TitlePageStyled.Item key={idx}>
                  <SkrTypography variant="h2" color="grey.900">
                    {title.menu}
                  </SkrTypography>
                  <SkrToggleButton
                    color="standard"
                    value="check"
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <BookmarkIcon />
                  </SkrToggleButton>
                </TitlePageStyled.Item>
              );
              break;
            case "current":
              return (
                <div key={idx}>
                  <SkrTypography variant="h2" color="grey.900">
                    {title.menu}
                  </SkrTypography>
                </div>
              );
              break;
            default:
              return (
                <Link to={title.path} key={idx}>
                  <SkrTypography variant="h3" color="grey.600">
                    {title.menu}
                  </SkrTypography>
                </Link>
              );
              break;
          }
        })}
      </SkrBreadcrumbs>
      {children}
    </TitlePageStyled.Wrap>
  );
};
