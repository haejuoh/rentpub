import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { ReactComponent as Accessibility } from "../assets/images/icons/accessibility.svg";
import { ReactComponent as IconArrow } from "../assets/images/icons/chevron-down.svg";
import { DefaultTextField } from "../assets/style/styledComponents";
import { CodeBox, FlexBox } from "../assets/style/guideStyle";
import Placeholder from "../components/Placeholder";

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
const optionList = ["현대자동차", "기아자동차", "쉐보레", "렉서스", "도요타"];
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export function SimpleSelect() {
  const [answer, setAnswer] = React.useState("");

  return (
    <Select
      value={answer}
      displayEmpty
      onChange={(event) => setAnswer(event.target.value)}
      renderValue={
        answer !== "" ? undefined : () => <Placeholder>선택</Placeholder>
      }
    >
      <MenuItem value={1}>하이하이호</MenuItem>
      <MenuItem value={2}>하이하이호이하</MenuItem>
      <MenuItem value={3}>캬캬</MenuItem>
    </Select>
  );
}
export const SelectLabelPositionTop = () => {
  const [selectItem, setSelectItem] = React.useState("");

  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };
  return (
    <>
      <Grid container spacing={40}>
        <Grid item xs={6}>
          <Stack direction="row" spacing={20}>
            <FlexBox>
              <Typography variant="st2" pb={12}>
                Default
              </Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="sample">Label Text</InputLabel>

                <Select
                  labelId="sample"
                  value={selectItem}
                  IconComponent={() => <IconArrow />}
                  displayEmpty
                  onChange={handleChange}
                  renderValue={
                    selectItem !== ""
                      ? undefined
                      : () => <Placeholder content="선택" />
                  }
                >
                  {optionList.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
