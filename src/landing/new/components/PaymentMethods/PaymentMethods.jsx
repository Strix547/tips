import React from 'react'
import Image from 'next/image'

import * as S from './PaymentMethods.styled'

import applePay from '@public/img/landing/new/payments/apple-pay.png'
import googlePay from '@public/img/landing/new/payments/google-pay.png'
import visa from '@public/img/landing/new/payments/visa.png'
import mastercard from '@public/img/landing/new/payments/mastercard.png'
import americanExpress from '@public/img/landing/new/payments/american-express.png'
import discover from '@public/img/landing/new/payments/discover.png'
import JCB from '@public/img/landing/new/payments/jcb.png'

export const PaymentMethods = () => {
  const methods = [
    { img: applePay.src, alt: 'apple pay' },
    { img: googlePay.src, alt: 'google pay' },
    { img: visa.src, alt: 'visa' },
    { img: mastercard.src, alt: 'mastercard' },
    { img: americanExpress.src, alt: 'american express' },
    { img: discover.src, alt: 'discover' },
    { img: JCB.src, alt: 'JCB' }
  ]

  const methodsItems = methods.map(({ img, alt }) => {
    return (
      <li key={alt}>
        <img src={img} alt={alt} />
      </li>
    )
  })

  return (
    <S.PaymentMethods id="payment-methods">
      <S.Wrapper>
        <ul>{methodsItems}</ul>
      </S.Wrapper>
    </S.PaymentMethods>
  )
}
