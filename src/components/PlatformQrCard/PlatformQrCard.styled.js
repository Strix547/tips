import styled from 'styled-components'

import { WhiteBox } from 'styled'
import { QrImage } from 'components/QrImage/QrImage.styled'

export const PlatformQrCard = styled(WhiteBox)`
  padding: 20px 30px;
  box-sizing: border-box;

  ${QrImage} {
    margin-top: 20px;
  }
`

export const Label = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  font-family: 'Formular';
  font-size: var(--font-size-md);
  font-weight: 500;
  line-height: 28px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  svg {
    margin-left: 10px;

    path {
      transition: 0.3s;
    }
  }

  &:hover {
    color: var(--color-primary-200);
    transition: 0.3s;

    svg {
      path {
        stroke: var(--color-primary-200);
        transition: 0.3s;
      }
    }
  }
`

export const AppleWallet = styled.div`
  margin-top: 10px;

  button {
    width: 100%;
    padding: 0 40px;
    font-size: var(--font-size-sm);
    color: var(--color-black-200);
    background: var(--color-gray-700);
  }
`

export const ActionRow = styled.div`
  display: flex;
  grid-gap: 20px;
  margin-top: 20px;

  button {
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    &:hover {
      svg {
        fill: var(--color-primary-200);
        transition: 0.3s;
      }
    }

    &:nth-child(3) {
      margin-left: auto;
    }

    svg {
      transition: 0.3s;
    }
  }
`
