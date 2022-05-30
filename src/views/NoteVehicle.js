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
import { ReactComponent as IconChevronDown } from "../assets/images/icons/chevron-down.svg";

const TitleToggle = {
  title: "비고(차량준비용)",
  desc: "",
  toggle: false,
  tooltip: false,
};

const TextArea = (props) => {
  const { line, focus, readOnly, type, children } = { ...props };
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
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        placeholder="내용을 입력해주세요"
        defaultValue={children}
        multiline
        rows={noteState.line}
        InputProps={{
          readOnly: readOnly,
        }}
      />
      <Grid container alignItems="baseline">
        <Grid item xs={12} textAlign="right">
          <Typography variant="b2">2022.12.22 14:09:52 홍길동</Typography>
          {type === "main" && (
            <Button color="primary" variant="outlined">
              작성완료
            </Button>
          )}
          {type === "list" && (
            <IconButton color="primary" variant="outlined" onClick={toggle}>
              <IconChevronDown
                style={{
                  transform: `scaleY(${noteState.open ? -1 : 1})`,
                }}
              />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};

const NoteVehicle = () => {
  return (
    <>
      <Section>
        <SubTitle titleData={TitleToggle} />
        <Divider type="item15" />
        <Stack direction="column" spacing={10} justifyContent="space-between">
          <TextArea line={5} type="main" />
          <TextArea line={1} readOnly type="list">
            안녕하세요. SK렌터카입니다.
          </TextArea>
          <TextArea line={1} readOnly type="list"></TextArea>
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

export default NoteVehicle;
