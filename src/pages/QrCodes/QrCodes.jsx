import { AccountLayout } from 'layout'
import { BusinessQrCard } from 'components'

import * as S from './QrCodes.styled'

import qrPlaceholder from '@public/img/placeholders/qr.png'

export const QrCodesPage = () => {
  const qrCodes = [
    { label: 'Ресторан Жиши-Суши', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши1', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши2', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши3', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши4', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши5', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши6', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши7', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши8', qr: qrPlaceholder },
    { label: 'Ресторан Жиши-Суши9', qr: qrPlaceholder }
  ]

  const onAddQrClick = () => {}

  const qrCodeList = qrCodes.map(({ label, qr }) => (
    <BusinessQrCard key={label} tag="li" label={label} qr={qr} />
  ))

  return (
    <AccountLayout title="Мои QR" button={{ label: 'Добавить QR-код', onClick: onAddQrClick }}>
      <S.PlatformQrGrid>{qrCodeList}</S.PlatformQrGrid>
    </AccountLayout>
  )
}
