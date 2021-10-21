import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { QrCard } from 'components'

import { ROUTE_NAMES } from 'core/routes'
import { userStore, qrCodesStore } from 'store'

import * as S from './QrCodes.styled'

export const QrCodesPage = observer(() => {
  const router = useRouter()
  const { id: userId, role } = userStore
  const { qrCodesIndividuals, qrCodesPlatforms, isQrCodesLoading } = qrCodesStore

  useEffect(async () => {
    if (!userId || !role) return

    if (role === 'BUSINESS') {
      qrCodesStore.getPlatformQrCodes(userId)
    }

    qrCodesStore.getIndividualQrCodes(userId)
  }, [userId, role])

  const toQrCreatePage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_CREATE)
  }

  const qrCodeIndividualsList = qrCodesIndividuals.map(({ id, templateId, name, img }) => (
    <QrCard
      key={id}
      id={id}
      type="individual"
      templateId={templateId}
      tag="li"
      label={name}
      img={img}
    />
  ))

  const qrCodePlatformsList = qrCodesPlatforms.map(({ id, templateId, name, img }) => (
    <QrCard
      key={id}
      id={id}
      type="platform"
      templateId={templateId}
      tag="li"
      label={name}
      img={img}
    />
  ))

  const qrCodeList = [...qrCodePlatformsList, ...qrCodeIndividualsList]

  return (
    <>
      <Head>
        <title>Мои QR</title>
      </Head>

      <AccountLayout title="Мои QR" button={{ label: 'Добавить QR-код', onClick: toQrCreatePage }}>
        {!isQrCodesLoading ? (
          <S.QrGrid>
            {qrCodeList.length ? qrCodeList : <S.NoQrCodesText>No qr codes</S.NoQrCodesText>}
          </S.QrGrid>
        ) : (
          <S.QrGridSkeleton>
            <Skeleton height={418} count={3} />
          </S.QrGridSkeleton>
        )}
      </AccountLayout>
    </>
  )
})
