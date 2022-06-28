import React from "react";

//components
import SkrChip from "../../../components/skr/SkrChip";
import SkrBox from "../../../components/skr/SkrBox";
import SkrIconButton from "../../../components/skr/SkrIconButton";
import Section from "../../../components/customed/layout/section";
import TitleSub from "../../../components/customed/title/sub/TitleSub";
import DataGrid from "../../../components/customed/datagrid";
import NoRows from "../../../components/customed/datagrid/NoRows";
import NoResults from "../../../components/customed/datagrid/NoResults";

//icons
import { OptionIcon, MoreIcon } from "../../../assets/style/icons";

const TitleDefault = {
  title: "전체 작업자 근무파트 목록",
  desc: "37건",
  toggle: false,
  tooltip: false,
};

const rows = [
  {
    id: 1,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 2,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 3,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 4,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 5,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 6,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 7,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
  {
    id: 8,
    col1: "근무구분",
    col2: "CS",
    col3: "6",
    status: "사용",
  },
];
const columns = [
  { field: "col1", headerName: "근무구분", flex: 1 },
  { field: "col2", headerName: "근무파트명", flex: 1 },
  { field: "col3", headerName: "소속인원수", flex: 1 },
  {
    field: "status",
    headerName: "사용여부",
    flex: 1,
    renderCell: (params) => {
      switch (params.value) {
        case "사용":
          return <SkrChip label={params.value} color="success" />;
          break;
        default:
          return <SkrChip label={params.value} color="cancel" />;
          break;
      }
    },
  },
  {
    field: "actions",
    type: "actions",
    width: 40,
    renderHeader: () => (
      <OptionIcon style={{ width: "18px", height: "18px" }} />
    ),
    renderCell: () => {
      return (
        <SkrIconButton disabled>
          <MoreIcon />
        </SkrIconButton>
      );
    },
    // getActions: (params) => [
    //   <SkrGridActionsCellItem
    //     icon={<OptionIcon />}
    //     label="사용함"
    //     showInMenu
    //   />,
    //   <SkrGridActionsCellItem icon={<DeleteIcon />} label="삭제" showInMenu />,
    // ],
  },
];

const List = () => {
  return (
    <Section>
      <TitleSub titleData={TitleDefault} />
      <SkrBox sx={{ height: 284 }} mt={18}>
        <DataGrid
          columnData={columns}
          rowData={rows}
          customNoRowsOverlay={() => <NoRows message="데이터 없음" />}
          customNoResultsOverlay={() => <NoResults message="결과 없음" />}
          isCheckbox={false}
        />
      </SkrBox>
    </Section>
  );
};

export default List;
