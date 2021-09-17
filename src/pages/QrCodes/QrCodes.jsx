import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { QrCard } from 'components'

import { ROUTES } from 'core/routes'
import { userStore, qrCodesStore } from 'store'

import * as S from './QrCodes.styled'

import qrPlaceholder from '@public/img/placeholders/qr.png'

export const QrCodesPage = () => {
  const router = useRouter()
  const userId = userStore.id
  const { qrCodes } = qrCodesStore

  useEffect(async () => {
    if (!userId) {
      const userId = await userStore.getMyId()
      qrCodesStore.getQrCodes(userId)
    } else {
      qrCodesStore.getQrCodes(userId)
    }
  }, [])

  const onAddQrClick = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  const qrCodeList = qrCodes.map(({ id, name, img }) => (
    <QrCard key={id} id={id} tag="li" label={name} img={img} />
  ))

  return (
    <>
      <Head>
        <title>Мои QR</title>
      </Head>

      <AccountLayout title="Мои QR" button={{ label: 'Добавить QR-код', onClick: onAddQrClick }}>
        <S.PlatformQrGrid>{qrCodeList}</S.PlatformQrGrid>
      </AccountLayout>
    </>
  )
}
