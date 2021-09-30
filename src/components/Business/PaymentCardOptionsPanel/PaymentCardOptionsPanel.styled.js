import styled from 'styled-components'

import { WhiteBox, Label, Text, gapPolyfill } from 'styled'
import { FormField } from 'ui/FormField/FormField.styled'

import { media } from 'styles/media'

const media700 = media.createMedia(700)

export { Label, Text, FormField }

export const PaymentCardOptionsPanelBusiness = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${gapPolyfill(20)}
  padding: calc(30px - 10px) calc(40px - 10px);

  ${media700} {
    padding: calc(30px - 10px) calc(20px - 10px);
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

export const DropzoneImage = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 20px;

  img {
    width: auto !important;
    height: auto !important;
    min-width: auto !important;
    min-height: auto !important;
  }
`
