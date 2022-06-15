import React from "react";
import { styled, makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { ReactComponent as IconHome } from "../../../assets/images/icons/home.svg";
import { ReactComponent as IconClose } from "../../../assets/images/icons/close.svg";
import { ReactComponent as IconLockClosed } from "../../../assets/images/icons/lock-closed.svg";
import { ReactComponent as IconOption } from "../../../assets/images/icons/options.svg";
import { ReactComponent as IconTime } from "../../../assets/images/icons/time.svg";
const mdiStyle = makeStyles((theme) => ({
  wrap: {
    padding: "15px 50px 0",
    width: "calc(100vw - 65px)",
    height: "57px",
    display: "flex",
    boxSizing: "border-box",
    borderBottom: `1px solid ${theme.palette.border[700]}`,
  },
  list: {
    display: "flex",
    flex: 1,
    gap: "8px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: "11px 12px",
    minWidth: "42px",
    height: "42px",
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.border[700]}`,
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
    "&.is-active": {
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
  },
  itemActive: {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween",
    padding: "11px 12px",
    minWidth: "42px",
    height: "42px",
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.border[700]}`,
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
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  button: {
    border: "none",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
  },
}));
const Mdi = ({ tabData }) => {
  const mdi = mdiStyle();
  return (
    <div className={mdi.wrap}>
      <ul className={mdi.list}>
        {tabData.map((tab, idx) => {
          switch (tab.type) {
            case "home":
              return (
                <li key={idx} className={mdi.item}>
                  <button className={mdi.button}>
                    <IconHome />
                  </button>
                </li>
              );
            default:
              return (
                <li
                  key={idx}
                  className={tab.active === true ? mdi.itemActive : mdi.item}
                >
                  <div className={mdi.menu}>
                    <button className={mdi.button}>
                      <IconLockClosed />
                    </button>
                    <Typography variant="bt">{tab.label}</Typography>
                  </div>
                  <button className={mdi.button}>
                    <IconClose />
                  </button>
                </li>
              );
          }
        })}
      </ul>
      <div className={mdi.option}>
        <Button color="function" variant="contained" startIcon={<IconTime />}>
          최근 접속
        </Button>
        <div className={mdi.item}>
          <button className={mdi.button}>
            <IconOption />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mdi;
