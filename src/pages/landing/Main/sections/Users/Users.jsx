import { Section } from 'landing/components'
import { RowSection } from './components'

import { ROUTE_NAMES } from 'core/routes'

import businessDashboard from '@public/img/landing/business-dashboard.png'
import recipientDashboard from '@public/img/landing/recipient-dashboard.png'
import artistDashboard from '@public/img/landing/artist-dashboard.png'
import agentDashboard from '@public/img/landing/agent-dashboard.png'
import payerDashboard from '@public/img/landing/payer-dashboard.png'

export const UsersSection = () => {
  const sections = [
    {
      title: 'Бизнесу',
      subtitle: 'Мотивируйте сотрудников и повышайте лояльность гостей',
      pageLink: ROUTE_NAMES.BUSINESS,
      features: [
        'Бесплатно для бизнеса',
        'Дополнительный заработок для',
        'Инструмент повышения уровня сервиса и гостеприимства',
        'Простая интеграция: API, SDK, модули для касс'
      ],
      action: { label: 'Подключить заведение' },
      img: businessDashboard
    },
    {
      title: 'Работникам сферы услуг',
      subtitle: 'Принимайте безналичные чаевые по QR-коду или ссылке',
      pageLink: ROUTE_NAMES.RECIPIENTS,
      features: [
        'Не облагаются налогом',
        'Моментальное зачисление на банковскую карту',
        'Расчеты обеспечивает Тинькофф'
      ],
      action: { label: 'Получать чаевые' },
      img: recipientDashboard
    },
    {
      title: 'Блогерам, артистам и музыкантам',
      subtitle: 'Принимайте донаты и адресные пожертвования на сайте, в блоге и соцсетях',
      pageLink: ROUTE_NAMES.RECIPIENTS,
      features: [
        'Множество опций по настройке персональной страницы оплаты',
        'Моментальное зачисление на банковскую карту',
        'Расчеты обеспечивает Тинькофф'
      ],
      action: { label: 'Получать донаты' },
      img: artistDashboard
    },
    {
      title: 'Агентам',
      subtitle: 'Приглашайте людей и получайте от их чеков проценты',
      pageLink: ROUTE_NAMES.AGENTS,
      features: [
        'Не облагаются налогом',
        'Моментальное зачисление на банковскую карту',
        'Расчеты обеспечивает Тинькофф'
      ],
      action: { label: 'Получать чаевые' },
      img: agentDashboard
    },
    {
      title: 'Плательщикам',
      subtitle: 'Участвуйте в нашей программе лояльности',
      pageLink: ROUTE_NAMES.PAYERS,
      features: [
        'Бесплатно для бизнеса',
        'Дополнительный заработок для',
        'Инструмент повышения уровня сервиса и гостеприимства',
        'Простая интеграция: API, SDK, модули для касс'
      ],
      action: { label: 'Подключить заведение' },
      img: payerDashboard
    }
  ]

  const sectionList = sections.map((props, idx) => (
    <RowSection key={props.title} {...props} reversed={idx % 2 !== 0} />
  ))

  return <Section title={['Для всех, кто получает', 'чаевые и донаты']}>{sectionList}</Section>
}
