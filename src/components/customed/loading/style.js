import React from "react";
import { styled } from "@mui/styles";
import LoadingDot from "../../../assets/images/icons/load-item-dot.svg";
import LoadingCar from "../../../assets/images/icons/load-item-car.svg";
import { keyframes } from "@mui/system";

const Wrap = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50% ,-50%)",
}));
const ItemWrap = styled("ul")(({ theme }) => ({
  display: "flex",
}));
const Animation = styled((theme) => ({
  animatedItem: {
    animation: `$loading 500ms ${theme.transitions.easing.easeInOut}`,
  },
  // animatedItemExiting: {
  //   animation: `$loadingExit 3000ms ${theme.transitions.easing.easeInOut}`,
  //   opacity: 0,
  //   transform: "translateY(-200%)"
  // },
  "@keyframes loading": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  // "@keyframes loadingExit": {
  //   "0%": {
  //     opacity: 1,
  //     transform: "translateY(0)"
  //   },
  //   "100%": {
  //     opacity: 0,
  //     transform: "translateY(-200%)"
  //   }
  // }
}));
const LoadingAnimation = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Item = styled("li")({
  position: "relative",
  width: "24px",
  height: "24px",
  animation: `${LoadingAnimation} 1s infinite ease`,
  // animation-delay: `${props => props.delay}`,
  "&:before": {
    position: "absolute",
    top: "0",
    left: "0",
    content: "''",
    display: "none",
    // display: "inline-block",
    width: "24px",
    height: "24px",
    background: `url(${LoadingDot}) no-repeat`,
  },
  "&:after": {
    position: "absolute",
    top: "0",
    left: "0",
    content: "''",
    // display: "none",
    display: "inline-block",
    width: "24px",
    height: "24px",
    background: `url(${LoadingCar}) no-repeat`,
  },
  "&.active": {
    "&:after": {
      display: "inline-block",
    },
  },
});

export { Wrap, ItemWrap, Item };
