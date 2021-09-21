import styled from 'styled-components'
import { CircularProgress as MuiCircularProgress } from '@material-ui/core'

export const CircularProgress = styled((props) => (
  <MuiCircularProgress {...props} classes={{ colorPrimary: 'circle-progress-color-primary' }} />
))`
  &.circle-progress-color-primary {
    color: var(--color-primary-200);
  }
`
