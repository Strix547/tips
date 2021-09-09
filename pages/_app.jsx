import { useEffect } from 'react'
import { MuiThemeProvider } from '@material-ui/core'

import { StoreProvider, RootStore } from 'stores'

import { createTheme } from '@material-ui/core/styles'

import 'styles/fonts.css'
import { GlobalStyles } from 'styles/GlobalStyles'

export default function App({ Component, pageProps }) {
  const { user } = new RootStore()

  useEffect(() => {
    // user.getMyId()
  }, [user])

  const theme = createTheme({
    props: {
      MuiButtonBase: { disableRipple: true }
    },
    breakpoints: {
      values: {
        mobile: 405,
        tablet: 798,
        laptop: 1210
      }
    }
  })

  return (
    <>
      <GlobalStyles />
      <StoreProvider {...pageProps}>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </StoreProvider>
    </>
  )
}
