import React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  InputLabel,
} from "@mui/material";
import { ReactComponent as Accessibility } from "../assets/images/icons/accessibility.svg";
import { ReactComponent as IconArrow } from "../assets/images/icons/chevron-down.svg";
import { ReactComponent as IconOption } from "../assets/images/icons/options.svg";
import { DefaultTextField, FormContents } from "../assets/style/common";
import { CodeBox, FlexBox } from "../assets/style/guideStyle";
import { SelectField, DefaultSelectField } from "../components/Select";
import Segment from "../components/Segment";
// import Placeholder from "../assets/style/Placeholder";

export const InputLabelPositionTop = () => {
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <TextField label="Label Text" placeholder="Placeholder" />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Focused
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                focused
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Required
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                required
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Read Only
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                disabled
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Error
              </Typography>
              <TextField
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Success
              </Typography>
              <TextField
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Error Disabled
              </Typography>
              <TextField
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Success Disabled
              </Typography>
              <TextField
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Unit
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Accessibility />
                    </InputAdornment>
                  ),
                }}
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Unit Disabled
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
                disabled
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon Disabled
              </Typography>
              <TextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Accessibility />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </FlexBox>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<TextField label="Label Text" placeholder="Placeholder" />

// Focused
<TextField label="Label Text" placeholder="Placeholder" defaultValue="input" focused />

// Required
<TextField label="Label Text" placeholder="Placeholder" defaultValue="Input" required />

// Read Only : porperty ?????? ??????
<TextField label="Label Text" placeholder="Placeholder" defaultValue="input" InputProps={{ readOnly: true, }} />

// Disabled
<TextField label="Label Text" placeholder="Placeholder" disabled />

// Error
<TextField error label="Label Text" defaultValue="Input" helperText="Alret Message." />
<TextField error label="Label Text" defaultValue="Input" helperText="Alret Message." disabled />

// Success
<TextField color="success" label="Label Text" defaultValue="Input" helperText="Alret Message." />
<TextField color="success" label="Label Text" defaultValue="Input" helperText="Alret Message." disabled />

// Unit
<TextField label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end">Unit</InputAdornment> ), }} />

// Icon
<TextField label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end"> <Accessibility /> </InputAdornment> ), }} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const InputLabelPositionLeft = () => {
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <DefaultTextField label="Label Text" placeholder="Placeholder" />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Focused
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                focused
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Required
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                required
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Read Only
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                disabled
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Error
              </Typography>
              <DefaultTextField
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Success
              </Typography>
              <DefaultTextField
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Error Disabled
              </Typography>
              <DefaultTextField
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Success Disabled
              </Typography>
              <DefaultTextField
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Unit
              </Typography>
              <DefaultTextField
                fullWidth
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Accessibility />
                    </InputAdornment>
                  ),
                }}
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Unit Disabled
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
                disabled
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon Disabled
              </Typography>
              <DefaultTextField
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Accessibility />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </FlexBox>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<DefaultTextField label="Label Text" placeholder="Placeholder" />

// Focused
<DefaultTextField label="Label Text" placeholder="Placeholder" defaultValue="input" focused />

// Required
<DefaultTextField label="Label Text" placeholder="Placeholder" defaultValue="Input" required />

// Read Only : porperty ?????? ??????
<DefaultTextField label="Label Text" placeholder="Placeholder" defaultValue="input" InputProps={{ readOnly: true, }} />

// Disabled
<DefaultTextField label="Label Text" placeholder="Placeholder" disabled />

// Error
<DefaultTextField error label="Label Text" defaultValue="Input" helperText="Alret Message." />

// Success
<DefaultTextField color="success" label="Label Text" defaultValue="Input" helperText="Alret Message." />

// Unit
<DefaultTextField label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end">Unit</InputAdornment> ), }} />

// Icon
<DefaultTextField label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end"> <Accessibility /> </InputAdornment> ), }} />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const InputHiddenLabel = () => {
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <TextField hiddenLabel placeholder="Placeholder" />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Focused
              </Typography>
              <TextField
                hiddenLabel
                placeholder="Placeholder"
                value="Input"
                focused
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Required
              </Typography>
              <TextField
                hiddenLabel
                placeholder="Placeholder"
                defaultValue="Input"
                required
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Read Only
              </Typography>
              <TextField
                hiddenLabel
                placeholder="Placeholder"
                value="Input"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>
              <TextField hiddenLabel placeholder="Placeholder" disabled />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Error
              </Typography>
              <TextField
                error
                hiddenLabel
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Success
              </Typography>
              <TextField
                color="success"
                hiddenLabel
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Error Disabled
              </Typography>
              <TextField
                error
                hiddenLabel
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Success Disabled
              </Typography>
              <TextField
                color="success"
                hiddenLabel
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Unit
              </Typography>
              <TextField
                fullWidth
                hiddenLabel
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon
              </Typography>
              <TextField
                hiddenLabel
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Accessibility />
                    </InputAdornment>
                  ),
                }}
              />
            </FlexBox>
          </Stack>
          <Stack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Unit Disabled
              </Typography>
              <TextField
                hiddenLabel
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Unit</InputAdornment>
                  ),
                }}
                disabled
              />
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon Disabled
              </Typography>
              <TextField
                hiddenLabel
                placeholder="Placeholder"
                defaultValue="Input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Accessibility />
                    </InputAdornment>
                  ),
                }}
                disabled
              />
            </FlexBox>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// add hiddenLabel property
<TextField hiddenLabel placeholder="Placeholder" />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

export const SelectLabelPositionTop = () => {
  const defaultSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 444,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: false,
    isIcon: false,
  };
  const iconSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 444,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: false,
    isIcon: true,
  };
  const disabledDefaultSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 444,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: true,
    isIcon: false,
  };
  const disabledIconSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 444,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: true,
    isIcon: true,
  };
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <Box sx={{ width: "444px" }}>
                <SelectField selectData={defaultSelect} />
              </Box>
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon
              </Typography>
              <Box sx={{ width: "444px" }}>
                <SelectField selectData={iconSelect} />
              </Box>
            </FlexBox>

            <FlexBox>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>
              <Box sx={{ width: "444px" }}>
                <SelectField selectData={disabledDefaultSelect} />
              </Box>
              <Box sx={{ width: "444px", marginTop: "20px" }}>
                <SelectField selectData={disabledIconSelect} />
              </Box>
            </FlexBox>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Default
const defaultSelect = {
  label: "Label Text",
  // select combo box ?????? ??????
  style: {PaperProps: {style: {width: 444,},},},
  option: ["???????????????", "???????????????", "?????????", "?????????", "?????????", "?????????",],
  disabled: false,
  isIcon: false,
};

<SelectField selectData={defaultSelect} />

// icon
  isIcon: true,

// disabled
  disabled: true,
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const SelectLabelPositionLeft = () => {
  const defaultSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 324,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: false,
    isIcon: false,
  };
  const iconSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 324,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: false,
    isIcon: true,
  };
  const disabledDefaultSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 324,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: true,
    isIcon: false,
  };
  const disabledIconSelect = {
    label: "Label Text",
    style: {
      PaperProps: {
        style: {
          width: 324,
        },
      },
    },
    option: [
      "???????????????",
      "???????????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ],
    disabled: true,
    isIcon: true,
  };
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <Box sx={{ width: "444px" }}>
                <DefaultSelectField selectData={defaultSelect} />
              </Box>
            </FlexBox>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Icon
              </Typography>
              <Box sx={{ width: "444px" }}>
                <DefaultSelectField selectData={iconSelect} />
              </Box>
            </FlexBox>

            <FlexBox>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>
              <Box sx={{ width: "444px" }}>
                <DefaultSelectField selectData={disabledDefaultSelect} />
              </Box>
              <Box sx={{ width: "444px", marginTop: "20px" }}>
                <DefaultSelectField selectData={disabledIconSelect} />
              </Box>
            </FlexBox>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Default
const defaultSelect = {
  label: "Label Text",
  // select combo box ?????? ??????
  style: {PaperProps: {style: {width: 324,},},},
  option: ["???????????????","???????????????","?????????","?????????","?????????","?????????",],
  disabled: false,
  isIcon: false,
};

<DefaultSelectField selectData={defaultSelect} />

// icon
  isIcon: true,

// disabled
  disabled: true,
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const CheckBox = () => {
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <Box>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <Checkbox {...label} />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Checked
              </Typography>
              <Checkbox {...label} checked />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>

              <Checkbox {...label} disabled />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Disabled Checked
              </Typography>

              <Checkbox {...label} disabled checked />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`const label = { inputProps: { "aria-label": "Checkbox demo" } };
// Default
<Checkbox {...label} />

// Checked
<Checkbox {...label} checked />

// Disabled
<Checkbox {...label} disabled />

// Checked Disabled
<Checkbox {...label} disabled checked />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const CheckBoxWithLabel = () => {
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <Box>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <FormControlLabel control={<Checkbox />} label="Label Text" />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Checked
              </Typography>
              <FormControlLabel
                control={<Checkbox checked />}
                label="Label Text"
              />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>

              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Label Text"
              />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Disabled Checked
              </Typography>

              <FormControlLabel
                disabled
                checked
                control={<Checkbox />}
                label="Label Text"
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<FormControlLabel control={<Checkbox />} label="Label Text" />

// Checked
<FormControlLabel control={<Checkbox checked />} label="Label Text" />
// Disabled
<FormControlLabel control={<Checkbox />} label="Label Text" disabled />

// Checked Disabled
<FormControlLabel disabled checked control={<Checkbox />} label="Label Text" />
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
const checkBoxData = [
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
];
export const CheckBoxGroup = () => {
  const [checkItem, setCheckItem] = React.useState(true);
  const handleChange = (event) => {
    setCheckItem(event.target.checked);
  };
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <FormGroup>
            {checkBoxData.map((item, idx) => {
              return (
                <FormControlLabel
                  control={<Checkbox />}
                  label={item.label + idx}
                  disabled={item.disabled}
                  key={idx}
                  onChange={handleChange}
                />
              );
            })}
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            const [checkItem, setCheckItem] = React.useState(false);
            <br />
            const handleChange = (event) =&gt; &#123;
            <br />
            &nbsp;&nbsp;setCheckItem(event.target.checked);
            <br />
            &#125;;
            <br />
            <br />
            const checkBoxData = &#91;
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", checkItem: false, disabled:
            false &#125;,
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", checkItem: false, disabled:
            false &#125;,
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", checkItem: false, disabled:
            false &#125;,
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", checkItem: false, disabled:
            false &#125;,
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", checkItem: false, disabled:
            false &#125;,
            <br />
            &#93;;
            <br />
            <br />
            // Default
            <br />
            &lt;FormGroup&gt; <br />
            &nbsp;&nbsp;&#123;checkBoxData.map&#40;&#40;item, idx&#41; =&gt;
            &#123; return &#40;
            <br />
            &nbsp;&nbsp;&lt;FormControlLabel control=&#123;&lt;Checkbox
            /&gt;&#125; label=&#123;item.label + idx&#125;
            disabled=&#123;item.disabled&#125; key=&#123;idx&#125;
            onChange=&#123;handleChange&#125; /&gt; &#41;; &#125;&#41;&#125;
            <br />
            &lt;/FormGroup&gt;
            <br />
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
export const DefaultRadio = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <Box>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>

              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </Box>

            <Box>
              <Typography variant="st2" pb={12}>
                Disabled
              </Typography>
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
                disabled
              />
            </Box>
            <Box>
              <Typography variant="st2" pb={12}>
                Disabled Checked
              </Typography>

              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                disabled
              />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            const &#91; value, setValue&#93;= React.useState&#40;"a"&#41;;
            <br /> const handleChange = &#40;event&#41; =&gt; &#123;
            <br />
            &nbsp;&nbsp;setValue(event.target.value);
            <br />
            &#125;;
            <br />
            <br />
            // Default
            <br />
            &lt;Radio checked=&#123;selectedValue === "c"&#125;
            onChange=&#123;handleChange&#125; value="c" name="radio-buttons"
            inputProps=&#123;&#123; "aria-label": "c" &#125;&#125; /&gt;
            <br />
            <br />
            // Selected
            <br />
            &lt;Radio checked=&#123;selectedValue === "a"&#125;
            onChange=&#123;handleChange&#125; value="a" name="radio-buttons"
            inputProps=&#123;&#123; "aria-label": "a" &#125;&#125; /&gt;
            <br />
            <br />
            // Disabled
            <br />
            &lt;Radio checked=&#123;selectedValue === "b"&#125;
            onChange=&#123;handleChange&#125; value="b" name="radio-buttons"
            inputProps=&#123;&#123; "aria-label": "b" &#125;&#125; disabled
            /&gt;
            <br />
            <br />
            // Selected Disabled
            <br />
            &lt;Radio checked=&#123;selectedValue === "a"&#125;
            onChange=&#123;handleChange&#125; value="a" name="radio-buttons"
            inputProps=&#123;&#123; "aria-label": "a" &#125;&#125; disabled
            /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
const radioData1 = [
  { label: "Label Text", disabled: false },
  { label: "Label Text", disabled: false },
];
const radioData2 = [
  { label: "Label Text", disabled: true },
  { label: "Label Text", disabled: true },
];
export const RadioWithLabel = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <Box>
              <Typography variant="st2" pb={12}>
                Default , Selected
              </Typography>
              <RadioGroup
                name="radioGroup"
                value={value}
                onChange={handleChange}
              >
                {radioData1.map((item, idx) => {
                  return (
                    <FormControlLabel
                      value={idx}
                      control={<Radio />}
                      label={item.label}
                      disabled={item.disabled}
                      key={idx}
                    />
                  );
                })}
              </RadioGroup>
            </Box>

            <Box>
              <Typography variant="st2" pb={12}>
                Disabled , Selected
              </Typography>
              <RadioGroup
                name="radioGroup"
                value={value}
                onChange={handleChange}
              >
                {radioData2.map((item, idx) => {
                  return (
                    <FormControlLabel
                      value={idx}
                      control={<Radio />}
                      label={item.label}
                      disabled={item.disabled}
                      key={idx}
                    />
                  );
                })}
              </RadioGroup>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            const radioData1 = &#91;
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", disabled: false &#125;,
            <br /> &nbsp;&nbsp;&#123; label: "Label Text", disabled: false
            &#125;,
            <br /> &#93;;
            <br /> <br />
            const &#91; value, setValue&#93;= React.useState&#40;"0"&#41;;
            <br /> const handleChange = &#40;event&#41; =&gt; &#123;
            <br />
            &nbsp;&nbsp;setValue(event.target.value);
            <br />
            &#125;;
            <br />
            <br />
            // Default
            <br />
            &lt;RadioGroupname="radioGroup" value=&#123;value&#125;
            onChange=&#123;handleChange&#125; &gt;
            <br />
            &nbsp;&nbsp;&#123; radioData1.map&#40;&#40;item, idx&#41; =&gt;
            &#123; return &#40; &lt;FormControlLabel value=&#123;idx&#125;
            control=&#123;&lt;Radio /&gt;&#125; label=&#123;item.label&#125;
            disabled=&#123;item.disabled&#125; key=&#123;idx&#125; /&gt; &#41;;
            &#125;&#41;&#125;
            <br /> &lt;/RadioGroup&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
const radioDataGroup = [
  { label: "Label Text", disabled: false },
  { label: "Label Text", disabled: false },
  { label: "Label Text", disabled: false },
  { label: "Label Text", disabled: false },
  { label: "Label Text", disabled: false },
];
export const GroupRadio = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack spacing={20}>
            <Box>
              <RadioGroup
                name="radioGroup"
                value={value}
                onChange={handleChange}
              >
                {radioDataGroup.map((item, idx) => {
                  return (
                    <FormControlLabel
                      value={idx}
                      control={<Radio />}
                      label={item.label}
                      disabled={item.disabled}
                      key={idx}
                    />
                  );
                })}
              </RadioGroup>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            const radioDataGroup = &#91;
            <br />
            &nbsp;&nbsp;&#123; label: "Label Text", disabled: false &#125;,
            <br /> &nbsp;&nbsp;&#123; label: "Label Text", disabled: false
            <br /> &nbsp;&nbsp;&#123; label: "Label Text", disabled: false
            <br /> &nbsp;&nbsp;&#123; label: "Label Text", disabled: false
            <br /> &nbsp;&nbsp;&#123; label: "Label Text", disabled: false
            &#125;,
            <br /> &#93;;
            <br /> <br />
            const &#91; value, setValue&#93;= React.useState&#40;"0"&#41;;
            <br /> const handleChange = &#40;event&#41; =&gt; &#123;
            <br />
            &nbsp;&nbsp;setValue(event.target.value);
            <br />
            &#125;;
            <br />
            <br />
            // Default
            <br />
            &lt;RadioGroupname="radioGroup" value=&#123;value&#125;
            onChange=&#123;handleChange&#125; &gt;
            <br />
            &nbsp;&nbsp;&#123; radioDataGroup.map&#40;&#40;item, idx&#41; =&gt;
            &#123; return &#40; &lt;FormControlLabel value=&#123;idx&#125;
            control=&#123;&lt;Radio /&gt;&#125; label=&#123;item.label&#125;
            disabled=&#123;item.disabled&#125; key=&#123;idx&#125; /&gt; &#41;;
            &#125;&#41;&#125;
            <br /> &lt;/RadioGroup&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
const SegmentData = {
  disabled: false,
  group: [
    { label: "??????", name: "Segment", checked: true },
    { label: "?????????", name: "Segment", checked: false },
  ],
};
const SegmentData3 = {
  disabled: false,
  group: [
    { label: "Segment", name: "Segment0", checked: true },
    { label: "Segment", name: "Segment0", checked: false },
    { label: "Segment", name: "Segment0", checked: false },
  ],
};
const SegmentDataDisabled = {
  disabled: true,
  group: [
    { label: "Segment", name: "Segment1", checked: true },
    { label: "Segment", name: "Segment1", checked: false },
    { label: "Segment", name: "Segment1", checked: false },
  ],
};
export const SegmentGroup = () => {
  return (
    <Grid container spacing={40}>
      <Grid item xs={6}>
        <Typography variant="st2" pb={12}>
          Default
        </Typography>
        <Stack direction="row" spacing={20}>
          <Segment segmentData={SegmentData} />
          <Segment segmentData={SegmentData3} />
        </Stack>
        <Typography variant="st2" pb={12} mt={20}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={20}>
          <Segment segmentData={SegmentDataDisabled} />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`const SegmentData =  {
  disabled: true,
  group: [
    { label: "??????", name: "Segment", checked: true },
    { label: "?????????", name: "Segment", checked: false },
  ],
};

// Default
  <Segment segmentData={SegmentData} />
`}</pre>
        </CodeBox>
      </Grid>
    </Grid>
  );
};
export const SwitchWithLabel = () => {
  return (
    <Grid container spacing={40}>
      <Grid item xs={6}>
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="?????????"
          labelPlacement="start"
          defaultChecked
        />
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="?????????"
          labelPlacement="start"
          defaultChecked
          disabled
        />
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="?????????"
          labelPlacement="start"
        />
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="?????????"
          labelPlacement="start"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`//????????? ??????
`}</pre>
        </CodeBox>
      </Grid>
    </Grid>
  );
};
export const WithFormContents = () => {
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Typography variant="st2" pb={12}>
            Default
          </Typography>
          <FormContents label="Label Text" required={false}>
            Import Components or Contents
          </FormContents>
          <Typography variant="st2" pb={12} mt={20}>
            Description
          </Typography>
          <FormContents label="Label Text" required={false}>
            {/* Import Components or Contents */}
            <Typography variant="ht" color="primary.light">
              Description Message.
            </Typography>
          </FormContents>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<FormContents label="Label Text" required={false}>
    // Import Components or Contents
</FormContents>

// Description
<FormContents label="Label Text" required={false}>
    // Import Components or Contents
    <Typography variant="ht" color="primary.light">
            Description Message.
    </Typography>
</FormContents>
`}</pre>
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
