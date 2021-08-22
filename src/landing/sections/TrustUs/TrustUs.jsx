import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Controller, Autoplay } from 'swiper/core'
import Img from 'next/image'

import { Section } from 'landing/components'

import 'swiper/swiper.min.css'
import * as S from './TrustUs.styled'

import TerrassaLogo from '@public/img/placeholders/terrassa.png'
import DodoLogo from '@public/img/placeholders/dodo.png'

SwiperCore.use([Controller, Autoplay])

export const TrustUsSection = () => {
  const [firstSlider, setFirstSlider] = useState(null)
  const [secondSlider, setSecondSlider] = useState(null)

  useEffect(() => {
    if (secondSlider) {
      secondSlider.setTranslate(-131)
    }
  }, [secondSlider])

  const logosFirstLine = [
    { label: 'terrassa1', logo: TerrassaLogo },
    { label: 'terrassa2', logo: TerrassaLogo },
    { label: 'terrassa3', logo: TerrassaLogo },
    { label: 'terrassa4', logo: TerrassaLogo },
    { label: 'terrassa5', logo: TerrassaLogo }
  ]
  const logosSecondLine = [
    { label: 'dodo1', logo: DodoLogo },
    { label: 'dodo2', logo: DodoLogo },
    { label: 'dodo3', logo: DodoLogo },
    { label: 'dodo4', logo: DodoLogo },
    { label: 'dodo5', logo: DodoLogo }
  ]

  const sliderSettings = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: { delay: 0, disableOnInteraction: false },
    speed: 8000,
    centeredSlides: true,
    allowTouchMove: false,
    freeMode: true,
    loop: true
  }

  const createLogoSlides = (logos) => {
    return logos.map(({ label, logo }) => (
      <SwiperSlide key={label}>
        <S.LogoCard>
          <Img src={logo} alt={label} />
        </S.LogoCard>
      </SwiperSlide>
    ))
  }

  return (
    <Section title="Нам доверяют" fullWidth>
      <S.Content>
        <S.Line>
          <Swiper
            {...sliderSettings}
            controller={{ control: firstSlider }}
            onSwiper={setFirstSlider}
          >
            {createLogoSlides(logosFirstLine)}
          </Swiper>
        </S.Line>
        <S.Line>
          <Swiper
            {...sliderSettings}
            speed={10000}
            controller={{ control: secondSlider }}
            onSwiper={setSecondSlider}
          >
            {createLogoSlides(logosSecondLine)}
          </Swiper>
        </S.Line>
      </S.Content>
    </Section>
  )
}
