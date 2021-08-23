import { useMediaQuery } from 'react-responsive'
import Img from 'next/image'

import * as S from './ServiceWorkSteps.styled'

import screenSignUp from '@public/img/landing/screen-sign-up.png'
import screenCreateQr from '@public/img/landing/screen-create-qr.png'
import screenScanQr from '@public/img/landing/screen-scan-qr.png'
import screenPay from '@public/img/landing/screen-pay.png'
import screenThank from '@public/img/landing/screen-thank.png'

export const ServiceWorkSteps = () => {
  const screenMore1150 = useMediaQuery({ minWidth: 1151 })

  const steps = [
    { title: 'Регистрация в сервисе', img: screenSignUp },
    { title: 'Получатель создает QR-код', img: screenCreateQr },
    { title: 'Клиент сканирует QR-код', img: screenScanQr },
    { title: 'Клиент вводит сумму и оплачивает', img: screenPay },
    { title: 'Получатель получает деньги', img: screenThank }
  ]

  const stepList = steps.map(({ title, img }, idx) => (
    <li key={title}>
      <Img src={img} alt={title} />
      <S.Text>{title}</S.Text>
      {screenMore1150 && <S.Counter>{idx + 1}</S.Counter>}
    </li>
  ))

  return <S.ServiceWorkSteps>{stepList}</S.ServiceWorkSteps>
}
