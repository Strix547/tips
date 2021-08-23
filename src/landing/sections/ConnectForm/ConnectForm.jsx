import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'

import { Section } from 'landing/components'
import { FormField, Checkbox, PhoneField, Button } from 'ui'

import { ROUTES } from 'core/routes'

import * as S from './ConnectForm.styled'

import GreenDotesSvg from '@public/img/landing/green-dotes.svg'
import LineSvg from '@public/img/landing/line.svg'

export const ConnectFormSection = () => {
  const useFormProps = useForm()

  return (
    <Section title={['Форма подключения', 'Бизнес-площадки к системе']} styles={S.sectionStyles}>
      <S.Content>
        <S.Subtitle>
          Посетитель может оставить заявку на звонок менеджера для консультации по подключению
          бизнеса к системе
        </S.Subtitle>

        <S.FormContainer>
          <S.Form>
            <FormProvider {...useFormProps}>
              <FormField name="name" label="Имя" placeholder="Введите Ваше имя" />
              <PhoneField name="phone" country="ru" placeholder="+7 (___) ___-__-__" />
              <FormField name="name" label="Название компании" placeholder="Компания" />
              <Checkbox label="Даю согласие на обработку персональных данных" />
              <Checkbox label="Согласен на маркетинговую рассылку" />
              <Button type="submit">Подключить заведение</Button>
            </FormProvider>
          </S.Form>

          <S.FormBottom>
            <S.Text>
              Если вы физлицо - получатель чаевых, <br />
              <Link href={ROUTES.SIGN_UP}>
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
