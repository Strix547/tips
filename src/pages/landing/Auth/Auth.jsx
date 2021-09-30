import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'

import { Logo } from 'common'
import { Header } from 'layout'
import { PhoneStep, CodeStep } from './components'

import { authStore } from 'store'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './Auth.styled'

import CommentRegulationIcon from '@public/img/landing/comment-regulation.svg'

export const AuthPage = observer(() => {
  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

  const [rememberUser, setRememberUser] = useState(false)
  const [isCodeSendAllow, setCodeSendAllow] = useState(true)

  const sendCode = async ({ phone, remember }) => {
    if (!isCodeSendAllow) return

    authStore.setPhone(phone)
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
    await authStore.auth({ phone, code, remember })
  }

  return (
    <>
      <Head>
        <title>Вход</title>
      </Head>

      {isTablet && <Header />}

      <S.AuthPage>
        <S.Left>
          <S.LeftContent>
            {!isTablet && <Logo />}

            <S.Heading level={1}>Вход в Tips.me</S.Heading>

            {authStore.step === 'phone' ? (
              <PhoneStep onPhoneSubmit={sendCode} />
            ) : (
              <CodeStep
                phone={authStore.phone}
                isCodeSendAllow={isCodeSendAllow}
                onCodeSendAllowChange={setCodeSendAllow}
                onCodeResend={() => {
                  onCodeResend(authStore.phone)
                }}
                onCodeConfirm={(code) =>
                  onAuth({ phone: authStore.phone, code, remember: rememberUser })
                }
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
