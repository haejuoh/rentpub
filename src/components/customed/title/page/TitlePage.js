import React from "react";
import { Typography, Breadcrumbs, ToggleButton } from "@mui/material";
import { BookmarkIcon, ChevronForwardIcon } from "../../../assets/style/icons";
import { Link } from "react-router-dom";
import * as PageTitleStyled from "./style";

export const PageTitle = ({ titleData, children, ...rest }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <PageTitleStyled.Wrap>
      <Breadcrumbs separator={<ChevronForwardIcon />} aria-label="breadcrumb">
        {titleData.map((title, idx) => {
          switch (title.type) {
            case "bookmark":
              return (
                <div key={idx} className={pageTit.item}>
                  <Typography variant="h2" color="grey.900">
                    {title.menu}
                  </Typography>
                  <ToggleButton
                    color="standard"
                    value="check"
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <BookmarkIcon />
                  </ToggleButton>
                </div>
              );
              break;
            case "current":
              return (
                <div key={idx}>
                  <Typography variant="h2" color="grey.900">
                    {title.menu}
                  </Typography>
                </div>
              );
              break;
            default:
              return (
                <Link to={title.path} key={idx}>
                  <Typography variant="h3" color="grey.600">
                    {title.menu}
                  </Typography>
                </Link>
              );
              break;
          }
        })}
      </Breadcrumbs>
      {children}
    </PageTitleStyled.Wrap>
  );
};
