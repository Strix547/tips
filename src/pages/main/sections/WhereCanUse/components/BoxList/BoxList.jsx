import { useMediaQuery } from 'react-responsive'

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
  const screenMore700 = useMediaQuery({ minWidth: 701 })

  const boxes = [
    {
      title: 'Чаевые по QR-коду',
      subtitle: 'Размещайте QR-код на POS-материалах и любой заметной поверхности:',
      points: ['Визитки', 'Нашивки на форму', 'Наклейки', 'Чеки и пречеки', 'Тейбл-тенты'],
      preview: qrFirst
    },
    {
      title: 'Чаевые и донаты по ссылке',
      subtitle: 'Размещайте ссылку на любой удобной площадке:',
      points: [
        'В соцсетях',
        'В SMS',
        'На сайте',
        'В E-mail рассылках',
        'В моб приложении',
        'В PUSH-уведомлениях',
        'На стриме',
        'В мессенджерах'
      ],
      preview: screenMore700 ? qrSecond : qrSecondMobile
    },
    {
      title: 'Интеграция по API и SDK',
      subtitle: 'Наши API и SDK позволяют:',
      points: [
        'Просто и быстро реализовать отправку чаевых в мобильном приложении и на сайте',
        'Добавить ссылку на отправку чаевых в рассылку (SMS/E-mail/PUSH-уведомления)',
        'Регистрировать пользователей, получать статистику и многое другое'
      ],
      preview: screenMore700
        ? [
            { label: 'recipient card', img: recipientCard },
            { label: 'emotions block', img: emotionsBlock }
          ]
        : [{ label: 'recipient card', img: recipientCardMobile }]
    },
    {
      title: 'Интеграция с кассовым ПО',
      subtitle:
        'Сервис легко интегрируется с кассовым ПО. Готовые модули для систем iiko, r_keeper, poster позволяют печатать QR-код прямо в чеке/пречеке.',
      preview: qrThird
    }
  ]

  const boxList = boxes.map((props) => <Box key={props.title} {...props} />)

  return <S.BoxList>{boxList}</S.BoxList>
}
