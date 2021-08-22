import { MuiThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'

import 'styles/fonts.css'

import { GlobalStyles } from 'styles/GlobalStyles'

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    props: {
      MuiButtonBase: { disableRipple: true }
    }
  })

  return (
    <>
      <GlobalStyles />
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  )
}
