import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

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

import * as S from './Create.styled'

export const EmployeeCreatePage = observer(() => {
  const { t } = useTranslation('common')
  const useFormProps = useForm()
  const { handleSubmit } = useFormProps

  const { isEmployeeConnecting, isEmployeeFinding, userId } = employeesStore.employee
  const [employeeFieldsVisible, setEmployeeFieldsVisible] = useState(false)

  const isUserFound = Boolean(userId)

  useEffect(() => {
    employeesStore.resetEmployeeCreating()
  }, [])

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

  const onUserFind = ({ phone }) => {
    employeesStore.findEmployeeByPhone(phone)
    setEmployeeFieldsVisible(true)
  }

  const onConnectToPlatform = ({ platform }) => {
    employeesStore.connectEmployeeToPlatform({ userId, platformId: platform.platformId })
  }

  const newEmployeeForm = !isEmployeeConnecting ? (
    <S.FormContainer onSubmit={handleSubmit(onCreateEmployee)}>
      <FormProvider {...useFormProps}>
        <FormField name="firstName" label={t('name')} placeholder={t('write-name')} required />

        <FormField
          name="lastName"
          label={t('last-name')}
          placeholder={t('enter-lastname')}
          required
        />

        <EmailField />

        <BirthDateAdultValid />

        <LocationSearch />

        <FormField name="address" label={t('address')} placeholder={t('enter-address')} />

        <FormField name="postal" label={t('zip-code')} placeholder={t('enter-zip-code')} required />

        <PlatformSearch label={t('platform-connected-to-employee')} />

        <Button type="submit">{t('create-employee')}</Button>
      </FormProvider>
    </S.FormContainer>
  ) : (
    <S.LoadingContainer>
      <CircularProgress size={80} />
    </S.LoadingContainer>
  )

  const findEmployeeForm = (
    <S.FormContainer onSubmit={handleSubmit(onUserFind)}>
      {!isEmployeeFinding ? (
        <FormProvider {...useFormProps}>
          <PhoneField />

          <Button type="submit">{t('find-employee')}</Button>
        </FormProvider>
      ) : (
        <Skeleton height={164} />
      )}
    </S.FormContainer>
  )

  const connectToPlatformForm = (
    <S.FormContainer onSubmit={handleSubmit(onConnectToPlatform)}>
      {!isEmployeeConnecting ? (
        <FormProvider {...useFormProps}>
          <PlatformSearch />

          <Button type="submit">{t('connect-to-platform')}</Button>
        </FormProvider>
      ) : (
        <Skeleton height={164} />
      )}
    </S.FormContainer>
  )

  const employeeFields = isUserFound ? connectToPlatformForm : newEmployeeForm

  return (
    <>
      <Head>
        <title>{t('creating-employee')}</title>
      </Head>

      <AccountLayout title={t('creating-employee')}>
        {employeeFieldsVisible && !isEmployeeFinding ? employeeFields : findEmployeeForm}
      </AccountLayout>
    </>
  )
})
