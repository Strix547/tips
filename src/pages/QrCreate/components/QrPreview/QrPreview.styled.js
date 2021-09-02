import styled from 'styled-components'

import { WhiteBox, Text, Label } from 'styled'

export { Text, Label }

export const QrPreview = styled(WhiteBox)`
  border: 2px solid var(--color-gray-200);

  & > ${Text} {
    margin-top: 20px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-gray-300);
    line-height: 20px;
    text-align: center;
  }
`

export const Top = styled.div``

export const EmployeeInfo = styled.div``

export const ImpressionRow = styled.div``
