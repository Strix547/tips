import styled from 'styled-components'

import { Text } from 'styled'

export const QrGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 350px));
  grid-gap: 20px 25px;
`

export const NoQrCodesText = styled(Text)`
  margin-top: 15px;
  font-size: var(--font-size-md);
  text-align: center;
`

export const QrGridSkeleton = styled.div`
  & > span {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 20px 25px;
  }
`
