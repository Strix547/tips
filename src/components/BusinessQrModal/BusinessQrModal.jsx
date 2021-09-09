import { useState, useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip'

import { QrImage } from 'components'
import { Button } from 'ui'

import * as S from './BusinessQrModal.styled'

import VkIcon from '@public/icons/networks/vk-big.svg'
import FacebookIcon from '@public/icons/networks/facebook-big.svg'
import InstagramIcon from '@public/icons/networks/instagram-big.svg'
import DownloadIcon from '@public/icons/download.svg'
import CrossIcon from '@public/icons/cross-circle-filled.svg'
import CopyIcon from '@public/icons/bind.svg'

export const BusinessQrModal = ({ open, onClose, label, qr }) => {
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false)

  useEffect(() => {
    const tooltipTimeout = setTimeout(() => {
      if (copyTooltipOpen) setCopyTooltipOpen(false)
    }, 1500)

    return () => {
      clearTimeout(tooltipTimeout)
    }
  }, [copyTooltipOpen])

  const link = 'https://tips.me/qr585302862'

  const networks = [
    { label: 'Vkontakte', icon: <VkIcon /> },
    { label: 'Facebook', icon: <FacebookIcon /> },
    { label: 'Instagram', icon: <InstagramIcon /> }
  ]

  const networkButtons = networks.map(({ label, icon }) => (
    <button key={label} type="button">
      {icon} {label}
    </button>
  ))

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(link)
    setCopyTooltipOpen(true)
  }

  return (
    <S.BusinessQrModal open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Top>
          <S.Label>QR-код {label}</S.Label>
          <CrossIcon onClick={() => onClose()} />
        </S.Top>

        <S.Main>
          <S.LinkRow>
            <S.Text>Основная ссылка для получения денег</S.Text>

            <Tooltip open={copyTooltipOpen} title="Скопировано">
              <S.Link>
                {link}
                <Button iconStart={<CopyIcon />} onClick={copyLinkToClipboard}>
                  Скопировать
                </Button>
              </S.Link>
            </Tooltip>
          </S.LinkRow>

          <QrImage src={qr} />

          <Button iconStart={<DownloadIcon />} variant="bordered">
            Скачать в формате png
          </Button>

          <S.Share>
            <S.Text>Поделиться</S.Text>
            <S.Networks>{networkButtons}</S.Networks>
          </S.Share>
        </S.Main>
      </S.Wrapper>
    </S.BusinessQrModal>
  )
}
