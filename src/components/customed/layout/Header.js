import React from "react";
import { styled } from "@mui/styles";
import SkrLink from "../../skr/SkrLink";
import SkrStack from "../../skr/SkrStack";
import SkrIconButton from "../../skr/SkrIconButton";
import { HelpIcon, SettingIcon } from "../../../assets/style/icons";
import SkrAvatar from "../../skr/SkrAvatar";

const HeaderWrap = styled("div")(({ theme }) => ({
  width: "100%",
  height: "50px",
  borderBottom: `1px solid ${theme.palette.border[700]}`,
}));
const HeaderInner = styled("div")(({ theme }) => ({
  padding: "0 20px",
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "space-between",
}));
const HeaderUtility = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
}));
const HeaderLogo = styled("h1")(({ theme }) => ({
  margin: 0,
}));

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <HeaderLogo>
          <SkrLink to="/">
            <img src="/images/logo.svg" alt="SK 렌터카 EV PARK" />
          </SkrLink>
        </HeaderLogo>
        <HeaderUtility>
          <SkrStack direction="row" spacing={5}>
            <SkrIconButton color="function" size="small">
              <HelpIcon />
            </SkrIconButton>
            <SkrIconButton color="function" size="small">
              <SettingIcon />
            </SkrIconButton>
          </SkrStack>
          <SkrAvatar>홍길</SkrAvatar>
        </HeaderUtility>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;
