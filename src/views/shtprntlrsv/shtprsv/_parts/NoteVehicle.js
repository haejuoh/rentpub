import React, { Fragment } from "react";
import { styled, makeStyles } from "@mui/styles";
import {
  Grid,
  Stack,
  Button,
  Divider,
  TextField,
  Typography,
  IconButton,
  TextareaAutosize,
  Box,
} from "@mui/material";
import { SubTitle } from "../../../../components/Title";
import { Section } from "../../../../components/Section";
import { TextArea, TextAreaList } from "./NoteManage";
import { ReactComponent as IconChevronDown } from "../../../../assets/images/icons/chevron-down.svg";

const TitleToggle = {
  title: "비고(차량준비용)",
  desc: "",
  toggle: false,
  tooltip: false,
};

const NoteManage = () => {
  return (
    <>
      <Section>
        <SubTitle titleData={TitleToggle} />
        <Divider variants="item15" />
        <Stack direction="column" spacing={10} justifyContent="space-between">
          <TextArea line={6} />
          <TextAreaList line={1} />
          <TextAreaList line={1} />
          <Button
            color="sub"
            variant="contained"
            size="small"
            endIcon={<IconChevronDown />}
          >
            더보기
          </Button>
        </Stack>
      </Section>
    </>
  );
};

export default NoteManage;
