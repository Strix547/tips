import styled from 'styled-components'

import { Heading, Text, Wrapper } from 'styled'

export { Heading, Text, Wrapper }

export const PageBanner = styled.div`
  display: flex;
  align-items: center;
  height: 650px;
  background: linear-gradient(96.58deg, #f7f8fb 36.86%, #f7f7fb 83.4%, #f9effb 129.94%);
  overflow: hidden;

  ${Wrapper} {
    position: relative;
    justify-content: center;
    height: 100%;
  }
`

export const Left = styled.div`
  position: relative;
  width: 590px;
  z-index: 10;
`

export const Subtitle = styled(Text)`
  max-width: 560px;
  margin-top: 30px;
  font-size: var(--font-size-600);
  font-weight: 500;
  line-height: 28px;
`

export const FeatureList = styled.ul``

export const ActionRow = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 30px;
`

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: 100vw;
  height: 100%;
`

export const Img = styled.div`
  position: absolute;
  left: 482px;
  bottom: 50x;
  z-index: 10;
`
