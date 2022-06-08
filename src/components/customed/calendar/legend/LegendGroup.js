import React from "react";
import SkrStack from "../../../skr/SkrStack";
import Legend from "./Legend";
/**
 * @typedef groupData
 * @type {array}
 * @property {object} item - an Item.
 */

/** @type {groupData} */
const LegendGroup = ({ group }) => {
  return (
    <SkrStack direction="row" spacing={20}>
      {group.map((item, idx) => {
        return <Legend label={item.label} status={item.status} key={idx} />;
      })}
    </SkrStack>
  );
};

export default LegendGroup;
