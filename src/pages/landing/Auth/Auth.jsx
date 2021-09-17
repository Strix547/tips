import { useState, useEffect } from 'react'
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

  const [step, setStep] = useState('phone')
  const [phone, setPhone] = useState(null)
  const [rememberUser, setRememberUser] = useState(false)
  const [isCodeSendAllow, setCodeSendAllow] = useState(true)

  useEffect(() => {
    if (authStore.isCodeSended) {
      setStep('code')
      setCodeSendAllow(false)
    }
  }, [authStore.isCodeSended])

  const onCodeSend = async ({ phone, remember }) => {
    if (!isCodeSendAllow) return

    const phoneWithPlus = `+${phone}`

    setPhone(phoneWithPlus)
    setRememberUser(remember)
    authStore.sendCode(phoneWithPlus)
  }

  const onCodeResend = (phone) => {
    authStore.sendCode(phone)
    setCodeSendAllow(false)
  }

  const auth = ({ phone, code, remember }) => {
    authStore.auth({ phone, code, remember })
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
              <PhoneStep onCodeSend={onCodeSend} />
            ) : (
              <CodeStep
                phone={phone}
                isCodeSendAllow={isCodeSendAllow}
                onCodeSendAllowChange={setCodeSendAllow}
                onCodeResend={() => {
                  onCodeResend(phone)
                }}
                onCodeConfirm={(code) => auth({ phone, code, remember: rememberUser })}
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
})
