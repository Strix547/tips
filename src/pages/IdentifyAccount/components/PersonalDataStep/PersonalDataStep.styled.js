import styled from 'styled-components'

import { gapPolyfill } from 'styled'
import { FieldsLabel } from '../../IdentifyAccount.styled'

export { FieldsLabel }

export const PersonalDataStep = styled.form`
  display: flex;
  flex-direction: column;
  ${gapPolyfill(10)}
`
