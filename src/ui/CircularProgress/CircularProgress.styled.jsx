import styled from 'styled-components'
import MuiCircularProgress from '@material-ui/core/CircularProgress'

export const CircularProgress = styled((props) => (
  <MuiCircularProgress {...props} classes={{ colorPrimary: 'circle-progress-color-primary' }} />
))`
  &.circle-progress-color-primary {
    color: var(--color-primary-200);
  }
`
