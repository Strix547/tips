import styled from 'styled-components'

import { WhiteBox, Label, Text } from 'styled'

import { media } from 'styles/media'

export { Label, Text }

export const TipsDistribution = styled(WhiteBox)`
  padding: 30px 40px;

  ${media.createMedia(570)} {
    padding: 20px;
  }
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
`

export const MarksRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`

export const Marks = styled.div`
  ${Text} {
    &:first-child {
      font-weight: 500;
      line-height: 22px;
    }

    &:last-child {
      margin-top: 5px;
      font-size: var(--font-size-sm);
      color: var(--color-gray-300);
      line-height: 20px;
    }
  }
`

export const MarksLeft = styled(Marks)``

export const MarksRight = styled(Marks)`
  text-align: right;
`
