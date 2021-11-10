import styled from 'styled-components'

import { WhiteBox } from 'styled'
import { media } from 'styles/media'

import { Tabs } from 'ui/Tabs/Tabs.styled'

export const TabLine = styled(WhiteBox)`
  padding: 0 30px;
  height: 60px;
  margin-bottom: 20px;

  ${media.createMedia(960)} {
    padding: 0 20px;

    ${Tabs} .scroller {
      overflow-x: scroll !important;
    }
  }
`
