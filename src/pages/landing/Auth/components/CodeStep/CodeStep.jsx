import { useState, useRef, useMemo } from 'react'
import Countdown from 'react-countdown'

import { Button } from 'ui'

import * as S from './CodeStep.styled'

export const CodeStep = ({
  phone,
  isCodeSendAllow,
  onCodeSendAllowChange,
  onCodeResend,
  onCodeConfirm
}) => {
  const countdownRef = useRef(null)

  const [code, setCode] = useState(null)

  const codeCooldown = 59000

  const [_, one, two, three, four, five, six, seven, eight, nine, ten, eleven] = phone || []
  const phoneLabel = `+${one} ${two}${three}${four} ${five}${six}${seven}-${eight}${nine}-${ten}${eleven}`

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
        Отправили код подтверждения на номер <br /> {phoneLabel}
      </S.SendText>

      <S.Label>Пароль из смс</S.Label>

      <S.CodeInput value={code} onChange={setCode} fields={4} autoFocus />

      {useMemo(
        () => (
          <Countdown
            ref={countdownRef}
            date={Date.now() + codeCooldown}
            intervalDelay={1000}
            renderer={({ seconds }) =>
              isCodeSendAllow ? (
                <S.SendCodeButton onClick={onResendClick}>Отправить код повторно</S.SendCodeButton>
              ) : (
                <S.CountdownText>Отправить код еще раз через {seconds} сек.</S.CountdownText>
              )
            }
            onComplete={() => {
              onCodeSendAllowChange(true)
            }}
          />
        ),
        [countdownRef, isCodeSendAllow]
      )}

      <Button disabled={code?.length !== 4} onClick={() => onCodeConfirm(code)}>
        Войти
      </Button>
    </S.CodeStep>
  )
}
