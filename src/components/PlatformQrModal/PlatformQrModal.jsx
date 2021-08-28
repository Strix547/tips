import { QrImage } from 'components'
import { Button } from 'ui'

import * as S from './PlatformQrModal.styled'

import VkIcon from '@public/icons/networks/vk-big.svg'
import FacebookIcon from '@public/icons/networks/facebook-big.svg'
import InstagramIcon from '@public/icons/networks/instagram-big.svg'
import DownloadIcon from '@public/icons/download.svg'
import CrossIcon from '@public/icons/cross-circle-filled.svg'
import CopyIcon from '@public/icons/copy.svg'

export const PlatformQrModal = ({ open, onClose, label, qr }) => {
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
    console.log(link)
    navigator.clipboard.writeText(link)
  }

  return (
    <S.PlatformQrModal open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Top>
          <S.Label>QR-код {label}</S.Label>
          <CrossIcon onClick={() => onClose()} />
        </S.Top>

        <S.Main>
          <S.LinkRow>
            <S.Text>Основная ссылка для получения денег</S.Text>

            <S.Link>
              {link}
              <Button iconStart={<CopyIcon />} onClick={copyLinkToClipboard}>
                Скопировать
              </Button>
            </S.Link>
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
    </S.PlatformQrModal>
  )
}
