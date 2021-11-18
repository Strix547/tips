import styled from 'styled-components'

import { Text } from 'styled'

import { FieldsLabel } from '../../IdentifyAccount.styled'

export { FieldsLabel, Text }

export const PersonalDataStep = styled.form`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  ${FieldsLabel} {
    margin-bottom: 20px;
  }
`
