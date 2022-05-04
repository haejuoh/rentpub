import React from "react";
import PropTypes from "prop-types";
import { styled, makeStyles } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Box, Typography, Breadcrumbs, IconButton } from "@mui/material";
import { ReactComponent as IconBookmark } from "../assets/images/icons/bookmark.svg";
import { ReactComponent as IconChevron } from "../assets/images/icons/chevron-forward.svg";
import { Link } from "react-router-dom";
const TitleStyle = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "16px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "& button": {
      border: "none",
      width: "20px",
      height: "20px",
      padding: 1,
      backgroundColor: `${theme.palette.common.white}`,
      cursor: "pointer",
    },
  },

  active: {
    "& svg": {
      "& path": {
        fill: `${theme.palette.primary.main}`,
      },
    },
  },
}));
export const PageTitle = ({ titleData, children, ...rest }) => {
  const pageTit = TitleStyle();
  return (
    <div className={pageTit.wrap}>
      <Breadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
        {titleData.map((title, idx) => {
          switch (title.type) {
            case "bookmark":
              return (
                <div key={idx} className={pageTit.item}>
                  <Typography variant="h2" color="grey.900">
                    {title.menu}
                  </Typography>
                  <button
                    className={title.active === true ? pageTit.active : ""}
                  >
                    <IconBookmark />
                  </button>
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
    </div>
  );
};
PageTitle.propTypes = {
  children: PropTypes.node,
  titleData: PropTypes.array,
};
