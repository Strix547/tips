import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'

import { Logo } from 'common'
import { Header } from 'layout'
import { PhoneField, Button, Switch } from 'ui'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './SignIn.styled'

import CommentRegulationIcon from '@public/img/landing/comment-regulation.svg'

export const SignInPage = () => {
  const useFormProps = useForm()
  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

  const [isPhoneFilled, setPhoneFilled] = useState(false)
  const [isCodeFilled, setCodeFilled] = useState(false)
  const [isCodeSended, setCodeSended] = useState(false)
  const [codeCountdown, setCodeCountdown] = useState(30)
  const [allowSendCode, setAllowSendCode] = useState(false)

  const phone = useFormProps.watch('phone')

  useEffect(() => {
    if (phone?.length === 11) {
      setPhoneFilled(true)
    } else {
      setPhoneFilled(false)
    }
  }, [phone])

  useEffect(() => {
    if (!isCodeSended || allowSendCode) return

    const timer = setInterval(() => setCodeCountdown(codeCountdown - 1), 1000)

    if (codeCountdown === 0) {
      setAllowSendCode(true)
      setCodeCountdown(30)
    }

    return () => clearInterval(timer)
  }, [isCodeSended, allowSendCode, codeCountdown])

  const sendCode = () => {
    // sendCode(phone)
    setCodeSended(true)
  }

  const onCodeChange = (value) => {
    if (value.length !== 4) {
      setCodeFilled(false)
    }
  }

  const [one, two, three, four, five, six, seven, eight, nine, ten, eleven] = phone || []
  const phoneLabel = `+${one} ${two}${three}${four} ${five}${six}${seven}-${eight}${nine}-${ten}${eleven}`

  const phoneStep = (
    <S.PhoneStep>
      <FormProvider {...useFormProps}>
        <PhoneField name="phone" country="ru" placeholder="+7 (___) ___-__-__" />

        <Switch name="remember" label="Запомнить меня" />

        <Button disabled={!isPhoneFilled} onClick={sendCode}>
          Продолжить
        </Button>
      </FormProvider>
    </S.PhoneStep>
  )

  const codeStep = (
    <S.CodeStep>
      <FormProvider {...useFormProps}>
        <S.SendText>
          Отправили код подтверждения на номер <br /> {phoneLabel}
        </S.SendText>

        <S.Label>Пароль из смс</S.Label>

        <S.CodeInput fields={4} onChange={onCodeChange} onComplete={() => setCodeFilled(true)} />

        <S.CountdownText>Отправить код еще раз через {codeCountdown} сек.</S.CountdownText>

        <Button disabled={!isCodeFilled}>Войти</Button>
      </FormProvider>
    </S.CodeStep>
  )

  return (
    <>
      {isTablet && <Header />}

      <S.SignIn>
        <S.Left>
          <S.LeftContent>
            {!isTablet && <Logo />}

            <S.Heading level={1}>Вход в Tips.me</S.Heading>

            {!isCodeSended ? phoneStep : codeStep}
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
