import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'

import { AccountLayout } from 'layout'
import { FormField, LocationSearch, DatePicker, Button } from 'ui'

import { userStore, localStore } from 'store'

import * as S from './PersonalData.styled'

export const PersonalDataPage = observer(() => {
  const useFormProps = useForm()
  const userId = userStore.id

  const onEditData = () => {
    const { firstName, lastName, email, city, address, postal, birthDate } =
      useFormProps.getValues()
    const countryCode = localStore.selectedCountryCode
    console.log(useFormProps.getValues())
    userStore.changePersonalData({
      userId,
      firstName,
      lastName,
      email,
      city,
      countryCode,
      address,
      postal,
      birthDate: birthDate?.toISOString()?.split('T')[0]
    })
  }

  return (
    <AccountLayout title="Персональные данные">
      <S.Content>
        <FormProvider {...useFormProps}>
          <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

          <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

          <DatePicker name="birthDate" dateFormat="dd/MM/yyyy" label="Дата рождения" required />

          <FormField
            type="email"
            name="email"
            label="E-mail"
            placeholder="Введите e-mail"
            required
          />

          <LocationSearch useFormProps={useFormProps} />

          <FormField name="address" label="Адрес" placeholder="Введите адрес" required />

          <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" required />

          <Button onClick={onEditData}>Сохранить</Button>
        </FormProvider>
      </S.Content>
    </AccountLayout>
  )
})
