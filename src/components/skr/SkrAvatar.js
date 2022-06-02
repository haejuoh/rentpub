import React from "react";
import { Avatar } from "@mui/material";

/**
 * @typedef {import('@mui/material').AvatarProps} AvatarProps
 */

/**
 * @type { React.FC<AvatarProps> }
 */

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
    <>
      <Avatar
        alt={alt}
        imgProps={imgProps}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
        sx={sx}
        variant={variant}
      >
        {children}
      </Avatar>
    </>
  );
};

export default SkrAvatar;
