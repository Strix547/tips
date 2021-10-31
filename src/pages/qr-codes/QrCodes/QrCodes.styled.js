import styled, { css } from 'styled-components'

import { Text } from 'styled'
import { media } from 'styles/media'

const qrGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 350px));
  grid-gap: 20px 25px;

  ${media.createMedia(754)} {
    grid-template-columns: 1fr;
  }
`

export const QrGrid = styled.ul`
  ${qrGridStyles}
`

export const QrGridSkeleton = styled.div`
  & > span {
    ${qrGridStyles}
  }
`

export const NoQrCodesText = styled(Text)`
  margin-top: 15px;
  font-size: var(--font-size-md);
`
