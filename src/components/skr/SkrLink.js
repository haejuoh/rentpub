import React from "react";
import { Link } from "@mui/material";

/**
 * @typedef {import('@mui/material').LinkProps} LinkProps
 */

/**
 * @type { React.FC<LinkProps> }
 */

const SkrLink = ({ color, sx, variant, children, ...rest }) => {
  return (
    <Link color={color} sx={sx} variant={variant} {...rest}>
      {children}
    </Link>
  );
};

export default SkrLink;
