import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Controller, Navigation } from 'swiper/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { localeImg } from 'utils'

import { MEDIA_LAPTOP } from 'styles/media'

import * as S from './ServiceWorkSteps.styled'

import screenSignUp from '@public/img/landing/screen-sign-up.png'
import screenSignUpEn from '@public/img/landing/screen-sign-up-en.png'
import screenSignUpFr from '@public/img/landing/screen-sign-up-fr.png'

import screenCreateQr from '@public/img/landing/screen-create-qr.png'
import screenCreateQrEn from '@public/img/landing/screen-create-qr-en.png'
import screenCreateQrFr from '@public/img/landing/screen-create-qr-fr.png'

import screenScanQr from '@public/img/landing/screen-scan-qr.png'
import screenScanQrEn from '@public/img/landing/screen-scan-qr-en.png'
import screenScanQrFr from '@public/img/landing/screen-scan-qr-fr.png'

import screenPay from '@public/img/landing/screen-pay.png'
import screenPayEn from '@public/img/landing/screen-pay-en.png'
import screenPayFr from '@public/img/landing/screen-pay-fr.png'

import screenThank from '@public/img/landing/screen-thank.png'
import screenThankEn from '@public/img/landing/screen-thank-en.png'
import screenThankFr from '@public/img/landing/screen-thank-fr.png'

import ArrowGreenIcon from '@public/icons/arrows/green-right.svg'

SwiperCore.use([Controller, Navigation])

export const ServiceWorkSteps = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const sliderRef = useRef(null)
  const isLaptop = useMediaQuery({ maxWidth: MEDIA_LAPTOP })

  const steps = [
    {
      title: t('create-account-minute'),
      img: localeImg(locale, screenSignUp, screenSignUpEn, screenSignUpFr)
    },
    {
      title: t('get-your-qr'),
      img: localeImg(locale, screenCreateQr, screenCreateQrEn, screenCreateQrFr)
    },
    {
      title: t('let-qr-scanned'),
      img: localeImg(locale, screenScanQr, screenScanQrEn, screenScanQrFr)
    },
    {
      title: t('client-enters-amount'),
      img: localeImg(locale, screenPay, screenPayEn, screenPayFr)
    },
    { title: t('you-get-tips'), img: localeImg(locale, screenThank, screenThankEn, screenThankFr) }
  ]

  const sliderSettings = {
    navigation: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    breakpoints: {
      960: {
        slidesPerView: 3
      },
      660: {
        slidesPerView: 2,
        initialSlide: 0,
        centeredSlides: false
      },
      320: {
        initialSlide: 0,
        slidesPerView: 1
      }
    }
  }

  const stepList = steps.map(({ title, img }, idx) => (
    <li key={title}>
      <Image src={img} alt={title} />
      <S.Text>{title}</S.Text>
      <S.Counter>{idx + 1}</S.Counter>
    </li>
  ))

  const stepListSlides = steps.map(({ title, img }, idx) => (
    <SwiperSlide key={title}>
      <S.Img>
        <Image src={img} alt={title} quality={100} placeholder="blur" />
      </S.Img>

      <S.Text>{title}</S.Text>
      <S.Counter>{idx + 1}</S.Counter>
    </SwiperSlide>
  ))

  return !isLaptop ? (
    <S.ServiceWorkSteps>{stepList}</S.ServiceWorkSteps>
  ) : (
    <S.Slider>
      <Swiper {...sliderSettings} ref={sliderRef}>
        <S.NavArrow onClick={() => sliderRef?.current?.swiper?.slidePrev()}>
          <ArrowGreenIcon />
        </S.NavArrow>

        {stepListSlides}

        <S.NavArrow onClick={() => sliderRef?.current?.swiper?.slideNext()}>
          <ArrowGreenIcon />
        </S.NavArrow>
      </Swiper>
    </S.Slider>
  )
}
