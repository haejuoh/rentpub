import React from "react";
import { Link } from "react-router-dom";
import { styled, makeStyles } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Stack, IconButton, Avatar, Typography } from "@mui/material";
import { ReactComponent as IconHelp } from "../assets/images/icons/help.svg";
import { ReactComponent as IconMenu } from "../assets/images/icons/menu.svg";
import { ReactComponent as IconBookmarks } from "../assets/images/icons/bookmarks.svg";
const lnbStyle = makeStyles((theme) => ({
  wrap: {
    // color: `${theme.palette.grey[400]}`,
    width: "65px",
    display: "flex",
    flex: "none",
    borderRight: `1px solid ${theme.palette.border[700]}`,
    boxSizing: "border-box",
  },
  inner: {
    padding: "13px 11px 12px",
  },
  menuIcon: {
    padding: "13px 11px 12px",
  },
  menu: {
    padding: "14px 18px 13px",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: `${theme.palette.grey[600]}`,
    "&:hover, &:focus": {
      color: `${theme.palette.primary.light}`,
    },
  },
  icon: {
    textAlign: "center",
    width: "20px",
    height: "20px",
    marginBottom: 2,
  },
  utility: {
    display: "flex",
    gap: "10px",
  },
}));
const menuData = [
  {
    type: "menu",
    name: "전체메뉴",
    link: "/",
  },
  {
    type: "bookmark",
    name: "즐겨찾기",
    link: "/",
  },
  {
    type: "default",
    name: "사용자",
    link: "/user",
  },
  {
    type: "default",
    name: "직무관리",
    link: "/task",
  },
];
const Menu = ({ menuData }) => {
  const lnb = lnbStyle();
  return (
    <>
      {menuData.map((menu, idx) => {
        switch (menu.type) {
          case "menu":
            return (
              <li className={lnb.menuIcon} key={idx}>
                <Link to={menu.link} className={lnb.link}>
                  <div className={lnb.icon}>
                    <IconMenu />
                  </div>
                  <Typography variant="ct">{menu.name}</Typography>
                </Link>
              </li>
            );
          case "bookmark":
            return (
              <li className={lnb.menuIcon} key={idx}>
                <Link to={menu.link} className={lnb.link}>
                  <div className={lnb.icon}>
                    <IconBookmarks />
                  </div>
                  <Typography variant="ct">{menu.name}</Typography>
                </Link>
              </li>
            );
          default:
            return (
              <li className={lnb.menu} key={idx}>
                <Link to={menu.link} className={lnb.link}>
                  <Typography variant="h4" className={lnb.menu.default}>
                    {menu.name}
                  </Typography>
                </Link>
              </li>
            );
        }
      })}
    </>
  );
};
const Lnb = () => {
  const lnb = lnbStyle();
  return (
    <div className={lnb.wrap}>
      <ul>
        <Menu menuData={menuData} />
      </ul>
    </div>
  );
};

export default Lnb;
