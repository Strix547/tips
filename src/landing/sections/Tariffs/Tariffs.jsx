import Image from 'next/image'

import { Section } from 'landing/components'
import { LinkButton } from 'ui'

import { ROUTES } from 'core/routes'

import * as S from './Tariffs.styled'

import backgroundImg from '@public/img/landing/tariff-img.png'

export const TariffsSection = () => (
  <Section title="Тарифы" gray styles={S.sectionStyles}>
    <S.Content>
      <S.Card>
        <S.CardLeft>
          <S.Text>Стоимость вывода денег на карты других банков</S.Text>
          <S.Text>При выводе менее 1000 руб. спишутся дополнительные 30 руб.</S.Text>

          <LinkButton href={ROUTES.AUTH}>Начать получать чаевые</LinkButton>
        </S.CardLeft>

        <S.Percentage>7%</S.Percentage>
      </S.Card>

      <S.Img>
        <Image src={backgroundImg} alt="фон" quality={100} />
      </S.Img>
    </S.Content>
  </Section>
)
