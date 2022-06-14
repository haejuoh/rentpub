import React from "react";

import { LoadItemDotIcon, LoadItemCarIcon } from "../../../assets/style/icons";

// style
import * as LoadingBarStyled from "./style";

const LoadingBar = () => {
  return (
    <LoadingBarStyled.Wrap>
      <LoadingBarStyled.ItemWrap>
        <LoadingBarStyled.Item></LoadingBarStyled.Item>
        <LoadingBarStyled.Item></LoadingBarStyled.Item>
        <LoadingBarStyled.Item></LoadingBarStyled.Item>
        <LoadingBarStyled.Item></LoadingBarStyled.Item>
        <LoadingBarStyled.Item></LoadingBarStyled.Item>
      </LoadingBarStyled.ItemWrap>
      {/* <LoadItemCarIcon />
      <LoadItemDotIcon />
      <LoadItemDotIcon />
      <LoadItemDotIcon />
      <LoadItemDotIcon /> */}
    </LoadingBarStyled.Wrap>
  );
};

export default LoadingBar;
