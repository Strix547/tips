import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { MuiThemeProvider } from '@material-ui/core'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { AccountIdentifyModal, Notifications } from 'components'

import { userStore } from 'store'
import { ROUTES, PROTECTED_ROUTES } from 'core/routes'

import { createTheme } from '@material-ui/core/styles'

import { GlobalStyles } from 'styles/GlobalStyles'
import 'styles/fonts.css'

const stripePromise = loadStripe(
  'pk_test_51JXcqEBmR4XWceWFiU56mb6ztWQMkIrdrJvl2CkW9WGcoHcbfkZCzieUTSl2UUvmRIf985mgIXjrKDy3oWv6FJta002OlQs1Y3'
)

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const { role } = userStore

  const currentPathname = router.pathname
  const isAuthRoute = ROUTES.AUTH === currentPathname
  const isProtectedRoute = PROTECTED_ROUTES.includes(currentPathname)

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

  useEffect(async () => {
    if (window === undefined || !router) return

    // check is auth
    const id = await userStore.getMyId()

    if (id) {
      await userStore.getUserRole(id)
      await userStore.getPersonalData(id)
    }

    if (id && isAuthRoute) {
      router.push(ROUTES.ACCOUNT)
    }

    if (!id && isProtectedRoute) {
      router.push(ROUTES.AUTH)
    }
  }, [])

  return (
    <>
      <Script src="//localhost:8098" />

      <GlobalStyles />

      <MuiThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
          {/* <Component {...pageProps} /> */}
          {role === 'UNVERIFIED' && isProtectedRoute ? (
            <AccountIdentifyModal open />
          ) : (
            <Component {...pageProps} />
          )}
          <Notifications />
        </Elements>
      </MuiThemeProvider>
    </>
  )
}

export default observer(App)
