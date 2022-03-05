import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Button } from 'landing/new/ui'

import * as S from './ForBusiness.styled'

import dashboard from '@public/img/landing/new/dashboard.png'
import ChartSVG from '@public/img/landing/new/chart.svg'
import LogoIcon from '@public/img/landing/new/icons/logo-icon.svg'
import happy from '@public/img/landing/new/emodji/happy.png'
import fireEmodji from '@public/img/landing/new/emodji/fire.png'
import smiling from '@public/img/landing/new/emodji/smiling.png'
import heaerEmodji from '@public/img/landing/new/emodji/heart.png'
import kiss from '@public/img/landing/new/emodji/kiss.png'
import baloonEmodji from '@public/img/landing/new/emodji/baloon.png'
import smile from '@public/img/landing/new/emodji/smile.png'
import thumbsUpEmodji from '@public/img/landing/new/emodji/thumbs-up.png'
import PrivateSVG from '@public/img/landing/new/icons/private.svg'
import NetworkSVG from '@public/img/landing/new/icons/network.svg'
import gamerLg from '@public/img/landing/new/gamer-lg.png'
import gamerMd from '@public/img/landing/new/gamer-md.png'
import gamerSm from '@public/img/landing/new/gamer-sm.png'
import gamerXs from '@public/img/landing/new/gamer-xs.png'

export const ForBusiness = () => {
  const { t } = useTranslation('common')

  const counters = [
    { label: t('not-taxable'), count: 0, symbol: '%' },
    { label: t('service-fee-five'), count: 5, symbol: '%' },
    { label: t('free-service'), count: 0, symbol: '€' }
  ]

  const comments = [
    { smile: happy, comment: t('best-waiter'), emodji: fireEmodji },
    { smile: smiling, comment: t('thank-you-for-coffee'), emodji: heaerEmodji },
    { smile: smile, comment: t('best-place-of-all'), emodji: thumbsUpEmodji },
    { smile: kiss, comment: t('thank-you-for-delivery'), emodji: baloonEmodji }
  ]

  const countersItems = counters.map(({ label, count, symbol }) => {
    return (
      <S.CounterItem key={label}>
        <S.CounterCircle>
          <S.CounterCount>{count}</S.CounterCount>
          <S.CounterSymbol>{symbol}</S.CounterSymbol>
        </S.CounterCircle>

        <S.Text>{label}</S.Text>
      </S.CounterItem>
    )
  })

  const commentsItems = comments.map(({ smile, comment, emodji }) => {
    return (
      <S.CommentItem key={comment}>
        <S.CommentSmile>
          <Image src={smile} alt="smile" />
        </S.CommentSmile>

        <S.CommentBody>
          <S.Text tag="span">{comment}</S.Text>

          <Image src={emodji} alt="emodji" />
        </S.CommentBody>
      </S.CommentItem>
    )
  })

  return (
    <S.ForBusiness id="for-business">
      <S.Wrapper>
        <S.Top>
          <S.ForBusinessText>{t('for-business-2')}</S.ForBusinessText>

          <S.Text tag="h2">{t('allow-guest-leave-review-thank-staff')}</S.Text>

          <Button color="white">{t('connect-free')}</Button>
        </S.Top>

        <S.CountersList>{countersItems}</S.CountersList>

        <S.AdvantagesGrid>
          <S.ControlTransparency>
            <S.ControlTransparencyLeft>
              <LogoIcon />

              <S.Text tag="h4">{t('control-transparency')}</S.Text>

              <S.Text>{t('personal-qr-codes-for-each-employee')}</S.Text>

              <Button color="white">{t('sign-up')}</Button>
            </S.ControlTransparencyLeft>

            <img src={dashboard.src} alt="dashboard" />
          </S.ControlTransparency>

          <S.BasedOnData>
            <ChartSVG />

            <S.Text tag="h4">{t('make-businnes-decisions-based-data')}</S.Text>

            <S.Text>{t('transactions-reviews-provide-information')}</S.Text>
          </S.BasedOnData>

          <S.IncreaseEngaged>
            <S.CommentsList>{commentsItems}</S.CommentsList>

            <S.Text tag="h4">{t('increase-team-engagement')}</S.Text>

            <S.Text>{t('regular-feeback-additional-material-support')}</S.Text>
          </S.IncreaseEngaged>
        </S.AdvantagesGrid>

        <S.BusinessTypes>
          <S.SmallBusiness>
            <PrivateSVG />

            <S.TextGradient tag="h5">{t('small-business')}</S.TextGradient>

            <S.Text tag="h3">{t('start-accepting-tips-after-five-min')}</S.Text>

            <Button color="white">{t('connect-free')}</Button>
          </S.SmallBusiness>

          <S.NetworkEstablishments>
            <NetworkSVG />

            <S.TextGradient tag="h5">{t('network-stablishments')}</S.TextGradient>

            <S.Text tag="h3">
              {t('unlimited-number-estlishments')}. {t('setting-up-qr-code')}
            </S.Text>

            <Button color="white">{t('connect-free')}</Button>
          </S.NetworkEstablishments>
        </S.BusinessTypes>

        <S.AcceptDonations>
          <S.ImgLg>
            <img src={gamerLg.src} alt="gamer" />
          </S.ImgLg>

          <S.ImgMd>
            <img src={gamerMd.src} alt="gamer" />
          </S.ImgMd>

          <S.ImgSm>
            <img src={gamerSm.src} alt="gamer" />
          </S.ImgSm>

          <S.ImgXs>
            <img src={gamerXs.src} alt="gamer" />
          </S.ImgXs>

          <S.AcceptDonationsBody>
            <LogoIcon />

            <S.Text tag="h3">{t('accept-donations-viewers-subscribers')}</S.Text>

            <S.Text>{t('place-qr-code-to-payment-page')}</S.Text>

            <Button color="white">{t('connect-free')}</Button>
          </S.AcceptDonationsBody>
        </S.AcceptDonations>
      </S.Wrapper>
    </S.ForBusiness>
  )
}
