import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Section } from 'landing/components'
import { FormField, Checkbox, PhoneField, Button } from 'ui'

import { ROUTES } from 'core/routes'
import { authStore } from 'store'

import * as S from './ConnectForm.styled'

import GreenDotesSvg from '@public/img/landing/green-dotes.svg'

export const ConnectFormSection = () => {
  const router = useRouter()
  const useFormProps = useForm()
  const { handleSubmit } = useFormProps

  const toCodeStepWithAuthData = async ({ firstName, email, phone }) => {
    await authStore.sendCode(phone)
    authStore.setAuthData({ firstName, email, phone })
    authStore.setStep('code')
    router.push(ROUTES.AUTH)
  }

  return (
    <Section title={['Форма подключения', 'Бизнес-площадки к системе']} styles={S.sectionStyles}>
      <S.Content>
        <S.Subtitle>
          Посетитель может оставить заявку на звонок менеджера для консультации по подключению
          бизнеса к системе
        </S.Subtitle>

        <S.FormContainer>
          <S.Form onSubmit={handleSubmit(toCodeStepWithAuthData)}>
            <FormProvider {...useFormProps}>
              <FormField name="firstName" label="Имя" placeholder="Введите Ваше имя" required />

              <PhoneField
                rules={{ required: true, minLength: 11 }}
                name="phone"
                country="ru"
                placeholder="+7 (___) ___-__-__"
              />

              <FormField
                type="email"
                name="email"
                label="E-mail"
                placeholder="Введите e-mail"
                required
              />

              <Checkbox
                rules={{ required: true }}
                label="Даю согласие на обработку персональных данных"
                required
              />

              <Checkbox
                rules={{ required: true }}
                label="Согласен на маркетинговую рассылку"
                required
              />

              <Button type="submit">Подключить заведение</Button>
            </FormProvider>
          </S.Form>

          <S.FormBottom>
            <S.Text>
              Если вы физлицо - получатель чаевых, <br />
              <Link href={ROUTES.AUTH}>
                <a>зарегистрируйтесь</a>
              </Link>{' '}
              в сервисе
            </S.Text>
          </S.FormBottom>
        </S.FormContainer>

        <S.Background>
          <GreenDotesSvg />
          <GreenDotesSvg />
        </S.Background>
      </S.Content>
    </Section>
  )
}
