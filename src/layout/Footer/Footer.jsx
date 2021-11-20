import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import { Logo } from 'common'
import { Button, EmailField } from 'ui'

import { ROUTE_NAMES } from 'core/routes'

import * as S from './Footer.styled'

import Visa from '@public/icons/payment/visa.svg'
import AmericanExpress from '@public/icons/payment/american-express.svg'
import UnionPay from '@public/icons/payment/union-pay.svg'
import MIR from '@public/icons/payment/mir.svg'
import MasterCard from '@public/icons/payment/master-card.svg'

import Facebook from '@public/icons/networks/facebook.svg'
import Instgram from '@public/icons/networks/instgram.svg'
import VK from '@public/icons/networks/vk.svg'
import Youtube from '@public/icons/networks/youtube.svg'
import Telegram from '@public/icons/networks/telegram.svg'

import CommentIcon from '@public/icons/comment.svg'

export const Footer = () => {
  const { t } = useTranslation('common')
  const useFormProps = useForm()

  const navFirstColumn = [
    { label: t('about-flytips'), link: ROUTE_NAMES.ABOUT_US },
    { label: t('information'), link: ROUTE_NAMES.CREDENTIALS },
    { label: t('terms-of-use'), link: ROUTE_NAMES.TERMS_OF_USE },
    { label: t('privacy-policy'), link: ROUTE_NAMES.PRIVACY_POLICY }
  ]

  const navSecondColumn = [
    { label: t('faq'), link: ROUTE_NAMES.FAQ },
    { label: t('support-service'), link: ROUTE_NAMES.SUPPORT },
    { label: t('logIn'), link: ROUTE_NAMES.AUTH },
    { label: t('register'), link: ROUTE_NAMES.AUTH }
  ]

  const paymentServices = [
    { label: 'visa', icon: <Visa /> },
    { label: 'master card', icon: <MasterCard /> },
    { label: 'mir', icon: <MIR /> },
    { label: 'union pay', icon: <UnionPay /> },
    { label: 'american express', icon: <AmericanExpress /> }
  ]

  const networks = [
    { label: 'facebook', link: '/', icon: <Facebook /> },
    { label: 'vk', link: '/', icon: <VK /> },
    { label: 'instgram', link: '/', icon: <Instgram /> },
    { label: 'youtube', link: '/', icon: <Youtube /> }
  ]

  const transformNavToList = (nav) => {
    return nav.map(({ label, link }) => (
      <li key={label}>
        <Link href={link} prefetch={false}>
          <a>{label}</a>
        </Link>
      </li>
    ))
  }

  const paymentServiceList = paymentServices.map(({ label, icon }) => <li key={label}>{icon}</li>)
  const networkList = networks.map(({ label, link, icon }) => (
    <li key={label}>
      <Link href={link} prefetch={false}>
        <a>{icon}</a>
      </Link>
    </li>
  ))

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Top>
          <S.Contacts>
            <Logo />

            <address>
              178 rue du Faubourg Saint Honoré <br /> 75008 Paris
            </address>

            <S.PhoneLink href="tel:+33754498401">+33754498401</S.PhoneLink>

            <S.EmailLink href="mailto:support@flytips.com">support@flytips.com</S.EmailLink>
          </S.Contacts>

          <S.NavList>{transformNavToList(navFirstColumn)}</S.NavList>
          <S.NavList>{transformNavToList(navSecondColumn)}</S.NavList>

          <S.TopRight>
            <S.Consultation>
              <CommentIcon />

              <S.ConsultationRight>
                <S.Text>{t('online-consultation')}</S.Text>
                <S.Text>{t('ask-any-question')}</S.Text>
              </S.ConsultationRight>
            </S.Consultation>

            <S.SubscriptionForm>
              <FormProvider {...useFormProps}>
                <EmailField label={t('newsletter-subscribe')} />

                <Button type="submit">
                  <Telegram />
                </Button>
              </FormProvider>
            </S.SubscriptionForm>
          </S.TopRight>
        </S.Top>

        <S.Bottom>
          <S.Copyright>© 2021 «FlyTips.com»</S.Copyright>

          <S.PaymentServices>
            <S.Text>{t('we-do-accept')}</S.Text> <ul>{paymentServiceList}</ul>
          </S.PaymentServices>

          <S.NetworkList>{networkList}</S.NetworkList>
        </S.Bottom>
      </S.Wrapper>
    </S.Footer>
  )
}
