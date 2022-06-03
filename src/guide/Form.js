import React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
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
import { DefaultTextField, FormContents } from "../assets/style/common";
import { CodeBox, FlexBox } from "../assets/style/guideStyle";
import { SelectField, DefaultSelectField } from "../components/Select";
import Segment from "../components/Segment";
// import Placeholder from "../assets/style/Placeholder";

import SkrGrid from "../components/skr/SkrGrid";
import SkrStack from "../components/skr/SkrStack";
import SkrBox from "../components/skr/SkrBox";
import SkrTypography from "../components/skr/SkrTypography";
import SkrFormGroup from "../components/skr/SkrFormGroup";
import SkrFormControlLabel from "../components/skr/SkrFormControlLabel";
import SkrCheckbox from "../components/skr/SkrCheckbox";

import InputLabelPositionTop from "../components/customed/form/input/InputLabelPositionTop";
import InputLabelPositionLeft from "../components/customed/form/input/InputLabelPositionLeft";
import InputLabelHidden from "../components/customed/form/input/InputLabelHidden";
import SelectLabelPositionTop from "../components/customed/form/select/SelectLabelPositionTop";
import CheckboxLabelHidden from "../components/customed/form/checkbox/CheckboxLabelHidden";
import CheckboxLabelPositionRight from "../components/customed/form/checkbox/CheckboxLabelPositionRight";
import CheckboxGroup from "../components/customed/form/checkbox/CheckboxGroup";

export const InputLabelPositionTopList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack direction="row" spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <InputLabelPositionTop
                label="Label Text"
                placeholder="Placeholder"
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Focused
              </SkrTypography>
              <InputLabelPositionTop
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                focused
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Required
              </SkrTypography>
              <InputLabelPositionTop
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                required
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Read Only
              </SkrTypography>
              <InputLabelPositionTop
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <InputLabelPositionTop
                label="Label Text"
                placeholder="Placeholder"
                disabled
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error
              </SkrTypography>
              <InputLabelPositionTop
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success
              </SkrTypography>
              <InputLabelPositionTop
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error Disabled
              </SkrTypography>
              <InputLabelPositionTop
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success Disabled
              </SkrTypography>
              <InputLabelPositionTop
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Unit
              </SkrTypography>
              <InputLabelPositionTop
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
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <InputLabelPositionTop
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
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Unit Disabled
              </SkrTypography>
              <InputLabelPositionTop
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
              <SkrTypography variant="st2" pb={12}>
                Icon Disabled
              </SkrTypography>
              <InputLabelPositionTop
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
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" />

// Focused
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="input" focused />

// Required
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="Input" required />

// Read Only : porperty 사용 유의
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="input" InputProps={{ readOnly: true, }} />

// Disabled
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" disabled />

// Error
<InputLabelPositionTop error label="Label Text" defaultValue="Input" helperText="Alret Message." />
<InputLabelPositionTop error label="Label Text" defaultValue="Input" helperText="Alret Message." disabled />

// Success
<InputLabelPositionTop color="success" label="Label Text" defaultValue="Input" helperText="Alret Message." />
<InputLabelPositionTop color="success" label="Label Text" defaultValue="Input" helperText="Alret Message." disabled />

// Unit
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end">Unit</InputAdornment> ), }} />

// Icon
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end"> <Accessibility /> </InputAdornment> ), }} />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const InputLabelPositionLeftList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack direction="row" spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <InputLabelPositionLeft
                label="Label Text"
                placeholder="Placeholder"
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Focused
              </SkrTypography>
              <InputLabelPositionLeft
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                focused
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Required
              </SkrTypography>
              <InputLabelPositionLeft
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="Input"
                required
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Read Only
              </SkrTypography>
              <InputLabelPositionLeft
                label="Label Text"
                placeholder="Placeholder"
                defaultValue="input"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <InputLabelPositionLeft
                label="Label Text"
                placeholder="Placeholder"
                disabled
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error
              </SkrTypography>
              <InputLabelPositionLeft
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success
              </SkrTypography>
              <InputLabelPositionLeft
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error Disabled
              </SkrTypography>
              <InputLabelPositionLeft
                error
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success Disabled
              </SkrTypography>
              <InputLabelPositionLeft
                color="success"
                label="Label Text"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Unit
              </SkrTypography>
              <InputLabelPositionLeft
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
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <InputLabelPositionLeft
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
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={30}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Unit Disabled
              </SkrTypography>
              <InputLabelPositionLeft
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
              <SkrTypography variant="st2" pb={12}>
                Icon Disabled
              </SkrTypography>
              <InputLabelPositionLeft
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
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" />

// Focused
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="input" focused />

// Required
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="Input" required />

// Read Only : porperty 사용 유의
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="input" InputProps={{ readOnly: true, }} />

// Disabled
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" disabled />

// Error
<InputLabelPositionLeft error label="Label Text" defaultValue="Input" helperText="Alret Message." />

// Success
<InputLabelPositionLeft color="success" label="Label Text" defaultValue="Input" helperText="Alret Message." />

// Unit
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end">Unit</InputAdornment> ), }} />

// Icon
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <InputAdornment position="end"> <Accessibility /> </InputAdornment> ), }} />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const InputLabelHiddenList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack direction="row" spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <InputLabelHidden placeholder="Placeholder" />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Focused
              </SkrTypography>
              <InputLabelHidden
                placeholder="Placeholder"
                value="Input"
                focused
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Required
              </SkrTypography>
              <InputLabelHidden
                placeholder="Placeholder"
                defaultValue="Input"
                required
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Read Only
              </SkrTypography>
              <InputLabelHidden
                placeholder="Placeholder"
                value="Input"
                InputProps={{
                  readOnly: true,
                }}
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <InputLabelHidden placeholder="Placeholder" disabled />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error
              </SkrTypography>
              <InputLabelHidden
                error
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success
              </SkrTypography>
              <InputLabelHidden
                color="success"
                defaultValue="Input"
                helperText="Alret Message."
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error Disabled
              </SkrTypography>
              <InputLabelHidden
                error
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success Disabled
              </SkrTypography>
              <InputLabelHidden
                color="success"
                defaultValue="Input"
                helperText="Alret Message."
                disabled
              />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Unit
              </SkrTypography>
              <InputLabelHidden
                fullWidth
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
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <InputLabelHidden
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
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Unit Disabled
              </SkrTypography>
              <InputLabelHidden
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
              <SkrTypography variant="st2" pb={12}>
                Icon Disabled
              </SkrTypography>
              <InputLabelHidden
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
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`<InputLabelHidden placeholder="Placeholder" />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

export const SelectLabelPositionTopList = () => {
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
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelPositionTop selectData={defaultSelect} />
                <SelectField selectData={defaultSelect} />
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectField selectData={iconSelect} />
              </SkrBox>
            </FlexBox>

            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectField selectData={disabledDefaultSelect} />
              </SkrBox>
              <SkrBox sx={{ width: "444px", marginTop: "20px" }}>
                <SelectField selectData={disabledIconSelect} />
              </SkrBox>
            </FlexBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
const defaultSelect = {
  label: "Label Text",
  // select combo SkrBox 너비 지정
  style: {PaperProps: {style: {width: 444,},},},
  option: ["현대자동차", "기아자동차", "쉐보레", "렉서스", "도요타", "포르쉐",],
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
        </SkrGrid>
      </SkrGrid>
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
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <DefaultSelectField selectData={defaultSelect} />
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <DefaultSelectField selectData={iconSelect} />
              </SkrBox>
            </FlexBox>

            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <DefaultSelectField selectData={disabledDefaultSelect} />
              </SkrBox>
              <SkrBox sx={{ width: "444px", marginTop: "20px" }}>
                <DefaultSelectField selectData={disabledIconSelect} />
              </SkrBox>
            </FlexBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
const defaultSelect = {
  label: "Label Text",
  // select combo SkrBox 너비 지정
  style: {PaperProps: {style: {width: 324,},},},
  option: ["현대자동차","기아자동차","쉐보레","렉서스","도요타","포르쉐",],
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
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const CheckboxLabelHiddenList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <CheckboxLabelHidden />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Checked
              </SkrTypography>
              <CheckboxLabelHidden defaultChecked />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <CheckboxLabelHidden disabled />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled Checked
              </SkrTypography>
              <CheckboxLabelHidden disabled defaultChecked />
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<CheckboxLabelHidden />

// Checked
<CheckboxLabelHidden defaultChecked />

// Disabled
<CheckboxLabelHidden disabled />

// Checked Disabled
<CheckboxLabelHidden disabled defaultChecked />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const CheckboxLabelPositionRightList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <CheckboxLabelPositionRight label="Label Text" />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Checked
              </SkrTypography>
              <CheckboxLabelPositionRight label="Label Text" defaultChecked />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <CheckboxLabelPositionRight label="Label Text" disabled />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled Checked
              </SkrTypography>
              <CheckboxLabelPositionRight
                label="Label Text"
                defaultChecked
                disabled
              />
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<CheckboxLabelPositionRight label="Label Text" />

// Checked
<CheckboxLabelPositionRight label="Label Text" defaultChecked />

// Disabled
<CheckboxLabelPositionRight label="Label Text" disabled />

// Checked Disabled
<CheckboxLabelPositionRight label="Label Text" defaultChecked disabled />
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
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
export const CheckBoxGroupList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <CheckboxGroup checkBoxData={checkBoxData} />
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`const checkBoxData = [
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
  { label: "Label Text", checkItem: true, disabled: false },
];

<CheckboxGroup checkBoxData={checkBoxData} />`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
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
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>

              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </SkrBox>

            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
                disabled
              />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled Checked
              </SkrTypography>

              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                disabled
              />
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
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
        </SkrGrid>
      </SkrGrid>
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
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Default , Selected
              </SkrTypography>
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
            </SkrBox>

            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled , Selected
              </SkrTypography>
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
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
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
        </SkrGrid>
      </SkrGrid>
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
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <SkrBox>
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
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
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
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
const SegmentData = {
  disabled: false,
  group: [
    { label: "사용", name: "Segment", checked: true },
    { label: "미사용", name: "Segment", checked: false },
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
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SkrTypography variant="st2" pb={12}>
          Default
        </SkrTypography>
        <SkrStack direction="row" spacing={20}>
          <Segment segmentData={SegmentData} />
          <Segment segmentData={SegmentData3} />
        </SkrStack>
        <SkrTypography variant="st2" pb={12} mt={20}>
          Disabled
        </SkrTypography>
        <SkrStack direction="row" spacing={20}>
          <Segment segmentData={SegmentDataDisabled} />
        </SkrStack>
      </SkrGrid>
      <SkrGrid item xs={6}>
        <CodeBox>
          <pre>{`const SegmentData =  {
  disabled: true,
  group: [
    { label: "사용", name: "Segment", checked: true },
    { label: "미사용", name: "Segment", checked: false },
  ],
};

// Default
  <Segment segmentData={SegmentData} />
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};
export const SwitchWithLabel = () => {
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
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
      </SkrGrid>
      <SkrGrid item xs={6}>
        <CodeBox>
          <pre>{`//가이드 명시
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};
export const WithFormContents = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="st2" pb={12}>
            Default
          </SkrTypography>
          <FormContents label="Label Text" required={false}>
            Import Components or Contents
          </FormContents>
          <SkrTypography variant="st2" pb={12} mt={20}>
            Description
          </SkrTypography>
          <FormContents label="Label Text" required={false}>
            {/* Import Components or Contents */}
            <SkrTypography variant="ht" color="primary.light">
              Description Message.
            </SkrTypography>
          </FormContents>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<FormContents label="Label Text" required={false}>
    // Import Components or Contents
</FormContents>

// Description
<FormContents label="Label Text" required={false}>
    // Import Components or Contents
    <SkrTypography variant="ht" color="primary.light">
            Description Message.
    </SkrTypography>
</FormContents>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
