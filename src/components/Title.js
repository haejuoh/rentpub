import React from "react";
import PropTypes from "prop-types";
import { styled, makeStyles } from "@mui/styles";
import { theme } from "../assets/style/customTheme";
import { Box, Typography, Breadcrumbs, IconButton, ToggleButton, ButtonGroup, Stack } from "@mui/material";
import { ReactComponent as IconBookmark } from "../assets/images/icons/bookmark.svg";
import { ReactComponent as IconChevron } from "../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronDown } from "../assets/images/icons/chevron-down.svg";
import { ReactComponent as IconInfo } from "../assets/images/icons/information-circle.svg";
import { Link } from "react-router-dom";
const PageTitleStyle = makeStyles((theme) => ({
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
  },
}));
const SubTitleStyle = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "&:before": {
      content: "''",
      display: "inline-block",
      width: "6px",
      height: "6px",
      clear: "both",
      backgroundColor: `${theme.palette.primary.bright}`,
      borderRadius: 1,
    },
  },
  desc: {
    color: `${theme.palette.grey[600]}`,
  },
  toggle: {
    transform: "scaleY(-1)",
  },
}));
const TableTitleStyle = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "&:before": {
      content: "''",
      display: "inline-block",
      width: "6px",
      height: "6px",
      clear: "both",
      backgroundColor: `${theme.palette.primary.bright}`,
      borderRadius: 1,
    },
  },
  desc: {
    color: `${theme.palette.grey[600]}`,
  },
}));
export const PageTitle = ({ titleData, children, ...rest }) => {
  const pageTit = PageTitleStyle();
  const [selected, setSelected] = React.useState(false);
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
                  <ToggleButton
                    color="standard"
                    value="check"
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    <IconBookmark />
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
    </div>
  );
};

export const SubTitle = ({ titleData, children, ...rest }) => {
  const subTit = SubTitleStyle();
  const [selected, setSelected] = React.useState(false);

  let Desc;
  let ButtonOption;

  if (titleData.desc.isShow) {
    Desc = (
      <Typography variant="b1" className={subTit.desc}>
        {titleData.desc.content}
      </Typography>
    );
  }
  if (titleData.toggle && !titleData.tooltip) {
    ButtonOption = (
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <IconChevronDown className={!selected ? null : subTit.toggle} />
      </ToggleButton>
    );
  } else if (!titleData.toggle && titleData.tooltip) {
    ButtonOption = (
      <IconButton color="primary" variant="outlined">
        <IconInfo />
      </IconButton>
    );
  } else if (titleData.toggle && titleData.tooltip) {
    ButtonOption = (
      <ButtonGroup variant="outlined" size="small">
        <IconButton color="sub">
          <IconInfo />
        </IconButton>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <IconChevronDown className={!selected ? null : subTit.toggle} />
        </ToggleButton>
      </ButtonGroup>
    );
  }

  return (
    <div className={subTit.wrap}>
      <div className={subTit.title}>
        <Typography variant="h4">{titleData.title}</Typography>
        {Desc}
      </div>
      <Stack direction="row" spacing={5}>
        {children}
        {ButtonOption}
      </Stack>
    </div>
  );
};
export const TableTitle = ({ titleData, children, ...rest }) => {
  const tableTit = TableTitleStyle();
  let Desc;
  if (titleData.desc.isShow) {
    Desc = (
      <Typography variant="b1" className={tableTit.desc}>
        {titleData.desc.content}
        <span>건</span>
      </Typography>
    );
  }
  return (
    <div className={tableTit.wrap}>
      <div className={tableTit.title}>
        <Typography variant="h4">{titleData.title}</Typography>
        {Desc}
      </div>
      <Stack direction="row" spacing={5}>
        {children}
      </Stack>
    </div>
  );
};

//
PageTitle.propTypes = {
  children: PropTypes.node,
  titleData: PropTypes.array,
};
SubTitle.propTypes = {
  children: PropTypes.node,
  titleData: PropTypes.object,
};
TableTitle.propTypes = {
  children: PropTypes.node,
  titleData: PropTypes.object,
};
