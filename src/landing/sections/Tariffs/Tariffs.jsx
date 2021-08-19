import Img from 'next/image'

import { Section } from 'landing/components'
import { Button } from 'ui'

import * as S from './Tariffs.styled'

import backgroundImg from '@public/img/pages/main/tariff-img.png'

export const TariffsSection = () => (
  <Section title="Тарифы" gray>
    <S.Content>
      <S.Card>
        <S.CardLeft>
          <S.Text>Стоимость вывода денег на карты других банков</S.Text>
          <S.Text>При выводе менее 1000 руб. спишутся дополнительные 30 руб.</S.Text>
          <Button>Начать получать чаевые</Button>
        </S.CardLeft>

        <S.Percentage>7%</S.Percentage>
      </S.Card>

      <S.Img>
        <Img src={backgroundImg} alt="фон" />
      </S.Img>
    </S.Content>
  </Section>
)
