import { ReactComponent as IconBookmark } from "../images/icons/bookmark.svg";
import { ReactComponent as IconChevron } from "../images/icons/chevron-forward.svg";
import { ReactComponent as IconChevronDown } from "../images/icons/chevron-down.svg";
import { ReactComponent as IconInfo } from "../images/icons/information-circle.svg";
import { ReactComponent as IconExcel } from "../images/icons/excel.svg";
import { ReactComponent as IconOption } from "../images/icons/options.svg";

const BookmarkIcon = () => <IconBookmark className="icon" />;
const ChevronForwardIcon = () => <IconChevron className="icon" />;
const ChevronDownIcon = () => <IconChevronDown className="icon" />;
const InfoIcon = () => <IconInfo className="icon" />;
const ExcelIcon = () => <IconExcel className="icon" />;
const OptionIcon = () => <IconOption className="icon" />;

export {
  BookmarkIcon,
  ChevronForwardIcon,
  ChevronDownIcon,
  InfoIcon,
  ExcelIcon,
  OptionIcon,
};
