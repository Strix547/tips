import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Controller, Navigation } from 'swiper/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { MEDIA_LAPTOP } from 'styles/media'

import * as S from './ServiceWorkSteps.styled'

import screenSignUp from '@public/img/landing/screen-sign-up.png'
import screenCreateQr from '@public/img/landing/screen-create-qr.png'
import screenScanQr from '@public/img/landing/screen-scan-qr.png'
import screenPay from '@public/img/landing/screen-pay.png'
import screenThank from '@public/img/landing/screen-thank.png'

import ArrowGreenIcon from '@public/icons/arrows/green-right.svg'

SwiperCore.use([Controller, Navigation])

export const ServiceWorkSteps = () => {
  const { t } = useTranslation('common')

  const sliderRef = useRef(null)
  const isLaptop = useMediaQuery({ maxWidth: MEDIA_LAPTOP })

  const steps = [
    { title: t('create-account-minute'), img: screenSignUp },
    { title: t('get-your-qr'), img: screenCreateQr },
    { title: t('let-qr-scanned'), img: screenScanQr },
    { title: t('client-enters-amount'), img: screenPay },
    { title: t('you-get-tips'), img: screenThank }
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
      <Image src={img} alt={title} unoptimized />
      <S.Text>{title}</S.Text>
      <S.Counter>{idx + 1}</S.Counter>
    </li>
  ))

  const stepListSlides = steps.map(({ title, img }, idx) => (
    <SwiperSlide key={title}>
      <S.Img>
        <Image src={img} alt={title} quality={100} />
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
