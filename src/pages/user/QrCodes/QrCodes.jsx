import { AccountLayout } from 'layout'

import * as S from './QrCodes.styled'

export const QrCodesPage = () => {
  const a = 1
  const onAddQrClick = () => {}

  return (
    <AccountLayout title="Мои QR" button={{ label: 'Добавить QR-код', onClick: onAddQrClick }}>
      {a}
    </AccountLayout>
  )
}
