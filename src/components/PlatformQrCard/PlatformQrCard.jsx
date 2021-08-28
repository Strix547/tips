import { useState } from 'react'

import { QrImage, PlatformQrModal } from 'components'
import { Button } from 'ui'

import * as S from './PlatformQrCard.styled'

import WalletIcon from '@public/icons/wallet.svg'
import ChartIcon from '@public/icons/chart.svg'
import ShareIcon from '@public/icons/share.svg'
import PenIcon from '@public/icons/pen-edit.svg'
import TrashIcon from '@public/icons/trash.svg'
import ArrowRightIcon from '@public/icons/arrows/gray-right.svg'

export const PlatformQrCard = ({ label, qr, onChartOpen, onShare, onEdit, onDelete, tag }) => {
  const [isQrModalOpen, setQrModalOpen] = useState(false)

  const actions = [
    { label: 'open chart', icon: <ChartIcon />, onClick: onChartOpen },
    { label: 'share', icon: <ShareIcon />, onClick: onShare },
    { label: 'edit', icon: <PenIcon />, onClick: onEdit },
    { label: 'delete', icon: <TrashIcon />, onClick: onDelete }
  ]

  const toggleQrModalOpen = () => {
    setQrModalOpen(!isQrModalOpen)
  }

  const actionButtons = actions.map(({ label, icon, onClick }) => (
    <button key={label} type="button" aria-label={label} onClick={onClick}>
      {icon}
    </button>
  ))

  return (
    <S.PlatformQrCard as={tag}>
      <S.Label onClick={() => toggleQrModalOpen()}>
        {label}
        <ArrowRightIcon />
      </S.Label>

      <QrImage src={qr} />

      <S.AppleWallet>
        <Button iconStart={<WalletIcon />}>Добавить в Apple Wallet</Button>
      </S.AppleWallet>

      <S.ActionRow>{actionButtons}</S.ActionRow>

      <PlatformQrModal
        open={isQrModalOpen}
        onClose={() => {
          setQrModalOpen(false)
        }}
        label={label}
        qr={qr}
      />
    </S.PlatformQrCard>
  )
}
