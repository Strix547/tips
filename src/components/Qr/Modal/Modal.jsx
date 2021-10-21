import { useState, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'

import { QrImage } from 'components'
import { Button } from 'ui'

import * as S from './Modal.styled'

import VkIcon from '@public/icons/networks/vk-big.svg'
import FacebookIcon from '@public/icons/networks/facebook-big.svg'
import InstagramIcon from '@public/icons/networks/instagram-big.svg'
import TelegramIcon from '@public/icons/networks/telegram-big.svg'
import WhatsAppIcon from '@public/icons/networks/whats-app-big.svg'
import DownloadIcon from '@public/icons/download.svg'
import CrossIcon from '@public/icons/cross-circle-filled.svg'
import CopyIcon from '@public/icons/bind.svg'

export const QrModal = ({ id, open, onClose, label, img }) => {
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false)

  useEffect(() => {
    const tooltipTimeout = setTimeout(() => {
      if (copyTooltipOpen) setCopyTooltipOpen(false)
    }, 1500)

    return () => {
      clearTimeout(tooltipTimeout)
    }
  }, [copyTooltipOpen])

  const link = `${window.location.origin}/qr-codes/individuals/${id}`

  const networks = [
    { label: 'Vkontakte', icon: <VkIcon /> },
    { label: 'Facebook', icon: <FacebookIcon /> },
    { label: 'Instagram', icon: <InstagramIcon /> },
    { label: 'telegram', icon: <TelegramIcon /> },
    { label: 'whatsapp', icon: <WhatsAppIcon /> }
  ]

  const networkButtons = networks.map(({ label, icon }) => (
    <button key={label} type="button">
      {icon}
    </button>
  ))

  const copyLinkToClipboard = () => {
    navigator?.clipboard?.writeText(link)
    setCopyTooltipOpen(true)
  }

  const downloadQr = () => {
    const link = document.createElement('a')
    link.href = `${window.location.origin}${img}`
    link.setAttribute('download', 'qr.png')
    document.body.appendChild(link)
    link.click()
    document.querySelector('body').removeChild(link)
  }

  return (
    <S.QrModal open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Top>
          <S.Label>QR-код {label}</S.Label>
          <CrossIcon onClick={() => onClose()} />
        </S.Top>

        <S.Main>
          <S.LinkRow>
            <S.Text>Основная ссылка для получения денег</S.Text>

            <Tooltip open={copyTooltipOpen} title="Скопировано">
              <S.Link onClick={copyLinkToClipboard}>
                <span>{link}</span>

                <Button iconStart={<CopyIcon />}>
                  <span>Скопировать</span>
                </Button>
              </S.Link>
            </Tooltip>
          </S.LinkRow>

          <QrImage src={img} />

          <Button iconStart={<DownloadIcon />} variant="bordered" onClick={downloadQr}>
            Скачать в формате png
          </Button>

          <S.Share>
            <S.Text>Поделиться</S.Text>
            <S.Networks>{networkButtons}</S.Networks>
          </S.Share>
        </S.Main>
      </S.Wrapper>
    </S.QrModal>
  )
}
