import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Header } from 'layout'
import { LinkButton } from 'ui'

import * as S from './Fail.styled'

export const FailPage = () => {
  const { t } = useTranslation('common')

  const router = useRouter()

  const qrId = router.asPath.slice(router.asPath.indexOf('paymentPageId') + 14)

  return (
    <>
      <Head>
        <title>{t('error')}</title>
      </Head>

      <Header />

      <S.Content>
        <S.Text>{t('payment-not-completed')}</S.Text>
        <LinkButton href={`/qr-codes/${qrId}`}>{t('repeat')}</LinkButton>
      </S.Content>
    </>
  )
}
