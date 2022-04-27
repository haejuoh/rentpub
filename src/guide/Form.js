import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Box,
  Typography,
  Stack,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";

const CodeBox = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.grey[900]}`,
  color: `${theme.palette.grey[0]}`,
  padding: "10px",
  borderRadius: "4px",
}));
const DefaultTextField = styled(TextField)(
  ({ theme }) => `
  flex-direction:row;
  position:relative;
  align-items:center;
    label{
       display:inline;
       min-width:120px;
    }
    input{
        min-width:calc(100% - 120px)
    }
    p{
        position:absolute;
        left:120px;
        bottom:-18px;
    }
    `
);

export const Inp = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Stack spacing={3}>
            <div>
              <Typography variant="h4" pb={5}>
                Top label
              </Typography>
              <Stack direction="row" spacing={10}>
                <TextField
                  label="Label Text"
                  placeholder="Placeholder"
                  defaultValue="Input"
                  required
                  //   disabled
                />
                <TextField
                  label="Label Text"
                  placeholder="Placeholder"
                  defaultValue="Input"
                  //   required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">Unit</InputAdornment>
                    ),
                  }}
                  //   disabled
                />
                <TextField
                  label="Label Text"
                  placeholder="Placeholder"
                  defaultValue="Input"
                  focused
                />

                <TextField
                  error
                  id="filled-error-helper-text"
                  label="Label Text"
                  defaultValue="Input"
                  helperText="Alret Message."
                />
                <TextField
                  success
                  id="filled-error-helper-text"
                  label="Label Text"
                  defaultValue="Input"
                  helperText="Alret Message."
                />
              </Stack>
              <Stack direction="row" spacing={10}>
                <DefaultTextField
                  label="Label Text"
                  placeholder="Placeholder"
                  defaultValue="Input"
                  //   variant="sub"
                  //   disabled
                />
                <DefaultTextField
                  label="Label Text"
                  placeholder="Placeholder"
                  defaultValue="Input"
                  focused
                />

                <DefaultTextField
                  error
                  id="filled-error-helper-text"
                  label="Label Text"
                  defaultValue="Input"
                  helperText="Alret Message."
                />
                <DefaultTextField
                  success
                  id="filled-error-helper-text"
                  label="Label Text"
                  defaultValue="Input"
                  helperText="Alret Message."
                />
              </Stack>
              {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  value={values.weight}
                  onChange={handleChange("weight")}
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <FormHelperText id="outlined-weight-helper-text">
                  Weight
                </FormHelperText>
              </FormControl> */}
            </div>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <CodeBox>
            // small
            <br />
            &lt;Button color="primary" variant="contained" &nbsp;size="small"
            /&gt;
          </CodeBox>
        </Grid>
      </Grid>
    </>
  );
};
