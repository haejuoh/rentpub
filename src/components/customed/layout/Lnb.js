import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
import { theme } from "../../../assets/style/customTheme";
import SkrTypography from "../../skr/SkrTypography";
// icon
import { MenuIcon, BookmarksIcon } from "../../../assets/style/icons";

const LnbWrap = styled("div")(({ theme }) => ({
  width: "65px",
  display: "flex",
  flex: "none",
  borderRight: `1px solid ${theme.palette.border[700]}`,
  boxSizing: "border-box",
}));
const LnbMenu = styled("li")(({ theme }) => ({
  padding: "14px 18px 13px",
}));
const LnbMenuIcon = styled("li")(({ theme }) => ({
  padding: "13px 11px 12px",
}));
const LnbIcon = styled("div")(({ theme }) => ({
  width: "20px",
  height: "20px",
  marginBottom: 2,
  textAlign: "center",
}));
const LnbLink = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: `${theme.palette.grey[600]}`,
  "&:hover, &:focus": {
    color: `${theme.palette.primary.light}`,
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
  return (
    <>
      {menuData.map((menu, idx) => {
        switch (menu.type) {
          case "menu":
            return (
              <LnbMenuIcon key={idx}>
                <LnbLink to={menu.link}>
                  <LnbIcon>
                    <MenuIcon />
                  </LnbIcon>
                  <SkrTypography variant="ct">{menu.name}</SkrTypography>
                </LnbLink>
              </LnbMenuIcon>
            );
          case "bookmark":
            return (
              <LnbMenuIcon key={idx}>
                <LnbLink to={menu.link}>
                  <LnbIcon>
                    <BookmarksIcon />
                  </LnbIcon>
                  <SkrTypography variant="ct">{menu.name}</SkrTypography>
                </LnbLink>
              </LnbMenuIcon>
            );
          default:
            return (
              <LnbMenu key={idx}>
                <LnbLink to={menu.link}>
                  <SkrTypography variant="h4">{menu.name}</SkrTypography>
                </LnbLink>
              </LnbMenu>
            );
        }
      })}
    </>
  );
};

const Lnb = () => {
  return (
    <LnbWrap>
      <ul>
        <Menu menuData={menuData} />
      </ul>
    </LnbWrap>
  );
};

export default Lnb;
