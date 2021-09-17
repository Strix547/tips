import { useState } from 'react'
import { useRouter } from 'next/router'

import { QrImage, QrModal } from 'components'
import { Button } from 'ui'

import { qrCodesStore } from 'store'
import { ROUTES } from 'core/routes'

import * as S from './Card.styled'

import WalletIcon from '@public/icons/wallet.svg'
import ChartIcon from '@public/icons/chart.svg'
import ShareIcon from '@public/icons/share.svg'
import PenIcon from '@public/icons/pen.svg'
import TrashIcon from '@public/icons/trash.svg'
import ArrowRightIcon from '@public/icons/arrows/gray-right.svg'

export const QrCard = ({ id, label, img, tag }) => {
  const router = useRouter()

  const [isQrModalOpen, setQrModalOpen] = useState(false)

  const onChartOpen = () => {
    router.push(`${ROUTES.ACCOUNT_QR_CODES}/${id}/statistics`)
  }

  const onShare = () => {
    setQrModalOpen(true)
  }

  const onEdit = (id) => {
    router.push(`${ROUTES.ACCOUNT_QR_CODES}/${id}/edit`)
  }

  const onDelete = (id) => {
    qrCodesStore.deleteQrCode(id)
  }

  const toQrCodePage = (id) => {
    router.push(`${ROUTES.ACCOUNT_QR_CODES}/${id}`)
  }

  const actions = [
    { label: 'open chart', icon: <ChartIcon />, onClick: () => onChartOpen(id) },
    { label: 'share', icon: <ShareIcon />, onClick: () => onShare(id) },
    { label: 'edit', icon: <PenIcon />, onClick: () => onEdit(id) },
    { label: 'delete', icon: <TrashIcon />, onClick: () => onDelete(id) }
  ]

  const actionButtons = actions.map(({ label, icon, onClick }) => (
    <button key={label} type="button" aria-label={label} onClick={onClick}>
      {icon}
    </button>
  ))

  return (
    <S.QrCard as={tag}>
      <S.Label onClick={() => toQrCodePage(id)}>
        {label}
        <ArrowRightIcon />
      </S.Label>

      <QrImage src={img} />

      <S.AppleWallet>
        <Button iconStart={<WalletIcon />}>Добавить в Apple Wallet</Button>
      </S.AppleWallet>

      <S.ActionRow>{actionButtons}</S.ActionRow>

      <QrModal
        open={isQrModalOpen}
        id={id}
        label={label}
        img={img}
        onClose={() => {
          setQrModalOpen(false)
        }}
      />
    </S.QrCard>
  )
}
