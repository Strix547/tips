import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

export const UserMainPage = () => {
  const onCreateQrClick = () => {}

  return (
    <AccountLayout title="Главная" button={{ label: 'Создать QR-код', onClick: onCreateQrClick }}>
      <BarChart title="Статистика входящих оплат" />
      <TipsTable />
    </AccountLayout>
  )
}
