import { useState, useEffect } from 'react'
import Link from 'next/link'
import Tooltip from '@material-ui/core/Tooltip'

import * as S from './Info.styled'

import CopyIcon from '@public/icons/copy.svg'
import VkIcon from '@public/icons/networks/vk-big.svg'
import FacebookIcon from '@public/icons/networks/facebook-big.svg'
import InstagramIcon from '@public/icons/networks/instagram-big.svg'

export const Info = () => {
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false)

  const link = 'https://tips.me/signup/agent=SjddSzj41Fz'

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
    { label: 'vk', link: '/', icon: <VkIcon /> },
    { label: 'facebook', link: '/', icon: <FacebookIcon /> },
    { label: 'instagram', link: '/', icon: <InstagramIcon /> }
  ]

  const networkList = networks.map(({ label, link, icon }) => (
    <li key={label}>
      <Link href={link}>
        <a>{icon}</a>
      </Link>
    </li>
  ))

  return (
    <S.Info>
      <S.Text>
        Агентом может быть как физическое лицо так и юридическое лицо. После регистрации вы
        получаете реферальную ссылку и промокод, которые закрепляются за вами. Со всех заказов
        привлеченных клиентов вы получаете свой процент.
      </S.Text>

      <S.Text>
        От вас не требуется никакое участие в процессе сделки с клиентом. Всю консультацию клиента,
        расходы по пересылке и доставке берет на себя интернет магазин. Вы можете находится в любой
        точке мира, главное чтобы ваши клиенты были из РФ, Белоруссии или Казахстана.
      </S.Text>

      <S.LinksBlock>
        <S.Text>HASH с идентификатором агента:</S.Text>

        <Link href={link}>
          <a>{link}</a>
        </Link>

        <Tooltip open={copyTooltipOpen} title="Скопировано">
          <S.CopyIcon>
            <CopyIcon onClick={copyLinkToClipboard} />
          </S.CopyIcon>
        </Tooltip>

        <S.Networks>{networkList}</S.Networks>
      </S.LinksBlock>
    </S.Info>
  )
}
