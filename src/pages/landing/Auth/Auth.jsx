import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'

import { Logo } from 'common'
import { Header } from 'layout'
import { PhoneStep, CodeStep } from './components'

import { authStore } from 'store'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './Auth.styled'

import CommentRegulationIcon from '@public/img/landing/comment-regulation.svg'

export const AuthPage = () => {
  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

  const [step, setStep] = useState('phone')
  const [phone, setPhone] = useState(null)
  const [rememberUser, setRememberUser] = useState(false)
  const [isCodeSendAllow, setCodeSendAllow] = useState(true)

  const sendCode = async ({ phone, remember }) => {
    if (!isCodeSendAllow) return

    setPhone(phone)
    setRememberUser(remember)
    const isCodeSended = await authStore.sendCode(phone)

    if (isCodeSended) {
      setStep('code')
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

      <S.SignIn>
        <S.Left>
          <S.LeftContent>
            {!isTablet && <Logo />}

            <S.Heading level={1}>Вход в Tips.me</S.Heading>

            {step === 'phone' ? (
              <PhoneStep onPhoneSubmit={sendCode} />
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
      </S.SignIn>
    </>
  )
}
