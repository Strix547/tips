import styled, { css } from 'styled-components'

import { Text } from 'styled'
import { RadioGroup } from 'ui'

export { Text }

export const EmodjiSelect = styled.div`
  margin-top: 20px;

  ${Text} {
    text-align: center;
    font-weight: 500;
    color: var(--color-black-200);
  }
`

export const EmodjiRadioGroup = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const EmodjiRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  background: var(--color-gray-200);
  border-radius: 50%;
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      background: var(--color-primary-200);
    `}
`
