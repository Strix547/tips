import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { FormField, DatePicker, Button } from 'ui'

import { userStore } from 'store'

import * as S from './PersonalData.styled'

export const PersonalDataPage = observer(() => {
  const useFormProps = useForm()

  const { isPersonalDataLoading, id: userId } = userStore

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
    const { firstName, lastName, email, address, postal, birthDate } = useFormProps.getValues()

    userStore.changePersonalData({
      userId,
      firstName,
      lastName,
      email,
      address,
      postalCode: postal,
      birthDate: new Date(birthDate).toISOString().split('T')[0] || undefined
    })
  }

  return (
    <>
      <Head>
        <title>Персональные данные</title>
      </Head>

      <AccountLayout title="Персональные данные">
        <S.Content>
          {!isPersonalDataLoading ? (
            <FormProvider {...useFormProps}>
              <FormField name="firstName" label="Имя" placeholder="Введите имя" />

              <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" />

              <FormField
                rules={{
                  validate: (value) => value.indexOf('_') === -1
                }}
                name="birthDate"
                label="Дата рождения"
                placeholder="dd/mm/yyyy"
                MaskProps={{ mask: '99/99/9999' }}
              />

              {/* <DatePicker name="birthDate" dateFormat="dd/MM/yyyy" label="Дата рождения" /> */}

              <FormField type="email" name="email" label="E-mail" placeholder="Введите e-mail" />

              <FormField name="address" label="Адрес" placeholder="Введите адрес" />

              <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" />

              <Button onClick={onEditData}>Сохранить</Button>
            </FormProvider>
          ) : (
            <Skeleton count={7} height={88} />
          )}
        </S.Content>
      </AccountLayout>
    </>
  )
})
