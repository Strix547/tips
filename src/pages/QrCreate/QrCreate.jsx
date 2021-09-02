import { AccountLayout } from 'layout'
import { QrOptionsPanel, QrPreview } from './components'

import * as S from './QrCreate.styled'

export const QrCreatePage = () => {
  return (
    <AccountLayout title="Создать QR-код">
      <S.Content>
        <QrOptionsPanel />
        <QrPreview />
      </S.Content>
    </AccountLayout>
  )
}
