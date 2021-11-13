import { useTranslation } from 'next-i18next'

import { Box } from '../Box'

import * as S from './BoxList.styled'

import qrFirst from '@public/img/landing/qr-1.png'
import qrSecond from '@public/img/landing/qr-2.png'
import qrSecondMobile from '@public/img/landing/qr-2-mobile.png'
import qrThird from '@public/img/landing/qr-3.png'

import recipientCard from '@public/img/landing/recipient-card.png'
import recipientCardMobile from '@public/img/landing/recipient-card-mobile.png'
import emotionsBlock from '@public/img/landing/emotions-block.png'

export const BoxList = () => {
  const { t } = useTranslation('common')

  const boxes = [
    {
      title: t('tips-qr-code'),
      subtitle: t('put-qr-anywhere'),
      points: [
        t('on-visit-cards'),
        t('emblems-clothing'),
        t('on-stickers'),
        t('bills'),
        t('on-tables')
      ],
      preview: [{ label: 'qr-код заведения', desktop: qrFirst }]
    },
    {
      title: t('tips-donate-link'),
      subtitle: t('put-qr-anywhere'),
      points: [
        t('in-social-networks'),
        t('sms'),
        t('on-website'),
        t('emails'),
        t('in-mobile-app'),
        t('in-push-notifications'),
        t('in-live-streams'),
        t('in-messengers')
      ],
      preview: [{ label: 'qr-код заведения с сылками', desktop: qrSecond, mobile: qrSecondMobile }]
    },
    {
      title: t('integration-api-sdk'),
      subtitle: t('our-api-skd-let-us'),
      points: [
        t('receive-tips-quick-easy-way'),
        t('to-add-link-for-receiving-tips'),
        t('register-users-analyse-statistics')
      ],
      preview: [
        { label: 'карточка получателя', desktop: recipientCard, mobile: recipientCardMobile },
        { label: 'блок ваши впечатлений', desktop: emotionsBlock, mobile: null }
      ]
    },
    {
      title: t('cash-register-integration'),
      subtitle: t('cash-register-integration-text'),
      preview: [{ label: 'qr-код заведения', desktop: qrThird }]
    }
  ]

  const boxList = boxes.map((props) => <Box key={props.title} {...props} />)

  return <S.BoxList>{boxList}</S.BoxList>
}
