import { useState, useEffect } from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'next-i18next'

import Tooltip from '@material-ui/core/Tooltip'

import { userStore } from 'store'

import * as S from './Info.styled'

import CopyIcon from '@public/icons/copy.svg'
import VkIcon from '@public/icons/networks/vk-big.svg'
import FacebookIcon from '@public/icons/networks/facebook-big.svg'
import InstagramIcon from '@public/icons/networks/instagram-big.svg'
import TelegramIcon from '@public/icons/networks/telegram-big.svg'
import WhatsAppIcon from '@public/icons/networks/whats-app-big.svg'

export const Info = observer(() => {
  const { t } = useTranslation('common')
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false)
  const [link, setLink] = useState('')
  const { id } = userStore

  useEffect(() => {
    if (id) {
      setLink(`${window.location.origin}/auth?agent=${id}`)
    }
  }, [id])

  useEffect(() => {
    const tooltipTimeout = setTimeout(() => {
      if (copyTooltipOpen) setCopyTooltipOpen(false)
    }, 1500)

    return () => {
      clearTimeout(tooltipTimeout)
    }
  }, [copyTooltipOpen])

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(link)
    setCopyTooltipOpen(true)
  }

  const networks = [
    { label: 'Vkontakte', link: '/', icon: <VkIcon /> },
    { label: 'Facebook', link: '/', icon: <FacebookIcon /> },
    { label: 'Instagram', link: '/', icon: <InstagramIcon /> },
    { label: 'telegram', link: '/', icon: <TelegramIcon /> },
    { label: 'whatsapp', link: '/', icon: <WhatsAppIcon /> }
  ]

  const networkList = networks.map(({ label, link, icon }) => (
    <li key={label}>
      <Link href={link} prefetch={false}>
        <a>{icon}</a>
      </Link>
    </li>
  ))

  return (
    <S.Info>
      <S.Text>{t('agent-can-be-individual-or-legal-entity')}</S.Text>

      <S.Text>{t('no-further-participation-is-required')}</S.Text>

      <S.LinksBlock>
        <S.LinksBlockLeft>
          <S.Text>{t('your-hash-link')}</S.Text>

          <S.LinkContainer>
            <Link href={link} prefetch={false}>
              <a>{link}</a>
            </Link>

            <Tooltip open={copyTooltipOpen} title="Скопировано">
              <S.CopyIcon>
                <CopyIcon onClick={copyLinkToClipboard} />
              </S.CopyIcon>
            </Tooltip>
          </S.LinkContainer>
        </S.LinksBlockLeft>

        <S.Networks>{networkList}</S.Networks>
      </S.LinksBlock>
    </S.Info>
  )
})
