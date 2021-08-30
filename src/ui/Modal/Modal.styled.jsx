import styled from 'styled-components'
import { Modal as MuiModal } from '@material-ui/core'

export const Modal = styled((props) => <MuiModal {...props} />)`
  /* overlay */
  & > div:first-child {
    background-color: rgba(16, 17, 18, 0.4) !important;
    cursor: pointer;
  }
`
