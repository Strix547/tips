import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { MuiThemeProvider } from '@material-ui/core'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import NProgress from 'nprogress'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Notifications } from 'components'

import { userStore, authStore, localStore } from 'store'
import { ROUTE_NAMES, ROUTES } from 'core/routes'

import { createTheme } from '@material-ui/core/styles'

import { GlobalStyles } from 'styles/GlobalStyles'
import 'styles/fonts.css'

const stripePromise = loadStripe(
  'pk_test_51JXcqEBmR4XWceWFiU56mb6ztWQMkIrdrJvl2CkW9WGcoHcbfkZCzieUTSl2UUvmRIf985mgIXjrKDy3oWv6FJta002OlQs1Y3'
)

const App = ({ Component, pageProps }) => {
  const router = useRouter()
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

  const { isIdLoading, id: userId, role } = userStore
  const { lang } = localStore

  const currentPathname = router.pathname
  const isAuthRoute = currentPathname === ROUTE_NAMES.AUTH
  const currentRouteConfig = ROUTES.find(({ path }) => currentPathname === path)
  const isProtectedRoute = currentRouteConfig?.isProtected
  const isBusinessRoute = currentRouteConfig?.role === 'BUSINESS'
  const isAdminRoute = currentRouteConfig?.role === 'ADMIN'

  // const onRouteLoading = () => {
  //   NProgress.start()
  // }

  // const onRouteLoaded = () => {
  //   NProgress.done()
  // }

  // useEffect(() => {
  //   router.events.on('routeChangeStart', onRouteLoading)
  //   router.events.on('routeChangeComplete', onRouteLoaded)
  //   router.events.on('routeChangeError', onRouteLoaded)

  //   return () => {
  //     router.events.off('routeChangeStart', onRouteLoading)
  //     router.events.off('routeChangeComplete', onRouteLoaded)
  //     router.events.off('routeChangeError', onRouteLoaded)
  //   }
  // }, [])

  useEffect(async () => {
    // first load data and redirects

    const id = await userStore.getMyId()

    if (!id && isProtectedRoute && !isAuthRoute) {
      router.push(ROUTE_NAMES.AUTH)
      return
    }

    if (!id) return

    const role = await userStore.getUserRole(id)
    await userStore.getPersonalData(id)

    if (
      role === 'UNVERIFIED' &&
      (isProtectedRoute || currentPathname === ROUTE_NAMES.AUTH) &&
      currentPathname !== ROUTE_NAMES.ACCOUNT_IDENTIFY
    ) {
      router.push(ROUTE_NAMES.ACCOUNT_IDENTIFY)
      return
    }

    if (role !== 'BUSINESS' && isBusinessRoute && role !== 'ADMIN') {
      router.push(ROUTE_NAMES.ACCOUNT_UPGRADE_TO_BUSINESS)
      return
    }

    if (role !== 'ADMIN' && isAdminRoute) {
      router.push(ROUTE_NAMES.ACCOUNT)
      return
    }

    if (role === 'ADMIN' && isProtectedRoute) {
      router.push(ROUTE_NAMES.ADMIN_USERS)
      return
    }

    if (role === 'BUSINESS' && currentPathname === ROUTE_NAMES.ACCOUNT_UPGRADE_TO_BUSINESS) {
      router.push(ROUTE_NAMES.ACCOUNT)
      return
    }

    if (isAuthRoute) {
      router.push(ROUTE_NAMES.ACCOUNT)
    }
  }, [])

  useEffect(() => {
    if (!role) return

    if (role !== 'BUSINESS' && isBusinessRoute && role !== 'ADMIN') {
      router.push(ROUTE_NAMES.ACCOUNT_UPGRADE_TO_BUSINESS)
      return
    }

    if (role === 'BUSINESS' && currentPathname === ROUTE_NAMES.ACCOUNT_UPGRADE_TO_BUSINESS) {
      router.push(ROUTE_NAMES.ACCOUNT)
    }
  }, [role, currentPathname])

  useEffect(async () => {
    if (!lang && router) {
      const langCode = await localStore.getSuggestedLanguage()
      router.replace(currentPathname, currentPathname, { locale: langCode.toLowerCase() })
    }
  }, [lang, router, currentPathname])

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
          {!isIdLoading && (userId || userId === 0) ? (
            <Component {...pageProps} stripePromise={stripePromise} />
          ) : null}
          <Notifications />
        </Elements>
      </MuiThemeProvider>
    </>
  )
}

export default appWithTranslation(observer(App))
