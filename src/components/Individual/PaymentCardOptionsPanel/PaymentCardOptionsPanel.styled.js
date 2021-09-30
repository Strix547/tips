import styled from 'styled-components'

import { WhiteBox, Label, Text, gapPolyfill } from 'styled'
import { FormField } from 'ui/FormField/FormField.styled'

import { media } from 'styles/media'

const media700 = media.createMedia(700)

export { Label, Text, FormField }

export const PaymentCardOptionsPanelIndividual = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${gapPolyfill(20)}
  padding: calc(30px - 10px) calc(40px - 10px);

  ${media700} {
    padding: 30px 20px;
  }
`

export const AmountPresetsRow = styled.div`
  width: 100%;
`

export const AmountPresetsFields = styled.div`
  display: flex;
  ${gapPolyfill(10)}

  ${FormField} {
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  ${media700} {
    flex-direction: column;
  }
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 20px 30px;

  ${Label} {
    margin-bottom: 0;
  }
`
