import React from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import { ReactComponent as Accessibility } from "../assets/images/icons/accessibility.svg";
// import { DefaultTextField, FormContents } from "../assets/style/common";
import { CodeBox, FlexBox } from "../assets/style/guideStyle";
// import { SelectField, DefaultSelectField } from "../components/Select";
// import Segment from "../components/Segment";
// import Placeholder from "../assets/style/Placeholder";

import SkrGrid from "../components/skr/SkrGrid";
import SkrStack from "../components/skr/SkrStack";
import SkrBox from "../components/skr/SkrBox";
import SkrTypography from "../components/skr/SkrTypography";
import SkrInputAdornment from "../components/skr/SkrInputAdornment";
import InputLabelPositionTop from "../components/customed/form/input/InputLabelPositionTop";
import InputLabelPositionLeft from "../components/customed/form/input/InputLabelPositionLeft";
import InputLabelHidden from "../components/customed/form/input/InputLabelHidden";
import Textarea from "../components/customed/form/textarea/Textarea";
import SelectLabelPositionTop from "../components/customed/form/select/SelectLabelPositionTop";
import SelectLabelPositionLeft from "../components/customed/form/select/SelectLabelPositionLeft";
import SelectLabelHidden from "../components/customed/form/select/SelectLabelHidden";
import SelectMultipleLabelHidden from "../components/customed/form/select/SelectMultipleLabelHidden";
import SelectMultipleLabelTop from "../components/customed/form/select/SelectMultipleLabelTop";
import SelectMultipleLabelLeft from "../components/customed/form/select/SelectMultipleLabelLeft";
import SelectAutoCompleteLabelHidden from "../components/customed/form/select/SelectAutoCompleteLabelHidden";
import SelectAutoCompleteLabelPositionTop from "../components/customed/form/select/SelectAutoCompleteLabelPositionTop";
import SelectAutoCompleteLabelPositionLeft from "../components/customed/form/select/SelectAutoCompleteLabelPositionLeft";
import CheckboxLabelHidden from "../components/customed/form/checkbox/CheckboxLabelHidden";
import CheckboxLabelPositionRight from "../components/customed/form/checkbox/CheckboxLabelPositionRight";
import CheckboxGroup from "../components/customed/form/checkbox/CheckboxGroup";
import RadioLabelHidden from "../components/customed/form/radio/RadioLabelHidden";
import RadioLabelPositionRight from "../components/customed/form/radio/RadioLabelPositionRight";
import RadioGroupLabel from "../components/customed/form/radio/RadioGroupLabel";
import Segment from "../components/customed/form/radio/Segment";
import SwitchLabelHidden from "../components/customed/form/switch/SwitchLabelHidden";
import SwitchLabelPositionLeft from "../components/customed/form/switch/SwitchLabelPositionLeft";
import SwitchGroup from "../components/customed/form/switch/SwitchGroup";
import FormContents from "../components/customed/form/contents/FormContents";

// input
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
              <Textarea label="Label Text" error disabled />
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
                    <SkrInputAdornment position="end">Unit</SkrInputAdornment>
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
                    <SkrInputAdornment position="end">
                      <Accessibility />
                    </SkrInputAdornment>
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
                    <SkrInputAdornment position="end">Unit</SkrInputAdornment>
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
                    <SkrInputAdornment position="end">
                      <Accessibility />
                    </SkrInputAdornment>
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
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <SkrInputAdornment position="end">Unit</SkrInputAdornment> ), }} />

// Icon
<InputLabelPositionTop label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <SkrInputAdornment position="end"> <Accessibility /> </SkrInputAdornment> ), }} />
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
              <Textarea label="Label Text" error disabled />
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
                    <SkrInputAdornment position="end">Unit</SkrInputAdornment>
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
                    <SkrInputAdornment position="end">
                      <Accessibility />
                    </SkrInputAdornment>
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
                    <SkrInputAdornment position="end">Unit</SkrInputAdornment>
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
                    <SkrInputAdornment position="end">
                      <Accessibility />
                    </SkrInputAdornment>
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
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <SkrInputAdornment position="end">Unit</SkrInputAdornment> ), }} />

// Icon
<InputLabelPositionLeft label="Label Text" placeholder="Placeholder" defaultValue="Input" InputProps={{ endAdornment: ( <SkrInputAdornment position="end"> <Accessibility /> </SkrInputAdornment> ), }} />
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
                    <SkrInputAdornment position="end">Unit</SkrInputAdornment>
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
                    <SkrInputAdornment position="end">
                      <Accessibility />
                    </SkrInputAdornment>
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
                    <SkrInputAdornment position="end">Unit</SkrInputAdornment>
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
                    <SkrInputAdornment position="end">
                      <Accessibility />
                    </SkrInputAdornment>
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

// textarea

export const TextareaList = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="h2">Label Position : Top</SkrTypography>
          <SkrStack direction="row" spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <Textarea label="Label Text" />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Required
              </SkrTypography>
              <Textarea label="Label Text" required />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Read Only
              </SkrTypography>
              <Textarea label="Label Text" readOnly />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <Textarea label="Label Text" disabled />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error
              </SkrTypography>
              <Textarea label="Label Text" error />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success
              </SkrTypography>
              <Textarea label="Label Text" success />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20} mb={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error Disabled
              </SkrTypography>
              <Textarea label="Label Text" error disabled />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success Disabled
              </SkrTypography>
              <Textarea label="Label Text" success disabled />
            </FlexBox>
          </SkrStack>
          <SkrTypography variant="h2">Label Position : Left</SkrTypography>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <Textarea position="left" label="Label Text" />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Required
              </SkrTypography>
              <Textarea position="left" label="Label Text" required />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Read Only
              </SkrTypography>
              <Textarea position="left" label="Label Text" readOnly />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <Textarea position="left" label="Label Text" disabled />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error
              </SkrTypography>
              <Textarea position="left" label="Label Text" error />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success
              </SkrTypography>
              <Textarea position="left" label="Label Text" success />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20} mb={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error Disabled
              </SkrTypography>
              <Textarea position="left" label="Label Text" error disabled />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success Disabled
              </SkrTypography>
              <Textarea position="left" label="Label Text" success disabled />
            </FlexBox>
          </SkrStack>
          <SkrTypography variant="h2">Label Hidden</SkrTypography>
          <SkrStack direction="row" spacing={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Default
              </SkrTypography>
              <Textarea />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Read Only
              </SkrTypography>
              <Textarea readOnly />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <Textarea disabled />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error
              </SkrTypography>
              <Textarea error />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success
              </SkrTypography>
              <Textarea success />
            </FlexBox>
          </SkrStack>
          <SkrStack direction="row" spacing={20} mt={20}>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Error Disabled
              </SkrTypography>
              <Textarea error disabled />
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Success Disabled
              </SkrTypography>
              <Textarea success disabled />
            </FlexBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

// select
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
                {/* <SelectField selectData={defaultSelect} /> */}
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelPositionTop selectData={iconSelect} />
                {/* <SelectField selectData={iconSelect} /> */}
              </SkrBox>
            </FlexBox>

            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelPositionTop selectData={disabledDefaultSelect} />
              </SkrBox>
              <SkrBox sx={{ width: "444px", marginTop: "20px" }}>
                <SelectLabelPositionTop selectData={disabledIconSelect} />
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

<SelectLabelPositionTop selectData={defaultSelect} />

// icon
  isIcon: true,

// disabled
  disabled: true,`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectLabelPositionLeftList = () => {
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
    required: true,
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
                <SelectLabelPositionLeft selectData={defaultSelect} />
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelPositionLeft selectData={iconSelect} />
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelPositionLeft selectData={disabledDefaultSelect} />
              </SkrBox>
              <SkrBox sx={{ width: "444px", marginTop: "20px" }}>
                <SelectLabelPositionLeft selectData={disabledIconSelect} />
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
  required: true,
};

<SelectLabelPositionLeft selectData={defaultSelect} />

// icon
  isIcon: true,

// disabled
  disabled: true,`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectLabelHiddenList = () => {
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
                <SelectLabelHidden selectData={defaultSelect} />
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Icon
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelHidden selectData={iconSelect} />
              </SkrBox>
            </FlexBox>
            <FlexBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <SkrBox sx={{ width: "444px" }}>
                <SelectLabelHidden selectData={disabledDefaultSelect} />
              </SkrBox>
              <SkrBox sx={{ width: "444px", marginTop: "20px" }}>
                <SelectLabelHidden selectData={disabledIconSelect} />
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

<SelectLabelHidden selectData={defaultSelect} />

// icon
  isIcon: true,

// disabled
  disabled: true,`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectMultipleLabelHiddenList = () => {
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
      "포르쉐01",
      "포르쉐02",
      "포르쉐03",
      "포르쉐04",
      "포르쉐05",
      "포르쉐06",
      "포르쉐07",
      "포르쉐08",
      "포르쉐09",
      "포르쉐010",
      "포르쉐011",
      "포르쉐012",
      "포르쉐013",
      "포르쉐014",
      "포르쉐015",
      "포르쉐016",
    ],
    disabled: false,
    isIcon: false,
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
                <SelectMultipleLabelHidden selectData={defaultSelect} />
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

<SelectMultipleLabelHidden selectData={defaultSelect} />`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectMultipleLabelTopList = () => {
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
      "포르쉐01",
      "포르쉐02",
      "포르쉐03",
      "포르쉐04",
      "포르쉐05",
      "포르쉐06",
      "포르쉐07",
      "포르쉐08",
      "포르쉐09",
      "포르쉐010",
      "포르쉐011",
      "포르쉐012",
      "포르쉐013",
      "포르쉐014",
      "포르쉐015",
      "포르쉐016",
    ],
    disabled: false,
    isIcon: false,
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
                <SelectMultipleLabelTop selectData={defaultSelect} />
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

<SelectMultipleLabelTop selectData={defaultSelect} />`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectMultipleLabelLeftList = () => {
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
      "포르쉐01",
      "포르쉐02",
      "포르쉐03",
      "포르쉐04",
      "포르쉐05",
      "포르쉐06",
      "포르쉐07",
      "포르쉐08",
      "포르쉐09",
      "포르쉐010",
      "포르쉐011",
      "포르쉐012",
      "포르쉐013",
      "포르쉐014",
      "포르쉐015",
      "포르쉐016",
    ],
    disabled: false,
    isIcon: false,
    required: true,
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
                <SelectMultipleLabelLeft selectData={defaultSelect} />
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

<SelectMultipleLabelLeft selectData={defaultSelect} />`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

// autocomplete
export const SelectAutoCompleteLabelHiddenList = () => {
  const autocompleteData = [
    { optionLabel: "Autocomplete item 01111" },
    { optionLabel: "Autocomplete item 02" },
    { optionLabel: "Autocomplete item 03" },
    { optionLabel: "Autocomplete item 04" },
    { optionLabel: "Autocomplete item 05" },
  ];
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
                <SelectAutoCompleteLabelHidden
                  autocompleteData={autocompleteData}
                  placeholder="Autocomplete"
                />
              </SkrBox>
            </FlexBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
const autocompleteData = [
  { optionLabel: "Autocomplete item 01111" },
  { optionLabel: "Autocomplete item 02" },
];

<SelectAutoCompleteLabelHidden autocompleteData={autocompleteData} placeholder="Autocomplete" />`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectAutoCompleteLabelPositionTopList = () => {
  const autocompleteData = [
    { optionLabel: "Autocomplete item 01111" },
    { optionLabel: "Autocomplete item 02" },
    { optionLabel: "Autocomplete item 03" },
    { optionLabel: "Autocomplete item 04" },
    { optionLabel: "Autocomplete item 05" },
  ];
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
                <SelectAutoCompleteLabelPositionTop
                  label="label text"
                  autocompleteData={autocompleteData}
                  placeholder="Autocomplete"
                />
              </SkrBox>
            </FlexBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<SelectAutoCompleteLabelPositionTop label="label text" autocompleteData={autocompleteData} placeholder="Autocomplete"
/>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const SelectAutoCompleteLabelPositionLeftList = () => {
  const autocompleteData = [
    { optionLabel: "Autocomplete item 01111" },
    { optionLabel: "Autocomplete item 02" },
    { optionLabel: "Autocomplete item 03" },
    { optionLabel: "Autocomplete item 04" },
    { optionLabel: "Autocomplete item 05" },
  ];
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
                <SelectAutoCompleteLabelPositionLeft
                  label="label text"
                  autocompleteData={autocompleteData}
                  placeholder="Autocomplete"
                />
              </SkrBox>
            </FlexBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Default
<SelectAutoCompleteLabelPositionLeft label="label text" autocompleteData={autocompleteData} placeholder="Autocomplete"/>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};

// checkbox
const label = { inputProps: { "aria-label": "Checkbox Snackbars" } };
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

// radio
export const RadioLabelHiddenList = () => {
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
              <RadioLabelHidden
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
              <RadioLabelHidden
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </SkrBox>
            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled
              </SkrTypography>
              <RadioLabelHidden
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
              <RadioLabelHidden
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
            <pre>{`const [selectedValue, setSelectedValue] = React.useState("a");
const handleChange = (event) => {
  setSelectedValue(event.target.value);
};

// Default
<RadioLabelHidden checked={selectedValue === "b"} onChange={handleChange} value="b" name="radio-buttons" inputProps={{ "aria-label": "B" }} />

// Selected
<RadioLabelHidden checked={selectedValue === "a"} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ "aria-label": "A" }} />

// disabled
<RadioLabelHidden checked={selectedValue === "b"} onChange={handleChange} value="b" name="radio-buttons" inputProps={{ "aria-label": "B" }} disabled/>`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const RadioLabelPositionRightList = () => {
  const [value, setValue] = React.useState("b");
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

              <RadioLabelPositionRight
                control={<Radio name="radio-label-right" />}
                value="a"
                label="Label Text 1"
                onChange={handleChange}
                checked={value === "a"}
              />
              <RadioLabelPositionRight
                control={<Radio name="radio-label-right" />}
                value="b"
                label="Label Text 2"
                onChange={handleChange}
                checked={value === "b"}
              />
            </SkrBox>

            <SkrBox>
              <SkrTypography variant="st2" pb={12}>
                Disabled , Selected
              </SkrTypography>
              <RadioLabelPositionRight
                control={<Radio name="radio-label-right" />}
                value="a"
                label="Label Text 1"
                onChange={handleChange}
                checked={value === "a"}
                disabled
              />
              <RadioLabelPositionRight
                control={<Radio name="radio-label-right" />}
                value="b"
                label="Label Text 2"
                onChange={handleChange}
                checked={value === "b"}
                disabled
              />
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`const [value, setValue] = React.useState("b");
const handleChange = (event) => {
  setValue(event.target.value);
};

// Default
<RadioLabelPositionRight control={<Radio name="radio-label-right" />} value="a" label="Label Text 1" onChange={handleChange} checked={value === "a"} />
// disabled
<RadioLabelPositionRight control={<Radio name="radio-label-right" />} value="b" label="Label Text 1" onChange={handleChange} checked={value === "b"} disabled />`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
export const RadioGroupLabelList = () => {
  const radioDataGroup = [
    { label: "Label Text", disabled: false },
    { label: "Label Text", disabled: false },
    { label: "Label Text", disabled: false },
    { label: "Label Text", disabled: false },
    { label: "Label Text", disabled: false },
  ];
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrStack spacing={20}>
            <SkrBox>
              <RadioGroupLabel radioGroupData={radioDataGroup} />
            </SkrBox>
          </SkrStack>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`const radioDataGroup = [
  { label: "Label Text", disabled: false },
  { label: "Label Text", disabled: false },
];

<RadioGroupLabel radioGroupData={radioDataGroup} />`}</pre>
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

// switch
export const SwitchLabelHiddenList = () => {
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SkrStack direction="row" spacing={20}>
          <SwitchLabelHidden />
          <SwitchLabelHidden defaultChecked />
          <SwitchLabelHidden disabled />
          <SwitchLabelHidden defaultChecked disabled />
        </SkrStack>
      </SkrGrid>
      <SkrGrid item xs={6}>
        <CodeBox>
          <pre>{`<SwitchLabelHidden defaultChecked disabled />
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};
export const SwitchLabelPositionLeftList = () => {
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SkrStack direction="row" spacing={20}>
          <SwitchLabelPositionLeft value="switch01" label="label text" />
          <SwitchLabelPositionLeft
            value="switch02"
            label="label text"
            defaultChecked
          />
          <SwitchLabelPositionLeft
            value="switch03"
            label="label text"
            disabled
          />
          <SwitchLabelPositionLeft
            value="switch04"
            label="label text"
            defaultChecked
            disabled
          />
        </SkrStack>
      </SkrGrid>
      <SkrGrid item xs={6}>
        <CodeBox>
          <pre>{`<SwitchLabelPositionLeft value="switch04" label="label text" defaultChecked disabled />
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};
export const SwitchGroupList = () => {
  const switchGroupData = [
    { label: "Label Text", defaultChecked: true, disabled: false },
    { label: "Label Text", defaultChecked: false, disabled: false },
    { label: "Label Text", defaultChecked: false, disabled: false },
  ];
  return (
    <SkrGrid container spacing={40}>
      <SkrGrid item xs={6}>
        <SwitchGroup switchGroupData={switchGroupData} />
      </SkrGrid>
      <SkrGrid item xs={6}>
        <CodeBox>
          <pre>{`<SwitchGroup switchGroupData={switchGroupData} />
`}</pre>
        </CodeBox>
      </SkrGrid>
    </SkrGrid>
  );
};

//
export const WithFormContents = () => {
  return (
    <>
      <SkrGrid container spacing={40}>
        <SkrGrid item xs={6}>
          <SkrTypography variant="st2" pb={12}>
            Label Position Top
          </SkrTypography>
          <FormContents label="Label Text" required={false}>
            Import Components or Contents
          </FormContents>
          <SkrTypography variant="st2" pb={12} mt={20}>
            Label Position Left
          </SkrTypography>
          <FormContents label="Label Text" required={true} position="left">
            Import Components or Contents
          </FormContents>
          <SkrTypography variant="st2" pb={12} mt={20}>
            Description
          </SkrTypography>
          <FormContents label="Label Text" required={false} position="left">
            <SkrTypography variant="ht" color="primary.light">
              Description Message.
            </SkrTypography>
          </FormContents>
        </SkrGrid>
        <SkrGrid item xs={6}>
          <CodeBox>
            <pre>{`// Label Position Top
<FormContents label="Label Text" required={false}>
  "Import Components or Contents"
</FormContents>

//Label Position Left
<FormContents label="Label Text" required={true} position="left">
  "Import Components or Contents"
</FormContents>

// Description
<FormContents label="Label Text" required={false} position="left">
  <SkrTypography variant="ht" color="primary.light">
    "Description Message."
  </SkrTypography>
</FormContents>
`}</pre>
          </CodeBox>
        </SkrGrid>
      </SkrGrid>
    </>
  );
};
