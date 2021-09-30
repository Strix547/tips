import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Section } from 'landing/components'
import { FormField, Checkbox, PhoneField, Button } from 'ui'

import { ROUTES } from 'core/routes'
import { authStore } from 'store'

import * as S from './ConnectForm.styled'

import GreenDotesSvg from '@public/img/landing/green-dotes.svg'
import LineSvg from '@public/img/landing/line.svg'

export const ConnectFormSection = () => {
  const router = useRouter()
  const useFormProps = useForm()
  const { watch, handleSubmit } = useFormProps

  const phone = watch('phone')

  const onSubmit = ({ firstName, phone }) => {
    authStore.sendCode(phone)
    authStore.setPhone(phone)
    authStore.setFirstName(firstName)
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
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...useFormProps}>
              <FormField name="firstName" label="Имя" placeholder="Введите Ваше имя" required />

              <PhoneField
                rules={{ required: true }}
                name="phone"
                country="ru"
                placeholder="+7 (___) ___-__-__"
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
              <Button type="submit" disabled={!phone || phone?.length < 11}>
                Подключить заведение
              </Button>
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
          <LineSvg />
          <GreenDotesSvg />
        </S.Background>
      </S.Content>
    </Section>
  )
}
