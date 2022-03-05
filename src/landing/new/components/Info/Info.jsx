import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { PayTipsQr } from 'landing/new/components'
import { Button } from 'landing/new/ui'

import { localeImg } from 'utils'

import * as S from './Info.styled'

import baristaLg from '@public/img/landing/new/barista-lg.png'
import baristaMd from '@public/img/landing/new/barista-md.png'
import baristaSm from '@public/img/landing/new/barista-sm.png'
import baristaXs from '@public/img/landing/new/barista-xs.png'

import PayScreenRu from '@public/img/landing/new/pay-screen-ru.png'
import PayScreenEn from '@public/img/landing/new/pay-screen-en.png'
import PayScreenFr from '@public/img/landing/new/pay-screen-fr.png'
import CommentSVG from '@public/img/landing/new/icons/comment.svg'

export const Info = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  const tips = [
    { tipAmount: 15, comment: t('best-waiter'), time: '12:10' },
    { tipAmount: 5, comment: t('thank-you-for-coffee'), time: '11:48' },
    { tipAmount: 5, comment: t('best-place-of-all'), time: '11:48' },
    { tipAmount: 5, comment: t('thank-you-for-delivery'), time: '11:20' }
  ]

  const tipsItems = tips.map(({ tipAmount, comment, time }) => {
    return (
      <S.TipItem key={comment}>
        <CommentSVG />

        <S.TipItemBody>
          <S.Text>
            <S.TipAmount>+{tipAmount} EUR</S.TipAmount>
            <span>Flytips</span>
          </S.Text>

          <S.Text>{comment}</S.Text>
        </S.TipItemBody>

        <S.TipTime>{time}</S.TipTime>
      </S.TipItem>
    )
  })

  return (
    <S.Info>
      <S.Wrapper>
        <S.ServiceSector>
          <S.Text>{t('for-those-who-work-service-sector')}</S.Text>

          <S.ImgLg>
            <img src={baristaLg.src} alt="barista" />
          </S.ImgLg>

          <S.ImgMd>
            <img src={baristaMd.src} alt="barista" />
          </S.ImgMd>

          <S.ImgSm>
            <img src={baristaSm.src} alt="barista" />
          </S.ImgSm>

          <S.ImgXs>
            <img src={baristaXs.src} alt="barista" />
          </S.ImgXs>
        </S.ServiceSector>

        <S.Steps>
          <S.Step>
            <PayTipsQr />
            <S.Text>{t('share-your-qr-code')}</S.Text>
          </S.Step>

          <S.Step>
            <Image
              width={167}
              height={340}
              src={localeImg(locale, PayScreenRu, PayScreenEn, PayScreenFr)}
              alt="Tips pay screen"
            />

            <S.Text>{t('customer-scans-qr-transfer-tip')}</S.Text>
          </S.Step>
        </S.Steps>

        <S.GetTips>
          <S.GetTipsLeft>
            <S.Text tag="h2">{t('get-30-more-tips')}</S.Text>

            <S.Text>{t('when-you-connect-cashless-payment')}</S.Text>

            <Button>{t('connect-free')}</Button>
          </S.GetTipsLeft>

          <S.TipsList>{tipsItems}</S.TipsList>
        </S.GetTips>
      </S.Wrapper>
    </S.Info>
  )
}
