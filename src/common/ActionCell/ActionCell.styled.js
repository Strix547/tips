import styled from 'styled-components'

import { media } from 'styles/media'

export const ActionCell = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      transition: 0.3s;

      &:hover {
        fill: var(--color-primary-200);
        transition: 0.3s;
      }
    }
  }

  ${media.createMedia(852)} {
    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`
