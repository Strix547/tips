import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { MuiThemeProvider } from '@material-ui/core'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Notifications } from 'components'

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
  const { isIdLoading, role, id } = userStore

  const currentPathname = router.pathname
  const isAuthRoute = currentPathname === ROUTES.AUTH
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
    const id = await userStore.getMyId()

    if (id) {
      await userStore.getUserRole(id)
      await userStore.getPersonalData(id)
    }

    if (id && isAuthRoute) {
      window.location.href = ROUTES.ACCOUNT
      return
    }

    if (!id && isProtectedRoute && currentPathname !== ROUTES.AUTH) {
      window.location.href = ROUTES.AUTH
    }
  }, [])

  const getContent = (isIdLoading, role, isProtectedRoute, pageProps) => {
    if (isIdLoading) return null

    if (role === 'UNVERIFIED' && isProtectedRoute && currentPathname !== ROUTES.ACCOUNT_IDENTIFY) {
      router.push(ROUTES.ACCOUNT_IDENTIFY)
      return
    }

    return <Component {...pageProps} stripePromise={stripePromise} />
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <GlobalStyles />

      <MuiThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
          {getContent(isIdLoading, role, isProtectedRoute, pageProps)}
          <Notifications />
        </Elements>
      </MuiThemeProvider>
    </>
  )
}

export default observer(App)
