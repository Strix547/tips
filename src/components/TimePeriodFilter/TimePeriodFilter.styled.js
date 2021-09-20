import styled, { css } from 'styled-components'

import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'
import { Select } from 'ui/Select/Select.styled'
import { Modal } from 'ui/Modal/Modal.styled'

import { media } from 'styles/media'

const media1500 = media.createMedia(1500)

export const TimePeriodFilter = styled.div`
  width: 100%;

  ${RadioGroup} {
    padding: 8px 10px;
    border: 1px solid var(--color-gray-200);
    border-radius: 40px;
    background: #fff;
    box-sizing: border-box;

    ${media1500} {
      display: none !important;
    }
  }

  ${Select} {
    display: none;
    width: 250px;

    .select-root {
      border-radius: 46px;
      background: #fff;
    }

    .menu-paper {
      margin-top: 15px;
      padding: 10px 0;
      border-top: 1px solid var(--color-gray-400);
      border-radius: 23px;
    }
  }

  ${media1500} {
    ${Select} {
      display: block;
    }
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

export const DatePickerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`
