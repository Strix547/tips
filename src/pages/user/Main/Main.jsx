import { AccountLayout } from 'layout'
import { BarChart } from 'components'

import * as S from './Main.styled'

export const UserMainPage = () => {
  const onCreateQrClick = () => {}

  return (
    <AccountLayout title="Главная" button={{ label: 'Создать QR-код', onClick: onCreateQrClick }}>
      <BarChart title="Статистика входящих оплат" />
    </AccountLayout>
  )
}
