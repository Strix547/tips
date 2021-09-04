import styled, { css } from 'styled-components'
import { Switch as MuiSwitch } from '@material-ui/core'

const getSizeStyles = (size) => {
  switch (size) {
    case 'big':
      return css`
        width: 64px;
        height: 32px;

        .switch-base {
          transform: translateX(-15px);

          &.Mui-checked {
            transform: translateX(15px);
          }
        }

        .switch-thumb {
          width: 24px;
          height: 24px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.07);
        }
      `
  }
}

export const Switch = styled(({ size, ...props }) => (
  <MuiSwitch
    {...props}
    disableRipple
    classes={{
      root: 'switch-root',
      switchBase: 'switch-base',
      track: 'switch-track',
      thumb: 'switch-thumb',
      colorSecondary: 'switch-color-secondary'
    }}
  />
))`
  && {
    width: 40px;
    height: 22px;
    padding: 0;
    margin-right: 10px;
    overflow: visible;

    ${({ size }) => getSizeStyles(size)}
  }

  .switch-base {
    width: 100%;
    height: 100%;
    overflow: visible;
    padding: 1px 0;
    transform: translateX(-8px);

    &:hover {
      background-color: transparent;
    }

    &.Mui-checked {
      transform: translateX(8px);
    }
  }

  .switch-thumb {
    width: 16px;
    height: 16px;
    background: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  }

  .switch-track {
    background: var(--color-gray-700);
    opacity: 1;
    border: 1px solid var(--color-gray-400);
    border-radius: 18px;
  }

  .switch-color-secondary {
    &.Mui-checked {
      &:hover {
        background: transparent;
      }

      & + .switch-track {
        background-color: var(--color-primary-200);
        border-color: var(--color-primary-200);
        opacity: 1;
      }
    }
  }
`

export const SwitchField = styled.div``
