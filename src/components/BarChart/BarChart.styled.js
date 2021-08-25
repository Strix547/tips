import styled from 'styled-components'
import { Bar as ChartJsBar } from 'react-chartjs-2'

import { WhiteBox, Heading } from 'styled'

export { Heading }

export const BarChart = styled(WhiteBox)`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
`

export const Bar = styled(ChartJsBar)`
  margin-top: 60px;
`
