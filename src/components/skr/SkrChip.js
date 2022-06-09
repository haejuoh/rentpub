import React from "react";
import { styled } from "@mui/styles";
import { Chip } from "@mui/material";
import { theme } from "../../assets/style/customTheme";
/**
 * @typedef {import('@mui/material').ChipProps} ChipProps
 */

/**
 * @type { React.FC<ChipProps> }
 */

const ChipStyled = styled(Chip)(({ variant }) => {
  return (
    variant === "result" && {
      "&.MuiChip-root": {
        minHeight: "24px",
        padding: "2px 4px 2px 6px",
        backgroundColor: `${theme.palette.sub.dark}`,
        borderRadius: "2px",
        "& .MuiChip-label": {
          paddingLeft: "0",
          paddingRight: "5px",
          color: `${theme.palette.primary.light}`,
          fontSize: `${theme.typography.b1.fontSize}`,
          "& + svg path": {
            fill: `${theme.palette.primary.light}`,
          },
        },
      },
    }
  );
});

const SkrChip = ({
  label,
  color,
  variant,
  size,
  disabled,
  clickable,
  deleteIcon,
  onDelete,
  children,
}) => {
  return (
    <ChipStyled
      label={label}
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      clickable={clickable}
      deleteIcon={deleteIcon}
      onDelete={onDelete}
    >
      {children}
    </ChipStyled>
  );
};

export default SkrChip;
