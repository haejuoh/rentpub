import React from "react";
import { styled, makeStyles } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Box, Typography, Breadcrumbs, IconButton } from "@mui/material";
import { ReactComponent as IconBookmark } from "../assets/images/icons/bookmark.svg";
import { ReactComponent as IconChevron } from "../assets/images/icons/chevron-forward.svg";
import { Link } from "react-router-dom";
const TitleStyle = makeStyles((theme) => ({
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
export const PageTitle = ({ titleData }) => {
  const menu = TitleStyle();
  return (
    <>
      <Breadcrumbs separator={<IconChevron />} aria-label="breadcrumb">
        {titleData.map((title, idx) => {
          switch (title.type) {
            case "bookmark":
              return (
                <div key={idx} className={menu.item}>
                  <Typography variant="h2" color="grey.900">
                    {title.menu}
                  </Typography>
                  <button className={title.active === true ? menu.active : ""}>
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
    </>
  );
};
