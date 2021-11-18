import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'

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
  const useFormProps = useForm()

  const navFirstColumn = [
    { label: 'О «Fly.tips»‎', link: ROUTE_NAMES.ABOUT_US },
    { label: 'Реквизиты и информация', link: ROUTE_NAMES.CREDENTIALS },
    { label: 'Публичная оферта', link: ROUTE_NAMES.PUBLIC_OFFER },
    { label: 'Положение о конфиденциальности', link: ROUTE_NAMES.PRIVACY_POLICY }
  ]

  const navSecondColumn = [
    { label: 'Частые вопросы', link: ROUTE_NAMES.FAQ },
    { label: 'Служба поддержки', link: ROUTE_NAMES.SUPPORT },
    { label: 'Войти в кабинет', link: ROUTE_NAMES.AUTH },
    { label: 'Зарегистрироваться‎', link: ROUTE_NAMES.AUTH }
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
              Ulica Stupavska 1345/108, <br /> Malacky city 90101
            </address>

            <S.PhoneLink href="tel:+4903083798689">+49 030 83798689</S.PhoneLink>

            <S.EmailLink href="mailto:support@tipsme.com">support@tipsme.com</S.EmailLink>
          </S.Contacts>

          <S.NavList>{transformNavToList(navFirstColumn)}</S.NavList>
          <S.NavList>{transformNavToList(navSecondColumn)}</S.NavList>

          <S.TopRight>
            <S.Consultation>
              <CommentIcon />

              <S.ConsultationRight>
                <S.Text>Консультация Online</S.Text>
                <S.Text>Задавайте вопросы</S.Text>
              </S.ConsultationRight>
            </S.Consultation>

            <S.SubscriptionForm>
              <FormProvider {...useFormProps}>
                <EmailField label="Подписка на новости сервиса" />

                <Button type="submit">
                  <Telegram />
                </Button>
              </FormProvider>
            </S.SubscriptionForm>
          </S.TopRight>
        </S.Top>

        <S.Bottom>
          <S.Copyright>© 2021 «FlyTips.com»‎</S.Copyright>

          <S.PaymentServices>
            <S.Text>Принимаем к оплате</S.Text> <ul>{paymentServiceList}</ul>
          </S.PaymentServices>

          <S.NetworkList>{networkList}</S.NetworkList>
        </S.Bottom>
      </S.Wrapper>
    </S.Footer>
  )
}
