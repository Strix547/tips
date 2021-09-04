import styled, { css } from 'styled-components'

import { WhiteBox, Label, Text } from 'styled'
import { FormField } from 'ui/FormField/FormField.styled'

export { Label, Text }

export const QrOptionsPanel = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 20px;
  padding: 30px 40px;
`

export const AmountPresetsRow = styled.div``

export const AmountPresetsFields = styled.div`
  display: flex;
  grid-gap: 10px;

  ${FormField} {
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px 30px;
`

export const Dropzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1px dashed var(--color-gray-400);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;

  ${({ borderGreen }) =>
    borderGreen &&
    css`
      border-color: var(--color-primary-200);
    `}

  ${Text} {
    margin-left: 15px;
    font-weight: 500;
    color: var(--color-black-200);
  }

  img {
    max-height: 60px !important;
    min-height: auto !important;
    height: auto !important;
  }
`
