import { FormProvider, useForm } from 'react-hook-form'

import { AccountLayout } from 'layout'
import { FormField, Button } from 'ui'

import * as S from './PersonalData.styled'

export const PersonalDataPage = () => {
  const useFormProps = useForm()

  return (
    <AccountLayout title="Персональные данные">
      <S.Content>
        <FormProvider {...useFormProps}>
          <FormField name="firstName" label="Имя" placeholder="Введите имя" />
          <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" />
          <FormField type="email" name="email" label="E-mail" placeholder="Введите email" />

          <FormField
            name="platform"
            label="Площадка, с которой связывается профиль сотрудника"
            placeholder="Введите название площадки"
          />

          <Button>Сохранить</Button>
        </FormProvider>
      </S.Content>
    </AccountLayout>
  )
}
