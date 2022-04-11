import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import { ReactComponent as IconChevron } from "../assets/images/icons/chevron-forward.svg";
import { ReactComponent as IconDownload } from "../assets/images/icons/download.svg";
import { ReactComponent as IconBookmark } from "../assets/images/icons/bookmark.svg";
import { ReactComponent as IconDocAttach } from "../assets/images/icons/document-attach.svg";
import { ReactComponent as IconDocText } from "../assets/images/icons/document-text.svg";

const ListData = [
  {
    type: "bookmark",
    title: "즐겨찾기 메뉴 1",
  },
  {
    type: "docAttach",
    title: "다운로드 양식 1",
  },
  {
    type: "docText",
    title: "다운로드 메뉴얼 1",
  },
];

const MuiList = () => {
  return (
    <>
      <List>
        {ListData.map((list, idx) => {
          switch (list.type) {
            case "bookmark":
              return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="chevron">
                      <IconChevron />
                    </IconButton>
                  }
                  key={idx}
                >
                  <ListItemIcon>
                    <IconBookmark />
                  </ListItemIcon>
                  <ListItemText primary={list.title} />
                </ListItem>
              );
            case "docAttach":
              return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="chevron">
                      <IconDownload />
                    </IconButton>
                  }
                  key={idx}
                >
                  <ListItemIcon>
                    <IconDocAttach />
                  </ListItemIcon>

                  <ListItemText primary={list.title} />
                </ListItem>
              );
            case "docText":
              return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="chevron">
                      <IconDownload />
                    </IconButton>
                  }
                  key={idx}
                >
                  <ListItemIcon>
                    <IconDocText />
                  </ListItemIcon>

                  <ListItemText primary={list.title} />
                </ListItem>
              );
            default:
              return (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="chevron">
                      <IconChevron />
                    </IconButton>
                  }
                  key={idx}
                >
                  <ListItemIcon>
                    <IconBookmark />
                  </ListItemIcon>

                  <ListItemText primary={list.title} />
                </ListItem>
              );
          }
        })}
      </List>
    </>
  );
};

export default MuiList;
