import React from "react";
import { Fragment } from "react";

// Style
import * as RadioStyled from "./style";

const Segment = ({ segmentData }) => {
  return (
    <RadioStyled.Disabled disabled={segmentData.disabled}>
      <RadioStyled.SegmentStyle>
        {segmentData.group.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <input
                type="radio"
                name={item.name}
                value={idx}
                id={item.name + idx}
                defaultChecked={item.checked}
                disabled={segmentData.disabled}
              />
              <label htmlFor={item.name + idx}>
                <span>{item.label}</span>
              </label>
            </Fragment>
          );
        })}
      </RadioStyled.SegmentStyle>
    </RadioStyled.Disabled>
  );
};

export default Segment;
