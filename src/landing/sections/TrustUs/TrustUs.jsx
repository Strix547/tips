import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Controller, Autoplay } from 'swiper/core'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Section } from 'landing/components'

import 'swiper/swiper.min.css'
import * as S from './TrustUs.styled'

import TerrassaLogo from '@public/img/placeholders/terrassa.png'
import DodoLogo from '@public/img/placeholders/dodo.png'

SwiperCore.use([Controller, Autoplay])

export const TrustUsSection = () => {
  const { t } = useTranslation('common')

  const [sliderController, setSliderController] = useState(null)

  useEffect(() => {
    if (sliderController) {
      sliderController.setTranslate(-131)
    }
  }, [sliderController])

  const logosFirstLine = [
    { label: 'terrassa1', logo: TerrassaLogo },
    { label: 'terrassa2', logo: TerrassaLogo },
    { label: 'terrassa3', logo: TerrassaLogo },
    { label: 'terrassa4', logo: TerrassaLogo },
    { label: 'terrassa5', logo: TerrassaLogo },
    { label: 'terrassa6', logo: TerrassaLogo },
    { label: 'terrassa7', logo: TerrassaLogo },
    { label: 'terrassa8', logo: TerrassaLogo },
    { label: 'terrassa9', logo: TerrassaLogo },
    { label: 'terrassa10', logo: TerrassaLogo }
  ]
  const logosSecondLine = [
    { label: 'dodo1', logo: DodoLogo },
    { label: 'dodo2', logo: DodoLogo },
    { label: 'dodo3', logo: DodoLogo },
    { label: 'dodo4', logo: DodoLogo },
    { label: 'dodo5', logo: DodoLogo },
    { label: 'dodo6', logo: DodoLogo },
    { label: 'dodo7', logo: DodoLogo },
    { label: 'dodo8', logo: DodoLogo },
    { label: 'dodo9', logo: DodoLogo },
    { label: 'dodo10', logo: DodoLogo }
  ]

  const sliderSettings = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: { delay: 5000, disableOnInteraction: false },
    speed: 8000,
    centeredSlides: true,
    allowTouchMove: true,
    grabCursor: true,
    loop: true
  }

  const createLogoSlides = (logos) => {
    return logos.map(({ label, logo }) => (
      <SwiperSlide key={label}>
        <S.LogoCard>
          <Image src={logo} alt={label} quality={100} />
        </S.LogoCard>
      </SwiperSlide>
    ))
  }

  return (
    <Section title={t('those-already-trust-service')} fullWidth>
      <S.Content>
        <S.Line>
          <Swiper {...sliderSettings}>{createLogoSlides(logosFirstLine)}</Swiper>
        </S.Line>

        <S.Line>
          <Swiper
            {...sliderSettings}
            speed={10000}
            controller={{ control: sliderController }}
            onSwiper={setSliderController}
          >
            {createLogoSlides(logosSecondLine)}
          </Swiper>
        </S.Line>
      </S.Content>
    </Section>
  )
}
