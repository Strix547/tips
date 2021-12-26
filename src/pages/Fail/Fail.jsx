import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { Header } from 'layout'

import * as S from './Fail.styled'

export const FailPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('error')}</title>
      </Head>

      <Header />

      <S.Content>
        <S.Text>{t('error')}!</S.Text>
      </S.Content>
    </>
  )
}
