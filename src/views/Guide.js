import React, { useState } from "react";
import { Box, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MuiTabs from "../components/MuiTab";
//guide
import Typo from "../guide/Typo";
import {
  TitlePageDefault,
  TitlePageWithButton,
} from "../guide/title/TitlePage";
import {
  TitleSubDefault,
  TitleSubToggle,
  TitleSubTooltip,
  TitleSubOption,
  TitleSubDesc,
  TitleSubToggleDesc,
  TitleSubTooltipDesc,
  TitleSubOptionDesc,
  TitleSubButton1,
  TitleSubButton2,
} from "../guide/title/TitleSub";
import TitleTableDefault from "../guide/title/TitleTable";
import {
  TitleSectionDefault,
  TitleSectionDesc,
  TitleSectionBadge,
  TitleSectionOption,
} from "../guide/title/TitleSection";
import List from "../guide/List";
import {
  BtnSize,
  BtnIcon,
  BtnVariation,
  BtnDisabled,
  GroupBtn,
} from "../guide/Btn";
import {
  InputLabelPositionTopList,
  InputLabelPositionLeftList,
  InputLabelHiddenList,
  SelectLabelPositionTopList,
  SelectLabelPositionLeftList,
  SelectLabelHiddenList,
  SelectAutoCompleteLabelHiddenList,
  SelectAutoCompleteLabelPositionTopList,
  SelectAutoCompleteLabelPositionLeftList,
  CheckboxLabelHiddenList,
  CheckboxLabelPositionRightList,
  CheckBoxGroupList,
  RadioLabelHiddenList,
  RadioLabelPositionRightList,
  RadioGroupLabelList,
  SegmentGroup,
  SwitchLabelHiddenList,
  SwitchLabelPositionLeftList,
  SwitchGroupList,
  WithFormContents,
} from "../guide/Form";
import {
  GuideTitle,
  GuideSubTitle,
  GuideKeyword,
} from "../assets/style/guideStyle";
import Badge from "./../guide/Badge";
import { TableDefault, TableAction, TableBadge } from "../guide/Table";
import { ModalSample } from "../components/Modal";
import DataGridDefault from "./../guide/dataGrid/DataGridDefault";
import DataGridActionField from "./../guide/dataGrid/DataGridActionField";
import { LegendSingleGuide, LegendGroupGuide } from "../guide/calendar/Legend";
import Legend from "./../components/customed/calendar/legend/Legend";

const Guide = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const titleToggle = {
    title: "고객정보",
    desc: {
      isShow: false,
      content: "",
    },
    toggle: true,
    tooltip: false,
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Typography variant="h1" mt={3}>
        공통 컴포넌트
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="common compoenents guide tabs"
          >
            <Tab label="Typography" value="1" />
            <Tab label="Badge" value="2" />
            <Tab label="Button" value="3" />
            <Tab label="Form" value="4" />
            <Tab label="List" value="5" />
            <Tab label="DataGrid" value="6" />
            <Tab label="Modal" value="7" />
            <Tab label="legend" value="8" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <GuideTitle>Typography</GuideTitle>
          <Typo />
          <GuideTitle mt={5}>Page Title</GuideTitle>
          <TitlePageDefault />
          <TitlePageWithButton />
          <GuideTitle mt={5}>Sub Title</GuideTitle>
          <TitleSubDefault />
          <TitleSubToggle />
          <TitleSubTooltip />
          <TitleSubOption />
          <TitleSubDesc />
          <TitleSubToggleDesc />
          <TitleSubTooltipDesc />
          <TitleSubOptionDesc />
          <TitleSubButton1 />
          <TitleSubButton2 />
          <GuideTitle mt={5}>Table Title</GuideTitle>
          <TitleTableDefault />
          <GuideTitle mt={5}>Section Title</GuideTitle>
          <TitleSectionDefault />
          <TitleSectionDesc />
          <TitleSectionBadge />
          <TitleSectionOption />
        </TabPanel>
        <TabPanel value="2">
          <Badge />
        </TabPanel>
        <TabPanel value="3">
          <GuideTitle>Button Size</GuideTitle>
          <BtnSize />
          <GuideTitle>Button Icon </GuideTitle>
          <GuideSubTitle pb={8}>
            단일 아이콘 버튼, 마크업 유의 바람
          </GuideSubTitle>
          <BtnIcon />
          <GuideTitle mt={4}>Button Variants</GuideTitle>
          <BtnVariation />
          <GuideTitle mt={4}>Button Disabled</GuideTitle>
          <GuideSubTitle pb={8}>
            disabled porperty로 제어 유의 바람
          </GuideSubTitle>
          <BtnDisabled />
          <GuideTitle>Button Group</GuideTitle>
          <GuideSubTitle pb={8}>마크업 상이 유의 바람</GuideSubTitle>
          <GroupBtn />
        </TabPanel>
        <TabPanel value="4">
          <GuideTitle>Input</GuideTitle>
          <GuideSubTitle pb={8}>Label Position : Top</GuideSubTitle>
          <InputLabelPositionTopList />
          <GuideSubTitle mt={40}>Label Position : Left</GuideSubTitle>
          <GuideKeyword pb={20}>
            styledComponents : DefaultTextField
          </GuideKeyword>
          <InputLabelPositionLeftList />
          <GuideSubTitle pb={8} mt={40}>
            Label Hidden
          </GuideSubTitle>
          <InputLabelHiddenList />
          <GuideTitle mt={40}>Select</GuideTitle>
          <GuideSubTitle pb={8}>Label Position : Top</GuideSubTitle>
          <SelectLabelPositionTopList />
          <GuideSubTitle mt={40} pb={8}>
            Label Position : Left
          </GuideSubTitle>
          <SelectLabelPositionLeftList />
          <GuideSubTitle mt={40} pb={8}>
            Label Hidden
          </GuideSubTitle>
          <SelectLabelHiddenList />
          <GuideTitle>Autocomplete</GuideTitle>
          <GuideSubTitle mt={40} pb={8}>
            Label Hidden
          </GuideSubTitle>
          <SelectAutoCompleteLabelHiddenList />
          <GuideSubTitle mt={40} pb={8}>
            Label Position Top
          </GuideSubTitle>
          <SelectAutoCompleteLabelPositionTopList />
          <GuideSubTitle mt={40} pb={8}>
            Label Position Left
          </GuideSubTitle>
          <SelectAutoCompleteLabelPositionLeftList />
          <GuideTitle mt={40}>Checkbox</GuideTitle>
          <GuideSubTitle pb={8}>Label Hidden</GuideSubTitle>
          <CheckboxLabelHiddenList />
          <GuideSubTitle mt={40} pb={8}>
            Label Position : Right
          </GuideSubTitle>
          <CheckboxLabelPositionRightList />
          <GuideSubTitle mt={40} pb={8}>
            Checkbox Group
          </GuideSubTitle>
          <CheckBoxGroupList />
          <GuideTitle mt={40}>Radio</GuideTitle>
          <GuideSubTitle pb={8}>Label Hidden</GuideSubTitle>
          <RadioLabelHiddenList />
          <GuideSubTitle mt={40} pb={8}>
            Label Position : Right
          </GuideSubTitle>
          <RadioLabelPositionRightList />
          <GuideSubTitle mt={40} pb={8}>
            Radio Group
          </GuideSubTitle>
          <RadioGroupLabelList />
          <GuideTitle mt={40}>Segment</GuideTitle>
          <SegmentGroup />
          <GuideTitle mt={40}>Switch</GuideTitle>
          <GuideSubTitle pb={8}>Label Hidden</GuideSubTitle>
          <SwitchLabelHiddenList />
          <GuideSubTitle mt={40} pb={8}>
            Label Position : Left
          </GuideSubTitle>
          <SwitchLabelPositionLeftList />
          <GuideSubTitle mt={40} pb={8}>
            Switch Group - Grid
          </GuideSubTitle>
          <SwitchGroupList />
          <GuideTitle mt={40}>WithFormContents</GuideTitle>
          <WithFormContents />
        </TabPanel>
        <TabPanel value="5">
          <List />
        </TabPanel>
        <TabPanel value="6">
          <GuideTitle>Default</GuideTitle>
          <DataGridDefault mt={2} />
          <GuideTitle>ActionField</GuideTitle>
          <DataGridActionField mt={2} />
          <TableAction mt={2} />
          <GuideTitle>BadgeField</GuideTitle>
          <TableBadge mt={2} />
        </TabPanel>
        <TabPanel value="7">
          <GuideTitle>Modal</GuideTitle>
          <ModalSample />
        </TabPanel>
        <TabPanel value="8">
          <GuideTitle mt={40}>Legend</GuideTitle>
          <LegendSingleGuide />
          <LegendGroupGuide />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Guide;
