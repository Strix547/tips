import styled from 'styled-components'
import { Drawer as MuiDrawer } from '@material-ui/core'

export const Drawer = styled((props) => <MuiDrawer {...props} />)`
  .MuiBackdrop-root {
    background: rgba(16, 17, 18, 0.3);
  }
`
