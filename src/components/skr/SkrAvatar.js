import React from "react";
import { Avatar } from "@mui/material";
import { styled } from "@mui/styles";

/**
 * @typedef {import('@mui/material').AvatarProps} AvatarProps
 */

/**
 * @type { React.FC<AvatarProps> }
 */

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  "&.MuiAvatar-root": {
    width: "24px",
    height: "24px",
    borderRadius: 2,
    fontSize: "0.75rem",
    backgroundColor: `${theme.palette.primary.main}`,
  },
}));

const SkrAvatar = ({
  alt,
  imgProps,
  sizes,
  src,
  srcSet,
  sx,
  variant,
  children,
}) => {
  return (
    <AvatarStyled
      alt={alt}
      imgProps={imgProps}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
      sx={sx}
      variant={variant}
    >
      {children}
    </AvatarStyled>
  );
};

export default SkrAvatar;
