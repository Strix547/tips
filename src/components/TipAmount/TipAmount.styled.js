import styled, { css } from 'styled-components'

import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'
import { FormField } from 'ui/FormField/FormField.styled'

export const TipAmount = styled.div`
  ${FormField} {
    .form-field-input-root {
      background: #fff;
    }
  }

  ${RadioGroup} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-top: 20px;

    .form-control-label {
      width: 100%;
    }
  }
`

export const BaseAmountRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 10px;
  background: var(--color-gray-700);
  border-radius: 50px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-black-200);
  box-sizing: border-box;
  transition: 0.1s;

  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background: var(--color-primary-200);
    `}
`
