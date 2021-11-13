import { useState, useRef, useMemo } from 'react'
import Countdown from 'react-countdown'
import { useTranslation } from 'next-i18next'

import { Button } from 'ui'

import * as S from './CodeStep.styled'

export const CodeStep = ({
  phone,
  isCodeSendAllow,
  onCodeSendAllowChange,
  onCodeResend,
  onCodeConfirm
}) => {
  const { t } = useTranslation('common')
  const countdownRef = useRef(null)

  const [code, setCode] = useState(null)

  const codeCooldown = 59000

  const onResendClick = () => {
    if (countdownRef?.current) {
      onCodeResend()
      onCodeSendAllowChange(false)
      countdownRef.current.start()
    }
  }

  return (
    <S.CodeStep>
      <S.SendText>
        {t('we-sent-sms')} <br /> +{phone}
      </S.SendText>

      <S.Label>{t('password-from-sms')}</S.Label>

      <S.CodeInput value={code} onChange={setCode} fields={4} autoFocus />

      {useMemo(
        () => (
          <Countdown
            ref={countdownRef}
            date={Date.now() + codeCooldown}
            intervalDelay={1000}
            autoFocus
            renderer={({ seconds }) =>
              isCodeSendAllow ? (
                <S.SendCodeButton onClick={onResendClick}>{t('send-again')}</S.SendCodeButton>
              ) : (
                <S.CountdownText>
                  {t('send-sms-once-again-in')} {seconds} {t('seconds')}
                </S.CountdownText>
              )
            }
            onComplete={() => {
              onCodeSendAllowChange(true)
            }}
          />
        ),
        [countdownRef, isCodeSendAllow]
      )}

      <Button
        type="button"
        disabled={code?.length !== 4}
        onClick={() => {
          onCodeConfirm(code)
        }}
      >
        {t('logIn')}
      </Button>
    </S.CodeStep>
  )
}
