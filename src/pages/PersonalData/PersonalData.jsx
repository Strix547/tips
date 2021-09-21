import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'

import { AccountLayout } from 'layout'
import { FormField, LocationSearch, DatePicker, Button } from 'ui'

import { userStore, localStore } from 'store'

import * as S from './PersonalData.styled'

export const PersonalDataPage = observer(() => {
  const useFormProps = useForm()

  const { isPersonalDataLoading, id: userId } = userStore
  const eighteenYearsAgo = new Date(
    new Date().setTime(new Date().valueOf() - 18 * 365 * 24 * 60 * 60 * 1000)
  )

  useEffect(async () => {
    if (userId) {
      const { firstName, lastName, birthDate, email, address, postal } =
        await userStore.getPersonalData(userId)

      const fieldsTemplate = [
        { label: 'firstName', value: firstName },
        { label: 'lastName', value: lastName },
        { label: 'birthDate', value: birthDate },
        { label: 'email', value: email },
        { label: 'address', value: address },
        { label: 'postal', value: postal }
      ]

      fieldsTemplate.forEach(({ label, value }) => {
        useFormProps.setValue(label, value)
      })
    }
  }, [userId])

  const onEditData = () => {
    const { firstName, lastName, email, city, address, postal, birthDate } =
      useFormProps.getValues()
    const countryCode = localStore.selectedCountryCode

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
        {!isPersonalDataLoading ? (
          <FormProvider {...useFormProps}>
            <FormField name="firstName" label="Имя" placeholder="Введите имя" />

            <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" />

            <DatePicker
              name="birthDate"
              dateFormat="dd/MM/yyyy"
              maxDate={eighteenYearsAgo}
              label="Дата рождения"
            />

            <FormField type="email" name="email" label="E-mail" placeholder="Введите e-mail" />

            <LocationSearch useFormProps={useFormProps} />

            <FormField name="address" label="Адрес" placeholder="Введите адрес" />

            <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" />

            <Button onClick={onEditData}>Сохранить</Button>
          </FormProvider>
        ) : (
          <Skeleton count={7} height={88} />
        )}
      </S.Content>
    </AccountLayout>
  )
})
