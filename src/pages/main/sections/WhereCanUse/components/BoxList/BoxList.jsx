import { Box } from '../Box'

import * as S from './BoxList.styled'

import qrFirst from '@public/img/pages/main/qr-1.png'
import qrSecond from '@public/img/pages/main/qr-2.png'
import qrThird from '@public/img/pages/main/qr-3.png'

import recipientCard from '@public/img/pages/main/recipient-card.png'
import emotionsBlock from '@public/img/pages/main/emotions-block.png'

export const BoxList = () => {
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
      preview: qrSecond
    },
    {
      title: 'Интеграция по API и SDK',
      subtitle: 'Наши API и SDK позволяют:',
      points: [
        'Просто и быстро реализовать отправку чаевых в мобильном приложении и на сайте',
        'Добавить ссылку на отправку чаевых в рассылку (SMS/E-mail/PUSH-уведомления)',
        'Регистрировать пользователей, получать статистику и многое другое'
      ],
      preview: [recipientCard, emotionsBlock]
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
