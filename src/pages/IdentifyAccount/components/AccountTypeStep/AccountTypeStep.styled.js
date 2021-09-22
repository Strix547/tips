import styled from 'styled-components'

import { ErrorText } from 'styled'
import { CheckboxRow } from 'ui/Checkbox/Checkbox.styled'
import { FieldsLabel } from '../../IdentifyAccount.styled'

export { FieldsLabel, ErrorText }

export const AccountTypeStep = styled.div`
  display: flex;
  flex-direction: column;

  ${CheckboxRow} {
    &:nth-child(2) {
      margin-top: 10px;
    }

    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
`
