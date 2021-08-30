import styled, { css } from 'styled-components'

import { RadioGroup } from 'ui'
import { FormField } from 'ui/FormField/FormField.styled'

export const TipAmount = styled.div`
  ${FormField} {
    .form-field-input-root {
      background: #fff;
    }
  }
`

export const BaseAmountRadioGroup = styled(RadioGroup)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  margin-top: 20px;
`

export const BaseAmountRadio = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 25px;
  background: var(--color-gray-700);
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-black-200);
  transition: 0.3s;

  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background: var(--color-primary-200);
    `}
`
