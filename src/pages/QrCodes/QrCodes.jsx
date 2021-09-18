import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
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
  const { qrCodes } = qrCodesStore

  useEffect(async () => {
    if (qrCodes.length !== 0) return

    if (!userId) {
      const userId = await userStore.getMyId()
      qrCodesStore.getQrCodes(userId)
    } else {
      qrCodesStore.getQrCodes(userId)
    }
  }, [userId, qrCodes])

  const onAddQrClick = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  console.log(toJS(qrCodes))

  const qrCodeList = qrCodes.map(({ id, templateId, name, img }) => (
    <QrCard key={id} id={id} templateId={templateId} tag="li" label={name} img={img} />
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
})
