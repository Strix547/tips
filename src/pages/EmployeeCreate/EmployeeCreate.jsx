import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import {
  FormField,
  Button,
  LocationSearch,
  EmailField,
  PhoneField,
  BirthDateAdultValid,
  PlatformSearch,
  CircularProgress
} from 'ui'

import { employeesStore } from 'store'
import { transformDateLabelToIso } from 'utils'

import * as S from './EmployeeCreate.styled'

export const EmployeeCreatePage = observer(() => {
  const useFormProps = useForm()
  const { handleSubmit } = useFormProps

  const { isEmployeeCreating, userNotFound } = employeesStore

  const onCreateEmployee = ({
    platform,
    phone,
    firstName,
    lastName,
    email,
    birthDate,
    country,
    city,
    postal,
    address
  }) => {
    employeesStore.createEmployee({
      platformId: platform.platformId,
      phone,
      email,
      firstName,
      lastName,
      birthDate: transformDateLabelToIso(birthDate),
      countryCode: country.code,
      city,
      address,
      postal
    })
  }

  const onUserFind = ({ phone, platform }) => {
    employeesStore.connectEmployeeToPlatform({ phone, platformId: platform.platformId })
  }

  const newEmployeeFields = !isEmployeeCreating ? (
    <S.FormContainer onSubmit={handleSubmit(onCreateEmployee)}>
      <FormProvider {...useFormProps}>
        <FormField name="firstName" label="Имя" placeholder="Введите имя" required />

        <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" required />

        <EmailField />

        <BirthDateAdultValid />

        <LocationSearch />

        <FormField name="address" label="Адрес" placeholder="Введите адрес" required />

        <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" required />

        <Button type="submit">Создать сотрудника</Button>
      </FormProvider>
    </S.FormContainer>
  ) : (
    <S.LoadingContainer>
      <CircularProgress size={80} />
    </S.LoadingContainer>
  )

  return (
    <>
      <Head>
        <title>Создание сотрудника</title>
      </Head>

      <AccountLayout title="Создание сотрудника">
        {!userNotFound ? (
          <S.FormContainer onSubmit={handleSubmit(onUserFind)}>
            <FormProvider {...useFormProps}>
              <PhoneField />
              <PlatformSearch label="Площадка, с которой связывается профиль сотрудника" />

              <Button type="submit">Добавить</Button>
            </FormProvider>
          </S.FormContainer>
        ) : (
          newEmployeeFields
        )}
      </AccountLayout>
    </>
  )
})
