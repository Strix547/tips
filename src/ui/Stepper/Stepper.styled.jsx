import styled, { css } from 'styled-components'

import MuiStepper from '@material-ui/core/Stepper'
import MuiStep from '@material-ui/core/Step'
import MuiStepLabel from '@material-ui/core/StepLabel'

export const Stepper = styled((props) => (
  <MuiStepper {...props} classes={{ root: 'stepper-root' }} />
))`
  && {
    position: relative;
    padding: 0 58px 30px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 58px;
    height: 1px;
    background: var(--color-gray-700);
  }

  &::before {
    top: 11px;
    left: 0;
    height: 3px;
    background: var(--color-primary-200);
  }

  &::after {
    top: 12px;
    right: 0;
  }

  .MuiStepConnector {
    &-line {
      margin-top: 1px;
      border-color: var(--color-gray-700);
    }

    &-active,
    &-completed {
      .MuiStepConnector-line {
        border-top-width: 3px;
        border-color: var(--color-primary-200);
      }
    }
  }
`

export const Step = styled(MuiStep)`
  && {
    padding: 0;
  }
`

export const StepLabel = styled((props) => (
  <MuiStepLabel
    {...props}
    classes={{
      iconContainer: 'step-label-icon-container',
      label: 'step-label-label-container'
    }}
  />
))`
  && {
    display: flex;
    flex-direction: column;
  }

  svg {
    display: none;
  }

  .step-label-icon-container {
    position: relative;
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: 50%;
    background: var(--color-gray-200);

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      border: 4px solid #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .step-label-label-container {
    position: absolute;
    bottom: 0;
    margin-left: -8px;
    font-family: 'Formular';
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-black-100) !important;
    line-height: 20px;
  }

  ${({ active }) =>
    active &&
    css`
      .step-label-icon-container {
        background: var(--color-primary-200);
      }
    `}
`
