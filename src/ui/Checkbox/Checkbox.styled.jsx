import styled from 'styled-components'
import MuiCheckbox from '@material-ui/core/Checkbox'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel'

import CheckIcon from '@public/icons/checkmark.svg'

export const CheckboxRow = styled(({ ...props }) => (
  <MuiFormControlLabel
    {...props}
    classes={{ root: 'form-control-label-root', label: 'form-control-label' }}
  />
))`
  && {
    margin: 0;
    align-items: flex-start;
  }

  .form-control-label {
    margin-left: 10px;
    font-family: Formular;
    font-size: var(--font-size-reg);
    color: var(--color-black-100);
    line-height: normal;
  }
`

export const Checkbox = styled(({ ...props }) => (
  <MuiCheckbox
    {...props}
    classes={{ root: 'checkbox-root', checked: 'checkbox-checked' }}
    checkedIcon={<CheckIcon />}
    disableRipple
  />
))`
  &&.checkbox-root {
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-gray-400);
    border-radius: 4px;
    background: #fff;
    box-sizing: border-box;

    svg {
      display: none;
      position: absolute;
      width: 14px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      path {
        stroke: #fff;
      }
    }

    &.checkbox-checked {
      border: none;
      background: var(--color-primary-200);

      svg {
        display: block;
      }
    }
  }
`
