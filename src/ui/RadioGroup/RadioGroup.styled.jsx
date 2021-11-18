import styled from 'styled-components'
import MuiRadioGroup from '@material-ui/core/RadioGroup'

export const RadioGroup = styled((props) => (
  <MuiRadioGroup {...props} classes={{ root: 'radio-group-root' }} />
))`
  && {
    flex-direction: row;
  }

  .form-control-label-root {
    & > span:first-child {
      position: absolute;
      opacity: 0;
    }
  }
`
