import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const ButtonCustom = styled("span")(
  ({ theme }) => `
      background-color: ${theme.palette.grey[700]};
      padding: ${theme.spacing(3)};
      font-size: ${theme.typography.bt};
      border-radius: ${theme.shape.borderRadius};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-height: ${theme.spacing(3)};
      
      &.MuiLabel {
        &-primary {
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrastText}
        }
        
        &-secondary {
          background-color: ${theme.palette.secondary.main};
          color: ${theme.palette.secondary.contrastText}
        }
        
        &-success {
          background-color: ${theme.palette.success.main};
          color: ${theme.palette.success.contrastText}
        }
        
        &-warning {
          background-color: ${theme.palette.warning.main};
          color: ${theme.palette.warning.contrastText}
        }
              
        &-error {
          background-color: ${theme.palette.error.main};
          color: ${theme.palette.error.contrastText}
        }
        
        &-info {
          background-color: ${theme.palette.info.main};
          color: ${theme.palette.info.contrastText}
        }
      }
`
);

export const Btn = ({
  className = "",
  color = "secondary",
  children,
  ...rest
}) => {
  return (
    <ButtonCustom className={"MuiLabel-" + color} {...rest}>
      {children}
    </ButtonCustom>
  );
};

Btn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "warning",
    "success",
    "info",
  ]),
};
