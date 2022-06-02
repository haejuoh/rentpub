import React from "react";
// import { styled, makeStyles } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Stack, ButtonGroup } from "@mui/material";
import { ReactComponent as IconPencil } from "../assets/images/icons/pencil.svg";
import { ReactComponent as IconExcel } from "../assets/images/icons/excel.svg";

import { CodeBox, FlexBox } from "../assets/style/guideStyle";

import SkrGrid from "../components/skr/SkrGrid";
import SkrTypography from "../components/skr/SkrTypography";
import SkrButton from "../components/skr/SkrButton";
import SkrButtonGroup from "../components/skr/SkrButtonGroup";

export const BtnSize = () => {
  return (
    <>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <Stack spacing={3}>
            <div>
              <SkrTypography variant="h4" pb={1}>
                Small
              </SkrTypography>
              <SkrButton color="primary" size="small" variant="contained">
                SkrButton
              </SkrButton>
            </div>
            <div>
              <SkrTypography variant="h4" pb={1}>
                Medium (Default)
              </SkrTypography>
              <SkrButton color="primary" variant="contained">
                SkrButton
              </SkrButton>
            </div>
            <div>
              <SkrTypography variant="h4" pb={1}>
                Large
              </SkrTypography>
              <SkrButton color="primary" size="large" variant="contained">
                SkrButton
              </SkrButton>
            </div>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// small
<SkrButton color="primary" variant="contained" size="small">SkrButton</SkrButton>
// medium
// default porperty로 size 생략해도 medium 적용됨
<SkrButton color="primary" variant="contained" size="medium">SkrButton</SkrButton>
<SkrButton color="primary" variant="contained">SkrButton</SkrButton>
//large
<SkrButton color="primary" variant="contained" size="large">SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const BtnIcon = () => {
  return (
    <>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Only Icon
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="primary">
              <IconPencil />
            </IconButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`<IconButton color="primary"><IconPencil /></IconButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            SkrButton With endIcon
          </SkrTypography>
          <SkrButton
            color="primary"
            variant="contained"
            endIcon={<IconPencil />}
          >
            SkrButton
          </SkrButton>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`<SkrButton color="primary" variant="contained" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const BtnVariation = () => {
  return (
    <>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Primary
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="primary" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="primary">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="primary" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="primary" size="small" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="primary"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="primary" size="small" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="primary"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="primary" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="primary"
              variant="contained"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="primary" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="primary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="primary" size="large" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="primary"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="primary" size="large" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              size="large"
              color="primary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// primary
<IconButton color="primary" size="small"><IconPencil /></IconButton>
<IconButton color="primary" variant="outlined" size="small"><IconPencil /></IconButton>
<SkrButton color="primary" variant="contained" size="small">SkrButton</SkrButton>
<SkrButton color="primary" variant="outlined" size="small">SkrButton</SkrButton>

// primary , icon
<SkrButton color="primary" variant="contained" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>
<SkrButton color="primary" variant="outlined" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Default
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="default" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="default">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="default" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="default" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="default" size="small" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="default"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="default" size="small" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="default"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="default" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="default"
              variant="contained"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="default" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="default"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="default" size="large" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="default"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="default" size="large" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              size="large"
              color="default"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// default
<IconButton color="default" size="small"><IconPencil /></IconButton>
<IconButton color="default" variant="outlined" size="small"><IconPencil /></IconButton>
<SkrButton color="default" variant="contained" size="small">SkrButton</SkrButton>
<SkrButton color="default" variant="outlined" size="small">SkrButton</SkrButton>

// default , icon
<SkrButton color="default" variant="contained" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>
<SkrButton color="default" variant="outlined" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Sub
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="sub" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="sub">
              <IconPencil />
            </IconButton>
            <IconButton color="sub" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="sub" size="small" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="sub"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="sub" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton color="sub" variant="contained" endIcon={<IconPencil />}>
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="sub" size="large" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="sub"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// sub
<IconButton color="sub" size="small"><IconPencil /></IconButton>
<SkrButton color="sub" variant="contained" size="small">SkrButton</SkrButton>

// sub , icon
<SkrButton color="sub" variant="contained" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Secondary
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="secondary" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="secondary" size="small" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="secondary"
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="secondary" size="small" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="secondary"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="secondary" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="secondary"
              variant="contained"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="secondary" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="secondary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="secondary" size="large" variant="contained">
              SkrButton
            </SkrButton>
            <SkrButton
              color="secondary"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
            <SkrButton color="secondary" size="large" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              size="large"
              color="secondary"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// secondary
<IconButton color="secondary" size="small"><IconPencil /></IconButton>
<IconButton color="secondary" variant="outlined" size="small"><IconPencil /></IconButton>
<SkrButton color="secondary" variant="contained" size="small">SkrButton</SkrButton>
<SkrButton color="secondary" variant="outlined" size="small">SkrButton</SkrButton>

// secondary , icon
<SkrButton color="secondary" variant="contained" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>
<SkrButton color="secondary" variant="outlined" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Function
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="function" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="function" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="function">
              <IconPencil />
            </IconButton>
            <IconButton color="function" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="function" size="large">
              <IconPencil />
            </IconButton>
            <IconButton color="function" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="function" size="small" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="function"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="function" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="function"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="function" size="large" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              size="large"
              color="function"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// function
<IconButton color="function" size="small"><IconPencil /></IconButton>
<IconButton color="function" variant="outlined" size="small"><IconPencil /></IconButton>
<SkrButton color="function" variant="outlined" size="small">SkrButton</SkrButton>

// function , icon
<SkrButton color="function" variant="outlined" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Excel
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <SkrButton
              color="excel"
              size="small"
              variant="outlined"
              endIcon={<IconExcel />}
            >
              SkrButton
            </SkrButton>

            <SkrButton color="excel" variant="outlined" endIcon={<IconExcel />}>
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// excel
<SkrButton color="excel" variant="outlined" />
// excel , icon
<SkrButton color="excel" variant="outlined" size="small" endIcon={<IconExcel />}>SkrButton</SkrButton>
<SkrButton color="excel" variant="outlined" endIcon={<IconExcel />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Delete
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="delete" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="delete" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="delete" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="delete" size="small" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="delete"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="delete" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="delete"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="delete" size="large" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              size="large"
              color="delete"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// delete
<IconButton color="delete" variant="outlined" size="small"><IconPencil /></IconButton>
<SkrButton color="delete" variant="outlined" size="small">SkrButton</SkrButton>

// delete , icon
<SkrButton color="delete" variant="outlined" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            cancel
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="cancel" variant="outlined" size="small">
              <IconPencil />
            </IconButton>
            <IconButton color="cancel" variant="outlined">
              <IconPencil />
            </IconButton>
            <IconButton color="cancel" variant="outlined" size="large">
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="cancel" size="small" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="cancel"
              variant="outlined"
              size="small"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="cancel" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              color="cancel"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="cancel" size="large" variant="outlined">
              SkrButton
            </SkrButton>
            <SkrButton
              size="large"
              color="cancel"
              variant="outlined"
              endIcon={<IconPencil />}
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// cancel
<IconButton color="cancel" variant="outlined" size="small"><IconPencil /></IconButton>
<SkrButton color="cancel" variant="outlined" size="small">SkrButton</SkrButton>

// cancel , icon
<SkrButton color="cancel" variant="outlined" size="small" endIcon={<IconPencil />}>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Modal
          </SkrTypography>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton color="modal" size="small">
              SkrButton
            </SkrButton>
            <SkrButton color="modal">SkrButton</SkrButton>
            <SkrButton color="modal" size="large">
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// modal
<SkrButton color="modal" size="small">SkrButton</SkrButton>
<SkrButton color="modal">SkrButton</SkrButton>
<SkrButton color="modal" size="large">SkrButton</SkrButton>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const BtnDisabled = () => {
  return (
    <>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Disabled
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <IconButton color="primary" size="small" disabled>
              <IconPencil />
            </IconButton>
            <IconButton color="secondary" disabled>
              <IconPencil />
            </IconButton>
            <IconButton color="function" size="large" disabled>
              <IconPencil />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton size="small" variant="contained" disabled>
              SkrButton
            </SkrButton>
            <SkrButton
              variant="contained"
              size="small"
              endIcon={<IconPencil />}
              disabled
            >
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton variant="outlined" disabled>
              SkrButton
            </SkrButton>
            <SkrButton variant="outlined" endIcon={<IconPencil />} disabled>
              SkrButton
            </SkrButton>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButton
              color="primary"
              size="large"
              variant="contained"
              disabled
            >
              SkrButton
            </SkrButton>
            <SkrButton
              color="sub"
              variant="contained"
              size="large"
              endIcon={<IconPencil />}
              disabled
            >
              SkrButton
            </SkrButton>
          </Stack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// disabled
<IconButton color="primary" size="small" disabled><IconPencil /></IconButton>
<SkrButton color="primary" variant="contained" size="small" disabled>SkrButton</SkrButton>

// disabled , icon
<SkrButton color="primary" variant="contained" size="small" endIcon={<IconPencil />} disabled>SkrButton</SkrButton>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
const buttons = [
  <SkrButton key="one">SkrButton</SkrButton>,
  <SkrButton key="two">SkrButton</SkrButton>,
];

export const GroupBtn = () => {
  return (
    <>
      <SkrGrid container spacing={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            Stack Spacing
          </SkrTypography>
          <Box mt={10}>
            <Stack direction="row" spacing={5}>
              <SkrButton color="primary" variant="contained" size="small">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="small">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="small">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="small">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="small">
                SkrButton
              </SkrButton>
            </Stack>
          </Box>
          <Box mt={20}>
            <Stack direction="row" spacing={8}>
              <SkrButton color="primary" variant="contained">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained">
                SkrButton
              </SkrButton>
            </Stack>
          </Box>
          <Box mt={20}>
            <Stack direction="row" spacing={10}>
              <SkrButton color="primary" variant="contained" size="large">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="large">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="large">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="large">
                SkrButton
              </SkrButton>
              <SkrButton color="primary" variant="contained" size="large">
                SkrButton
              </SkrButton>
            </Stack>
          </Box>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// small _ spacing 5px
<Stack direction="row" spacing={5}>
  <SkrButton color="primary" variant="contained" size="small">SkrButton</SkrButton>
</Stack>

// medium _ spacing 8px
<Stack direction="row" spacing={8}>
  <SkrButton color="primary" variant="contained">SkrButton</SkrButton>
</Stack>

// large _ spacing 10px
<Stack direction="row" spacing={10}>
  <SkrButton color="primary" variant="contained" size="large">SkrButton</SkrButton>
</Stack>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
      <SkrGrid container spacing={5} mt={5}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h4" pb={1}>
            SkrButton Group
          </SkrTypography>
          <Stack direction="row" spacing={5}>
            <SkrButtonGroup variant="outlined" color="primary" size="small">
              {buttons}
            </SkrButtonGroup>
            <SkrButtonGroup
              variant="outlined"
              color="primary"
              size="small"
              disableElevation
              disabled
            >
              {buttons}
            </SkrButtonGroup>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButtonGroup variant="outlined" color="primary">
              {buttons}
            </SkrButtonGroup>
            <SkrButtonGroup
              variant="outlined"
              color="primary"
              disableElevation
              disabled
            >
              {buttons}
            </SkrButtonGroup>
          </Stack>
          <Stack direction="row" spacing={5} mt={5}>
            <SkrButtonGroup variant="outlined" color="primary" size="large">
              {buttons}
            </SkrButtonGroup>
            <SkrButtonGroup
              variant="outlined"
              color="primary"
              size="large"
              disableElevation
              disabled
            >
              {buttons}
            </SkrButtonGroup>
          </Stack>

          {/* <SkrButtonGroup variant="outlined" color="default">
            {buttons}
          </SkrButtonGroup>
          <SkrButtonGroup variant="outlined" color="secondary">
            {buttons}
          </SkrButtonGroup>
          <SkrButtonGroup variant="outlined" color="function">
            {buttons}
          </SkrButtonGroup>
          <SkrButtonGroup variant="outlined" color="delete">
            {buttons}
          </SkrButtonGroup>
          <SkrButtonGroup variant="outlined" color="cancel">
            {buttons}
          </SkrButtonGroup> */}
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// default
<SkrButtonGroup variant="outlined" size="small">
  <SkrButton>SkrButton</SkrButton>
  <SkrButton>SkrButton</SkrButton>
</SkrButtonGroup>
<SkrButtonGroup color="primary" variant="outlined" size="small">
  input SkrButton components
</SkrButtonGroup>

// disabled (disabled 활성시 disableElevation, disabled porperty)
<SkrButtonGroup color="primary" variant="outlined" size="small" disableElevation disabled>
  input SkrButton components
</SkrButtonGroup>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
