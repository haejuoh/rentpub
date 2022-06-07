import React from "react";
// SkrComponents
import SkrTypography from "../../../skr/SkrTypography";
import SkrStack from "./../../../skr/SkrStack";
import SkrCollapse from "./../../../skr/SkrCollapse";
import SkrToggleButton from "./../../../skr/SkrToggleButton";
import SkrButtonGroup from "../../../skr/SkrButtonGroup";
import SkrIconButton from "../../../skr/SkrIconButton";
import SkrDivider from "./../../../skr/SkrDivider";
import SkrTooltip from "../../../skr/SkrTooltip";
// Icons
import { InfoIcon } from "../../../../assets/style/icons";
// Style
import * as TitleSubStyled from "./style";
const TitleSub = ({ titleData, buttonGroup, children }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <TitleSubStyled.Wrap>
        <TitleSubStyled.Title>
          <SkrTypography variant="h4">{titleData.title}</SkrTypography>
          {/* isDescription */}
          {titleData.desc && (
            <SkrTypography variant="b1" color="grey.600">
              {titleData.desc}
            </SkrTypography>
          )}
        </TitleSubStyled.Title>
        <SkrStack direction="row" spacing={8}>
          {/* Button Children to custom */}
          {buttonGroup}
          {/* Optional Button */}
          {/* isToggle */}
          {titleData.toggle && !titleData.tooltip && (
            <SkrToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
              checked={selected}
            >
              <TitleSubStyled.ToggleIcon />
            </SkrToggleButton>
          )}
          {/* isTooltip */}
          {!titleData.toggle && titleData.tooltip && (
            <SkrTooltip title="message">
              <SkrIconButton color="primaryOutlined">
                <InfoIcon />
              </SkrIconButton>
            </SkrTooltip>
            // <Tooltip title="message">
            //   <SkrIconButton color="primaryOutlined">
            //     <InfoIcon />
            //   </SkrIconButton>
            // </Tooltip>
          )}
          {/* all */}
          {titleData.toggle && titleData.tooltip && (
            <SkrButtonGroup variant="outlined">
              {/* <SkrIconButton color="sub">
                <InfoIcon />
              </SkrIconButton> */}
              {/* <Tooltip title="message">
                <SkrIconButton color="primaryOutlined">
                  <InfoIcon />
                </SkrIconButton>
              </Tooltip> */}
              <SkrTooltip title="message">
                <SkrIconButton color="primaryOutlined">
                  <InfoIcon />
                </SkrIconButton>
              </SkrTooltip>
              <SkrToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
                checked={selected}
              >
                <TitleSubStyled.ToggleIcon />
              </SkrToggleButton>
            </SkrButtonGroup>
          )}
        </SkrStack>
      </TitleSubStyled.Wrap>
      {titleData.toggle && (
        <SkrCollapse in={selected}>
          <SkrDivider variant="section15" />
          {/* Collapse Children to custom */}
          {children}
        </SkrCollapse>
      )}
    </>
  );
};

export default TitleSub;
