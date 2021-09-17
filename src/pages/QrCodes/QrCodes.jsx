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

  // useEffect(async () => {
  //   if (!userId) {
  //     const userId = await userStore.getMyId()
  //     qrCodesStore.getQrCodes(userId)
  //   } else {
  //     qrCodesStore.getQrCodes(userId)
  //   }
  // }, [])

  const qrCodes = [
    { id: 0, label: 'Ресторан Жиши-Суши', qr: qrPlaceholder },
    { id: 1, label: 'Ресторан Жиши-Суши1', qr: qrPlaceholder },
    { id: 2, label: 'Ресторан Жиши-Суши2', qr: qrPlaceholder },
    { id: 3, label: 'Ресторан Жиши-Суши3', qr: qrPlaceholder },
    { id: 4, label: 'Ресторан Жиши-Суши4', qr: qrPlaceholder },
    { id: 5, label: 'Ресторан Жиши-Суши5', qr: qrPlaceholder },
    { id: 6, label: 'Ресторан Жиши-Суши6', qr: qrPlaceholder },
    { id: 7, label: 'Ресторан Жиши-Суши7', qr: qrPlaceholder },
    { id: 8, label: 'Ресторан Жиши-Суши8', qr: qrPlaceholder },
    { id: 9, label: 'Ресторан Жиши-Суши9', qr: qrPlaceholder }
  ]

  const onAddQrClick = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  const qrCodeList = qrCodes.map(({ id, label, qr }) => (
    <QrCard key={id} id={id} tag="li" label={label} qr={qr} />
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
