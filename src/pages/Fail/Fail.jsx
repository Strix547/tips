import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'

import * as S from './Fail.styled'

export const FailPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('error')}</title>
      </Head>

      <AccountLayout>
        <S.Content>
          <S.Text>{t('error')}!</S.Text>
        </S.Content>
      </AccountLayout>
    </>
  )
}
