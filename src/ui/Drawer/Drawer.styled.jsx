import styled from 'styled-components'
import MuiDrawer from '@material-ui/core/Drawer'

export const Drawer = styled((props) => <MuiDrawer {...props} />)`
  .MuiBackdrop-root {
    background: rgba(16, 17, 18, 0.3);
  }
`
