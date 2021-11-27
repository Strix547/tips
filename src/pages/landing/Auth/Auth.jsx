import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Logo } from 'common'
import { Header } from 'layout'
import { PhoneStep, CodeStep } from './components'

import { authStore } from 'store'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './Auth.styled'

import CommentRegulationIcon from '@public/img/landing/comment-regulation.svg'

export const AuthPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

  const [rememberUser, setRememberUser] = useState(false)
  const [isCodeSendAllow, setCodeSendAllow] = useState(true)

  const { phone } = authStore.authData
  const phoneDefault = authStore.authData.phone

  const setAuthDataFromLocalStorage = () => {
    const phone = localStorage.getItem('phone')
    const firstName = localStorage.getItem('firstName')
    const email = localStorage.getItem('email')

    if (phone) {
      authStore.setAuthData({ ...authStore.authData, phone })
    }
    if (firstName) {
      authStore.setAuthData({ ...authStore.authData, firstName })
    }
    if (email) {
      authStore.setAuthData({ ...authStore.authData, email })
    }
  }

  useEffect(() => {
    if (!localStorage) return

    setAuthDataFromLocalStorage()
  }, [authStore])

  const sendCode = async ({ phone, remember }) => {
    if (!isCodeSendAllow) return

    authStore.setAuthData({ phone })
    setRememberUser(remember)
    const isCodeSended = await authStore.sendCode(phone)

    if (isCodeSended) {
      setCodeSendAllow(false)
    }
  }

  const onCodeResend = (phone) => {
    authStore.sendCode(phone)
    setCodeSendAllow(false)
  }

  const onAuth = async ({ phone, code, remember }) => {
    await authStore.auth({ phone, code, remember, referralAgentId: parseInt(router.query.agent) })
  }

  return (
    <>
      <Head>
        <title>{t('logIn')}</title>
      </Head>

      {isTablet && <Header />}

      <S.AuthPage>
        <S.Left>
          <S.LeftContent>
            {!isTablet && <Logo />}

            <S.Heading level={1}>{t('login-into-fly')}</S.Heading>

            {authStore.step === 'phone' ? (
              <PhoneStep defaultPhone={phoneDefault} onPhoneSubmit={sendCode} />
            ) : (
              <CodeStep
                phone={phone}
                isCodeSendAllow={isCodeSendAllow}
                onCodeSendAllowChange={setCodeSendAllow}
                onCodeResend={() => {
                  onCodeResend(phone)
                }}
                onCodeConfirm={(code) => onAuth({ phone, code, remember: rememberUser })}
              />
            )}
          </S.LeftContent>
        </S.Left>

        {!isTablet && (
          <S.Right>
            <CommentRegulationIcon />
          </S.Right>
        )}
      </S.AuthPage>
    </>
  )
})
