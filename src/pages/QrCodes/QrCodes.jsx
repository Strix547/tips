import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { QrCard } from 'components'

import { ROUTES } from 'core/routes'
import { userStore, qrCodesStore } from 'store'

import * as S from './QrCodes.styled'

export const QrCodesPage = observer(() => {
  const router = useRouter()
  const userId = userStore.id
  const { qrCodes, isQrCodesLoading } = qrCodesStore

  useEffect(async () => {
    if (!userId) {
      const userId = await userStore.getMyId()
      qrCodesStore.getQrCodes(userId)
    } else {
      qrCodesStore.getQrCodes(userId)
    }
  }, [userId])

  const toQrCreatePage = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  const qrCodeList = qrCodes.length ? (
    qrCodes.map(({ id, templateId, name, img }) => (
      <QrCard key={id} id={id} templateId={templateId} tag="li" label={name} img={img} />
    ))
  ) : (
    <S.NoQrCodesText>No qr codes</S.NoQrCodesText>
  )

  return (
    <>
      <Head>
        <title>Мои QR</title>
      </Head>

      <AccountLayout title="Мои QR" button={{ label: 'Добавить QR-код', onClick: toQrCreatePage }}>
        {!isQrCodesLoading ? (
          <S.QrGrid>{qrCodeList}</S.QrGrid>
        ) : (
          <S.QrGridSkeleton>
            <Skeleton height={418} count={3} />
          </S.QrGridSkeleton>
        )}
      </AccountLayout>
    </>
  )
})
