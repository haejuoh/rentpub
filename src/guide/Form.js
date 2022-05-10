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
} from "@mui/material";
import { ReactComponent as Accessibility } from "../assets/images/icons/accessibility.svg";
import { ReactComponent as IconArrow } from "../assets/images/icons/chevron-down.svg";
import { ReactComponent as IconOption } from "../assets/images/icons/options.svg";
import { DefaultTextField } from "../assets/style/common";
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
                value="Input"
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
            // Default
            <br />
            &lt;TextField label="Label Text" placeholder="Placeholder"
            value="Input" /&gt;
            <br />
            <br />
            // Focused
            <br />
            &lt;TextField label="Label Text" placeholder="Placeholder"
            value="Input" focused/&gt;
            <br />
            <br />
            // Required
            <br />
            &lt;TextField label="Label Text" placeholder="Placeholder"
            value="Input" required/&gt;
            <br />
            <br />
            // Read Only
            <br />
            // porperty 사용 유의
            <br />
            &lt;TextField label="Label Text" placeholder="Placeholder"
            value="Input" InputProps=&#123;&#123; readOnly: true
            &#125;&#125;/&gt;
            <br />
            <br />
            // Disabled
            <br />
            &lt;TextField label="Label Text" placeholder="Placeholder"
            value="Input" disabled/&gt;
            <br />
            <br />
            // Error
            <br />
            &lt;TextField error label="Label Text" placeholder="Placeholder"
            value="Input" /&gt;
            <br />
            <br />
            // Success
            <br />
            &lt;TextField color="success" label="Label Text"
            placeholder="Placeholder" value="Input" /&gt;
            <br />
            <br />
            // Unit
            <br />
            &lt;TextField error label="Label Text" placeholder="Placeholder"
            value="Input" /&gt;
            <br />
            <br />
            // Icon
            <br />
            &lt;TextField color="success" label="Label Text"
            placeholder="Placeholder" value="Input" /&gt;
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
                value="Input"
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
          <CodeBox sx={{ lineHeight: "1.5rem" }}>
            // Default
            <br />
            &lt;DefaultTextField label="Label Text" placeholder="Placeholder"
            value="Input" /&gt;
            <br />
            <br />
            // Focused
            <br />
            &lt;DefaultTextField label="Label Text" placeholder="Placeholder"
            value="Input" focused/&gt;
            <br />
            <br />
            // Required
            <br />
            &lt;DefaultTextField label="Label Text" placeholder="Placeholder"
            value="Input" required/&gt;
            <br />
            <br />
            // Read Only
            <br />
            // porperty 사용 유의
            <br />
            &lt;DefaultTextField label="Label Text" placeholder="Placeholder"
            value="Input" InputProps=&#123;&#123; readOnly: true
            &#125;&#125;/&gt;
            <br />
            <br />
            // Disabled
            <br />
            &lt;DefaultTextField label="Label Text" placeholder="Placeholder"
            value="Input" disabled/&gt;
            <br />
            <br />
            // Error
            <br />
            &lt;DefaultTextField error label="Label Text"
            placeholder="Placeholder" value="Input" /&gt;
            <br />
            <br />
            // Success
            <br />
            &lt;DefaultTextField color="success" label="Label Text"
            placeholder="Placeholder" value="Input" /&gt;
            <br />
            <br />
            // Unit
            <br />
            &lt;DefaultTextField error label="Label Text"
            placeholder="Placeholder" value="Input" /&gt;
            <br />
            <br />
            // Icon
            <br />
            &lt;DefaultTextField color="success" label="Label Text"
            placeholder="Placeholder" value="Input" /&gt;
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
            // add hiddenLabel property
            <br />
            // *<br />
            // *<br />
            // example
            <br />
            &lt;TextField hiddenLabel placeholder="Placeholder" value="Input"
            /&gt;
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
            // Default
            <br />
            const defaultSelect = &#123;
            <br />
            &nbsp;&nbsp;label: "Label Text",
            <br />
            &nbsp;&nbsp;// select combo box 너비 지정
            <br />
            &nbsp;&nbsp;style: &#123; PaperProps: &#123; style: &#123; width:
            444, &#125;, &#125;, &#125;,
            <br />
            &nbsp;&nbsp;option: &#91; "현대자동차", "기아자동차", "쉐보레",
            "렉서스", "도요타", "포르쉐", &#93;,
            <br />
            &nbsp;&nbsp;disabled: false,
            <br />
            &nbsp;&nbsp;isIcon: false,
            <br />
            &#125;;
            <br />
            <br />
            &lt;SelectField selectData=&#123;defaultData&#125; /&gt;
            <br />
            <br />
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
      "현대자동차",
      "기아자동차",
      "쉐보레",
      "렉서스",
      "도요타",
      "포르쉐",
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
            // Default
            <br />
            const defaultSelect = &#123;
            <br />
            &nbsp;&nbsp;label: "Label Text",
            <br />
            &nbsp;&nbsp;// select combo box 너비 지정
            <br />
            &nbsp;&nbsp;style: &#123; PaperProps: &#123; style: &#123; width:
            444, &#125;, &#125;, &#125;,
            <br />
            &nbsp;&nbsp;option: &#91; "현대자동차", "기아자동차", "쉐보레",
            "렉서스", "도요타", "포르쉐", &#93;,
            <br />
            &nbsp;&nbsp;disabled: false,
            <br />
            &nbsp;&nbsp;isIcon: false,
            <br />
            &#125;;
            <br />
            <br />
            &lt;DefaultSelectField selectData=&#123;defaultData&#125; /&gt;
            <br />
            <br />
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
            const label = &#123; inputProps: &#123; "aria-label": "Checkbox
            demo" &#125; &#125;;
            <br />
            <br />
            // Default
            <br />
            &lt;Checkbox &#123;...label&#125; /&gt;
            <br />
            <br />
            // Checked
            <br />
            &lt;Checkbox &#123;...label&#125; checked /&gt;
            <br />
            <br />
            // Disabled
            <br />
            &lt;Checkbox &#123;...label&#125; disabled /&gt;
            <br />
            <br />
            // Checked Disabled
            <br />
            &lt;Checkbox &#123;...label&#125; disabled checked /&gt;
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
            const label = &#123; inputProps: &#123; "aria-label": "Checkbox
            demo" &#125; &#125;;
            <br />
            <br />
            // Default
            <br />
            &lt;FormControlLabel control=&#123;&lt;Checkbox /&gt;&#125;
            label="Label Text" /&gt;
            <br />
            <br />
            // Checked
            <br />
            &lt;FormControlLabel control=&#123;&lt;Checkbox checked /&gt;&#125;
            label="Label Text" /&gt;
            <br />
            <br />
            // Disabled
            <br />
            &lt;FormControlLabel control=&#123;&lt;Checkbox disabled /&gt;&#125;
            label="Label Text" /&gt;
            <br />
            <br />
            // Checked Disabled
            <br />
            &lt;FormControlLabel control=&#123;&lt;Checkbox disabled checked
            /&gt;&#125; label="Label Text" /&gt;
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
const SegmentData = [
  { label: "사용", name: "Segment", checked: true },
  { label: "미사용", name: "Segment", checked: false },
];
const SegmentData3 = [
  { label: "Segment", name: "Segment0", checked: true },
  { label: "Segment", name: "Segment0", checked: false },
  { label: "Segment", name: "Segment0", checked: false },
];
export const SegmentGroup = () => {
  return (
    <Grid container spacing={40}>
      <Grid item xs={6}>
        <Stack spacing={20}>
          <Box sx={{ width: "120px" }}>
            <Segment segmentData={SegmentData} variant="2" />
          </Box>
          <Box sx={{ width: "300px" }}>
            <Segment segmentData={SegmentData3} variant="3" />
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`const SegmentData = [
  { label: "사용", name: "Segment", checked: true },
  { label: "미사용", name: "Segment", checked: false },
];

// Default
<Box sx={{ width: "120px" }}>
  <Segment segmentData={SegmentData} variant="2" />
</Box>

// Segment 버튼 수에 따라 variant로 제어
<Box sx={{ width: "120px" }}>
  <Segment segmentData={SegmentData} variant="2" />
</Box>
<Box sx={{ width: "300px" }}>
  <Segment segmentData={SegmentData3} variant="3" />
</Box>
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
          label="활성화"
          labelPlacement="start"
          defaultChecked
        />
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="활성화"
          labelPlacement="start"
          defaultChecked
          disabled
        />
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="활성화"
          labelPlacement="start"
        />
        <FormControlLabel
          value="switch"
          control={<Switch color="primary" />}
          label="활성화"
          labelPlacement="start"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <CodeBox>
          <pre>{`//가이드 명시
`}</pre>
        </CodeBox>
      </Grid>
    </Grid>
  );
};
