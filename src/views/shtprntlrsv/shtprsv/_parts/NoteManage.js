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
import { ReactComponent as IconChevronDown } from "../../../../assets/images/icons/chevron-down.svg";

const TitleToggle = {
  title: "비고(내부관리용)",
  desc: "",
  toggle: false,
  tooltip: false,
};

const ReadArea = (props) => {
  const { children } = { ...props };
  return (
    <Typography
      variant="b1"
      style={{
        height: "120px",
        backgroundColor: "#F5FCFB",
        width: "100%",
        padding: "10px",
      }}
    >
      {children}
    </Typography>
  );
};

export const TextArea = (props) => {
  const { line, focus } = { ...props };
  return (
    <>
      <TextareaAutosize
        minRows={line}
        placeholder="내용을 입력해주세요"
        style={{
          width: "100%",
          border: "1px solid #f3f4f4",
          fontFamily: "Pretendard,sans-serif",
          padding: "9px 12px",
        }}
      />
      <Grid container alignItems="baseline">
        <Grid item xs={6}>
          <Typography variant="b2">2022.12.22 14:09:52 홍길동</Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button color="primary" variant="outlined">
            작성완료
          </Button>
        </Grid>
      </Grid>
      <Divider type="item15" />
    </>
  );
};
export const TextAreaList = (props) => {
  const { line, focus, readOnly } = { ...props };
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
      <Grid container alignItems="baseline">
        <Grid item xs={9}>
          <Typography variant="b2">안녕하세요 SK렌터카입니다.</Typography>
        </Grid>
        <Grid item xs={3} textAlign="right">
          <Typography variant="b2">2022.12.22 14:09:52 홍길동</Typography>
          <IconButton
            color="primary"
            variant="outlined"
            onClick={toggle}
            style={{ marginLeft: 15 }}
          >
            <IconChevronDown style={setStyle} />
          </IconButton>
        </Grid>
        {noteState.open && <ReadArea>안녕하세요 SK렌터카입니다.</ReadArea>}
      </Grid>
      <Divider type="item15" />
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
