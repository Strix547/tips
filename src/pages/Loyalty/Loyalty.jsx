import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'

import * as S from './Loyalty.styled'

import LoyaltyImg from '@public/img/loyalty.svg'

export const LoyaltyPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('loyalty-program')}</title>
      </Head>

      <AccountLayout title={t('loyalty-program')}>
        <S.Content>
          <LoyaltyImg />

          <S.Text>{t('loyalty-text')}</S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
