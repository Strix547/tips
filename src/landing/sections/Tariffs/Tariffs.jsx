import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Section } from 'landing/components'
import { LinkButton } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './Tariffs.styled'

import backgroundImg from '@public/img/landing/tariff-img.png'

export const TariffsSection = () => {
  const { t } = useTranslation('common')

  return (
    <Section title={t('fees-for-using-service')} gray styles={S.sectionStyles}>
      <S.Content>
        <S.Card>
          <S.CardLeft>
            <S.Text>{t('tariff-section-fees')}</S.Text>
            <S.Text>{t('additional-fees')}</S.Text>

            <LinkButton href={ROUTE_NAMES.AUTH}>{t('start-getting-tips')}</LinkButton>
          </S.CardLeft>

          <S.Percentage>7%</S.Percentage>
        </S.Card>

        <S.Img>
          <Image src={backgroundImg} alt="фон" priority quality={100} />
        </S.Img>
      </S.Content>
    </Section>
  )
}
