import styled, { css } from 'styled-components'

import { RadioGroup } from 'ui'

export const TimePeriodFilter = styled(RadioGroup)`
  padding: 8px 20px;
  border: 1px solid var(--color-gray-200);
  border-radius: 40px;
  background: #fff;
  box-sizing: border-box;
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
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      color: var(--color-primary-200);
      background: #edf5ee;
    `}
`
