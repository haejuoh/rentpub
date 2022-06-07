import React from "react";
//icons
import {
  ArrowUpIcon,
  ArrowDownIcon,
  FilterIcon,
  DeleteIcon,
  CheckIcon,
} from "../../../assets/style/icons";

const SortedDescendingIcon = () => <ArrowDownIcon className="icon" />;
const SortedAscendingIcon = () => <ArrowUpIcon className="icon" />;
const ColumnMenuIcon = () => <FilterIcon className="icon" />;

export { SortedDescendingIcon, SortedAscendingIcon, ColumnMenuIcon };
