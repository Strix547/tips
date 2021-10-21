import styled from 'styled-components'

import { media } from 'styles/media'

import { Switch } from 'ui/Switch/Switch.styled'

export const ActionsForm = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  ${Switch} {
    margin-right: 0;

    .switch-base {
      transform: translate(-8px, -1px);

      &.Mui-checked {
        transform: translate(8px, -1px);
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  ${media.createMedia(852)} {
    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`
