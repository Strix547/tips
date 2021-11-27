import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'

import * as S from './ThankYou.styled'

import HandMobileSuccess from '@public/img/hand-mobile-success.svg'

export const ThankYouPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('thanks')}</title>
      </Head>

      <AccountLayout>
        <S.Content>
          <HandMobileSuccess />
          <S.Text>{t('thank-you-much')}</S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
