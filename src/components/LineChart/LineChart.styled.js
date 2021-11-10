import styled from 'styled-components'

import { WhiteBox, Heading } from 'styled'

export { Heading }

export const LineChart = styled(WhiteBox)`
  padding: 30px;

  ${Heading} {
    margin-bottom: 30px;
  }
`

export const LineChartContainer = styled.div`
  height: 400px;
`
