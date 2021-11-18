import styled from 'styled-components'
import MuiModal from '@material-ui/core/Modal'

export const Modal = styled((props) => <MuiModal {...props} />)`
  /* overlay */
  & > div:first-child {
    background-color: rgba(0, 0, 0, 0.4) !important;
    cursor: pointer;
  }
`
