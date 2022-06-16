import React from "react";
import { styled } from "@mui/styles";
import {
  HomeIcon,
  CloseIcon,
  LockClosedIcon,
  OptionIcon,
  TimeIcon,
} from "../../../assets/style/icons";
import SkrTypography from "../../skr/SkrTypography";
import SkrButton from "../../skr/SkrButton";

const MdiWrap = styled("div")((theme) => ({
  padding: "15px 50px 0",
  width: "calc(100vw - 65px)",
  height: "57px",
  display: "flex",
  boxSizing: "border-box",
  borderBottom: `1px solid ${theme.borderColor}`,
}));
const MdiList = styled("ul")((theme) => ({
  display: "flex",
  flex: 1,
  gap: "8px",
}));
const MdiItem = styled("li")(({ theme, active }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "spaceBetween",
  padding: "11px 12px",
  minWidth: "42px",
  height: "42px",
  boxSizing: "border-box",
  border: `1px solid ${theme.borderColor}`,
  borderBottom: "none",
  borderRadius: "5px 5px 0 0",
  gap: "20px ",
  color: `${theme.palette.grey[400]}`,
  cursor: "pointer",
  "& $menu": {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  "&:hover": {
    backgroundColor: `${theme.palette.background[700]}`,
    color: `${theme.palette.grey[900]}`,
    "& $menu": {
      "& $button": {
        "& svg": {
          "& path": {
            fill: `${theme.palette.grey[900]}`,
          },
        },
      },
    },
  },
}));

const MdiItemActive = styled("li")((theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "spaceBetween",
  padding: "11px 12px",
  minWidth: "42px",
  height: "42px",
  boxSizing: "border-box",
  border: `1px solid ${theme.borderColor}`,
  borderBottom: "none",
  borderRadius: "5px 5px 0 0",
  gap: "20px ",
  cursor: "pointer",
  backgroundColor: `${theme.palette.background[700]}`,
  color: `${theme.palette.grey[900]}`,
  "& $menu": {
    "& $button": {
      "& svg": {
        "& path": {
          fill: `${theme.palette.grey[900]}`,
        },
      },
    },
  },
}));
const MdiMenu = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));
const MdiOption = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
const MdiButton = styled("button")((theme) => ({
  border: "none",
  width: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  backgroundColor: "transparent",
  cursor: "pointer",
}));
const Mdi = ({ tabData }) => {
  return (
    <MdiWrap>
      <MdiList>
        {tabData.map((tab, idx) => {
          switch (tab.type) {
            case "home":
              return (
                <MdiItem>
                  <MdiButton>
                    <HomeIcon />
                  </MdiButton>
                </MdiItem>
              );
            default:
              return (
                <MdiItem
                  key={idx}
                  // className={tab.active === true ? mdi.itemActive : mdi.item}
                >
                  <MdiMenu>
                    <MdiButton>
                      <LockClosedIcon />
                    </MdiButton>
                    <SkrTypography variant="bt">{tab.label}</SkrTypography>
                  </MdiMenu>
                  <MdiButton>
                    <CloseIcon />
                  </MdiButton>
                </MdiItem>
              );
          }
        })}
      </MdiList>
      <MdiOption>
        <SkrButton
          color="function"
          variant="contained"
          startIcon={<TimeIcon />}
        >
          최근 접속
        </SkrButton>
        <MdiItem>
          <MdiButton>
            <OptionIcon />
          </MdiButton>
        </MdiItem>
      </MdiOption>
    </MdiWrap>
  );
};

export default Mdi;
