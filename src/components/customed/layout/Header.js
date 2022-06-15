import React from "react";
import { Link } from "react-router-dom";
import { styled, makeStyles } from "@mui/styles";
// import { theme } from "../assets/style/customTheme";
import { Stack, IconButton, Avatar } from "@mui/material";
import { ReactComponent as IconHelp } from "../../../assets/images/icons/help.svg";
import { ReactComponent as IconSetting } from "../../../assets/images/icons/settings.svg";
const headerStyle = makeStyles((theme) => ({
  wrap: {
    // color: `${theme.palette.grey[400]}`,
    width: "100%",
    height: "50px",
    borderBottom: `1px solid ${theme.palette.border[700]}`,
  },
  inner: {
    padding: "0 20px",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    margin: 0,
  },
  utility: {
    display: "flex",
    gap: "10px",
  },
}));
const UserProfile = styled(Avatar)(({ theme }) => ({
  "&.MuiAvatar-root": {
    width: "24px",
    height: "24px",
    borderRadius: 2,
    fontSize: "0.75rem",
    backgroundColor: `${theme.palette.primary.main}`,
  },
}));

const Header = () => {
  const header = headerStyle();
  return (
    <div className={header.wrap}>
      <div className={header.inner}>
        <h1 className={header.logo}>
          <Link to="/">
            <img src="/images/logo.svg" alt="SK 렌터카 EV PARK" />
          </Link>
        </h1>
        <div className={header.utility}>
          <Stack direction="row" spacing={5}>
            <IconButton color="function" size="small">
              <IconHelp />
            </IconButton>
            <IconButton color="function" size="small">
              <IconSetting />
            </IconButton>
          </Stack>
          <UserProfile>홍길</UserProfile>
        </div>
      </div>
    </div>
  );
};

export default Header;
