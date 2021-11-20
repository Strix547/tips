import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header, Footer } from 'layout'
import { SupportForm } from 'components'

import * as S from './Support.styled'

import GreenDotesSvg from '@public/img/landing/green-dotes.svg'

export const SupportPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('support-service')}</title>
      </Head>

      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>{t('support-service')}</S.Heading>

          <SupportForm />

          <S.Background>
            <GreenDotesSvg />
            <GreenDotesSvg />
          </S.Background>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </>
  )
}
