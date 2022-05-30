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
} from "@mui/material";
import { SubTitle } from "../components/Title";
import { Section } from "../components/Section";
import SelectModal from "../components/SelectModal";
import { ReactComponent as IconChevronDown } from "../assets/images/icons/chevron-down.svg";

const TitleToggle = {
  title: "비고(내부관리용)",
  desc: "",
  toggle: false,
  tooltip: false,
};

const TextArea = (props) => {
  const { line, focus, type } = { ...props };
  const [noteState, toggleNote] = React.useState({
    open: false,
    line: line,
  });
  const toggle = () => {
    toggleNote({
      open: !noteState.open,
      line: noteState.open ? line : 5,
    });
  };
  const setStyle = {
    transform: `scaleY(${noteState.open ? -1 : 1})`,
  };
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        placeholder="내용을 입력해주세요"
        multiline
        rows={noteState.line}
        focused={focus}
      />
      <Grid container alignItems="baseline">
        <Grid item xs={6}>
          <Typography variant="b2">2022.12.22 14:09:52 홍길동</Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          {type === "main" && (
            <>
              <SelectModal />
              <Button color="primary" variant="outlined">
                작성완료
              </Button>
            </>
          )}
          {type === "list" && (
            <IconButton color="primary" variant="outlined" onClick={toggle}>
              <IconChevronDown style={setStyle} />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};

const NoteManage = () => {
  return (
    <>
      <Section>
        <SubTitle titleData={TitleToggle} />
        <Divider type="item15" />
        <Stack direction="column" spacing={10} justifyContent="space-between">
          <TextArea line={5} type="main" />
          <TextArea line={1} type="list" />
          <IconButton
            color="sub"
            variant="contained"
            size="small"
            endIcon={<IconChevronDown />}
          >
            더보기
          </IconButton>
        </Stack>
      </Section>
    </>
  );
};

export default NoteManage;
