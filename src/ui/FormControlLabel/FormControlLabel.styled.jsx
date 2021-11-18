import styled from 'styled-components'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel'

export const FormControlLabel = styled((props) => (
  <MuiFormControlLabel
    {...props}
    classes={{ root: 'form-control-label-root', label: 'form-control-label' }}
  />
))`
  && {
    margin: 0;
  }

  .form-control-label {
    font-family: Formular;
    font-size: var(--font-size-reg);
    color: var(--color-black-100);
  }
`
