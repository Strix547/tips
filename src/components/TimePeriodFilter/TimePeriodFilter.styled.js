import styled, { css } from 'styled-components'

import { RadioGroup } from 'ui'
import { Select } from 'ui/Select/Select.styled'

import { media } from 'styles/media'

const media920 = media.createMedia(920)

export const PeriodRadioGroup = styled(RadioGroup)`
  padding: 8px 10px;
  border: 1px solid var(--color-gray-200);
  border-radius: 40px;
  background: #fff;
  box-sizing: border-box;

  ${media920} {
    display: none !important;
  }
`

export const PeriodRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-black-200);
  background: transparent;
  border-radius: 50px;
  transition: 0.1s;

  ${({ active }) =>
    active &&
    css`
      color: var(--color-primary-200);
      background: #edf5ee;
    `}
`

export const TimePeriodFilter = styled.div`
  ${Select} {
    display: none;

    .select-root {
      width: 250px;
      border-radius: 46px;
    }

    .menu-paper {
      margin-top: 15px;
      padding: 10px 0;
      border-top: 1px solid var(--color-gray-400);
      border-radius: 23px;
    }
  }

  ${media920} {
    ${Select} {
      display: block;
    }
  }
`
