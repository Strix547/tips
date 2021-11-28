import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'

import * as S from './Loyalty.styled'

import loyaltySrc from '@public/img/landing/loyalty.png'

export const LoyaltyPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('loyalty-program')}</title>
      </Head>

      <AccountLayout title={t('loyalty-program')}>
        <S.Content>
          <Image src={loyaltySrc} alt="loyalty" />

          <S.Text>{t('loyalty-text')}</S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
