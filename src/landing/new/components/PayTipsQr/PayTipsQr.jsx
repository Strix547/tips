import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { localeImg } from 'utils'

import * as S from './PayTipsQr.styled'

import LogoWhiteSVG from '@public/img/landing/new/logo-white.svg'
import QrPayRu from '@public/img/landing/new/qr-pay-ru.svg'
import QrPayEn from '@public/img/landing/new/qr-pay-en.svg'
import QrPayFr from '@public/img/landing/new/qr-pay-fr.svg'

export const PayTipsQr = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
    <S.PayTipsQr>
      <LogoWhiteSVG />

      <S.Qr>{localeImg(locale, <QrPayRu />, <QrPayEn />, <QrPayFr />)}</S.Qr>

      <S.Text>{t('point-your-camera-leave-tip')}</S.Text>
    </S.PayTipsQr>
  )
}
