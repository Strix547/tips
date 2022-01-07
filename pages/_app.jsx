import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { MuiThemeProvider } from '@material-ui/core'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Head from 'next/head'

import { Notifications } from 'components'
import { CircularProgress } from 'ui'

import { userStore, localStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'
import { stripeKey } from 'core/constants'

import { createTheme } from '@material-ui/core/styles'

import { GlobalStyles } from 'styles/GlobalStyles'

import 'styles/fonts.css'
import 'swiper/swiper.min.css'

const stripePromise = loadStripe(String(stripeKey))

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const theme = createTheme({
    props: {
      MuiButtonBase: { disableRipple: true }
    }
  })

  const { id, role } = userStore
  const { lang } = localStore
  const currentPathname = router.pathname
  const { protected: isProtectedPage, roles: pageRoles } = pageProps

  useEffect(async () => {
    if (id) return

    const id = await userStore.getMyId()

    if (isProtectedPage && !id) {
      router.push(ROUTE_NAMES.AUTH)
    }
  }, [userStore, isProtectedPage, router])

  useEffect(() => {
    if (id) {
      userStore.getUserRole(id)
      userStore.getPersonalData(id)
    }
  }, [id])

  useEffect(async () => {
    if (lang) return

    const storageLang = localStorage.getItem('lang')

    if (storageLang) {
      router.replace({ pathname: currentPathname, query: router.query }, router.asPath, {
        locale: storageLang.toLowerCase()
      })
      return
    }

    const lang = await localStore.getLanguage()
    router.replace({ pathname: currentPathname, query: router.query }, router.asPath, {
      locale: lang.toLowerCase()
    })
  }, [lang, currentPathname])

  useEffect(() => {
    if (!role) return

    const isAuthRoute = currentPathname === ROUTE_NAMES.AUTH
    const isIdentifyRoute = currentPathname === ROUTE_NAMES.ACCOUNT_IDENTIFY
    const isRequisitesRoute = currentPathname === ROUTE_NAMES.ACCOUNT_REQUISITES

    if (role === 'UNVERIFIED' && !isIdentifyRoute && !isRequisitesRoute) {
      router.push(ROUTE_NAMES.ACCOUNT_REQUISITES)
      return
    }

    if (pageRoles && !pageRoles.includes(role)) {
      router.push(ROUTE_NAMES.ACCOUNT)
      toast.warning('No permission for this page')
    }
  }, [role, isProtectedPage, pageRoles, currentPathname])

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
          {pageProps.protected && (!id || !role || (role && !pageRoles.includes(role))) ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
              }}
            >
              <CircularProgress size={80} />
            </div>
          ) : (
            <Component {...pageProps} />
          )}
          <Notifications />
        </Elements>
      </MuiThemeProvider>
    </>
  )
}

export default appWithTranslation(observer(App))
