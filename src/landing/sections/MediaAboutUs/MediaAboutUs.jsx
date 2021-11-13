import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Section } from 'landing/components'

import 'swiper/swiper.min.css'
import * as S from './MediaAboutUs.styled'

import QuoteIcon from '@public/icons/quote.svg'
import vedomostiLogo from '@public/img/placeholders/vedomosti.png'

export const MediaAboutUsSection = () => {
  const { t } = useTranslation('common')

  const sliderSettings = {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoplay: { delay: 5000, disableOnInteraction: false },
    speed: 8000,
    centeredSlides: true,
    allowTouchMove: true,
    freeMode: true,
    grabCursor: true,
    loop: true
  }

  const media = [
    {
      label: 'ведомости1',
      logo: vedomostiLogo,
      quote: '«Тинькофф» запускает новый сервис безналичного перевода чаевых'
    },
    {
      label: 'ведомости2',
      logo: vedomostiLogo,
      quote: '«Тинькофф» запускает новый сервис безналичного перевода чаевых'
    },
    {
      label: 'ведомости3',
      logo: vedomostiLogo,
      quote: '«Тинькофф» запускает новый сервис безналичного перевода чаевых'
    },
    {
      label: 'ведомости4',
      logo: vedomostiLogo,
      quote: '«Тинькофф» запускает новый сервис безналичного перевода чаевых'
    },
    {
      label: 'ведомости5',
      logo: vedomostiLogo,
      quote: '«Тинькофф» запускает новый сервис безналичного перевода чаевых'
    }
  ]

  const mediaSlides = media.map(({ label, logo, quote }) => (
    <SwiperSlide key={label}>
      <S.QuoteCard>
        <S.Logo>
          <Image src={logo} alt={label} />
        </S.Logo>
        <S.Text>{quote}</S.Text>
        <QuoteIcon />
      </S.QuoteCard>
    </SwiperSlide>
  ))

  return (
    <Section title={t('media-about-us')} gray fullWidth styles={S.sectionStyles}>
      <S.Content>
        <Swiper {...sliderSettings}>{mediaSlides}</Swiper>
      </S.Content>
    </Section>
  )
}
