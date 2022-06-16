import React, { Fragment } from "react";
import { styled } from "@mui/styles";

const LySectionDivider = ({ children }) => {
  const LyContainer = styled("div")(() => ({
    display: "flex",
    gap: "30px",
  }));
  const GridItemSticky = styled("div")(() => ({
    width: "300px",
    flexShrink: "0",
  }));
  return (
    <>
      <LyContainer>
        {children.length === undefined ? (
          <>{children}</>
        ) : (
          <>
            {children[0]}
            <GridItemSticky>{children[1]}</GridItemSticky>
          </>
        )}
      </LyContainer>
    </>
  );
};

export default LySectionDivider;
