import { useState } from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'

import { QrImage, QrModal } from 'components'
import { DeleteConfirmModal } from '../DeleteConfirmModal'
import { Button } from 'ui'

import { qrCodesStore, userStore, statisticsStore } from 'store'
import { ROUTES } from 'core/routes'
import { getTimeZoneOffset } from 'utils'

import * as S from './Card.styled'

import WalletIcon from '@public/icons/wallet.svg'
import ChartIcon from '@public/icons/chart.svg'
import ShareIcon from '@public/icons/share.svg'
import PenIcon from '@public/icons/pen.svg'
import TrashIcon from '@public/icons/trash.svg'
import ArrowRightIcon from '@public/icons/arrows/gray-right.svg'

export const QrCard = observer(({ id, templateId, label, img, tag }) => {
  const router = useRouter()

  const [isQrModalOpen, setQrModalOpen] = useState(false)
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false)

  const onChartOpen = () => {
    router.push(`${ROUTES.ACCOUNT}/${id}`)
  }

  const onShare = () => {
    setQrModalOpen(true)
  }

  const onEdit = (templateId) => {
    router.push(`${ROUTES.ACCOUNT_QR_CODES}/${templateId}/edit`)
  }

  const onDelete = () => {
    setConfirmDeleteModalOpen(true)
  }

  const onConfirmDelete = (templateId) => [qrCodesStore.deleteQrCode(templateId)]

  const toQrCodePage = (id) => {
    router.push(`/qr-codes/${id}`)
  }

  const actions = [
    { label: 'open chart', icon: <ChartIcon />, onClick: () => onChartOpen(id) },
    { label: 'share', icon: <ShareIcon />, onClick: () => onShare(id) },
    { label: 'edit', icon: <PenIcon />, onClick: () => onEdit(templateId) },
    { label: 'delete', icon: <TrashIcon />, onClick: () => onDelete(templateId) }
  ]

  const createActionButton = ({ label, icon, onClick }) => (
    <button key={label} type="button" aria-label={label} onClick={onClick}>
      {icon}
    </button>
  )

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

      <S.ActionRow>
        <S.ActionRowCol>
          {createActionButton(actions[0])}
          {createActionButton(actions[1])}
        </S.ActionRowCol>

        <S.ActionRowCol>
          {createActionButton(actions[2])}
          {createActionButton(actions[3])}
        </S.ActionRowCol>
      </S.ActionRow>

      <QrModal
        open={isQrModalOpen}
        id={id}
        label={label}
        img={img}
        onClose={() => {
          setQrModalOpen(false)
        }}
      />

      <DeleteConfirmModal
        open={isConfirmDeleteModalOpen}
        onClose={() => {
          setConfirmDeleteModalOpen(false)
        }}
        onConfirm={() => {
          onConfirmDelete(templateId)
        }}
      />
    </S.QrCard>
  )
})
