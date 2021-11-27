import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { QrCard } from 'components'
import { NoResultFound } from 'common'

import { ROUTE_NAMES } from 'core/routes'
import { userStore, qrCodesStore } from 'store'

import * as S from './QrCodes.styled'

export const QrCodesPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const { id: userId, role } = userStore
  const { qrCodesIndividuals, qrCodesPlatforms, isQrCodesLoading } = qrCodesStore

  useEffect(() => {
    if (!userId || !role) return

    qrCodesStore.getQrCodesPlatform(userId)
    qrCodesStore.getQrCodesIndividual(userId)
  }, [userId, role])

  const toQrCreatePage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_CREATE)
  }

  const qrCodeIndividualsCards = qrCodesIndividuals.map(({ id, templateId, name, img }) => (
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

  const qrCodePlatformsCards = qrCodesPlatforms.map(({ id, templateId, name, img }) => (
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

  const qrCardList = [...qrCodePlatformsCards, ...qrCodeIndividualsCards]

  const qrListContent = qrCardList.length ? (
    <S.QrGrid>{qrCardList}</S.QrGrid>
  ) : (
    <NoResultFound></NoResultFound>
  )

  return (
    <>
      <Head>
        <title>{t('my-qr')}</title>
      </Head>

      <AccountLayout title={t('my-qr')} button={{ label: t('add-qr'), onClick: toQrCreatePage }}>
        {!isQrCodesLoading ? (
          qrListContent
        ) : (
          <S.QrGridSkeleton>
            <Skeleton height={420} count={6} />
          </S.QrGridSkeleton>
        )}
      </AccountLayout>
    </>
  )
})
