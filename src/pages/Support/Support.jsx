import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { SupportForm } from 'components'

import * as S from './Support.styled'

export const SupportPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('support-service')}</title>
      </Head>

      <AccountLayout title={t('support-service')}>
        <S.Content>
          <SupportForm />
        </S.Content>
      </AccountLayout>
    </>
  )
}
