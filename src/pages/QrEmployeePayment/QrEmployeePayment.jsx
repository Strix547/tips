import { AccountLayout } from 'layout'
import { EmployeeTipsPayment } from 'components'

import * as S from './QrEmployeePayment.styled'

export const QrEmployeePaymentPage = () => {
  return (
    <AccountLayout title="QR 274920475">
      <S.Content>
        <EmployeeTipsPayment />
      </S.Content>
    </AccountLayout>
  )
}
