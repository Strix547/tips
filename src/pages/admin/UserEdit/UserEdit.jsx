import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useForm, FormProvider } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { FormField, Button, Switch, Select, MenuItem, PhoneField } from 'ui'

import { adminStore, userStore } from 'store'
import { transformDateTimeToLabel } from 'utils'
import { USER_ROLES } from 'core/constants'

import * as S from './UserEdit.styled'

export const UserEditPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const useFormProps = useForm()
  const { reset, watch, handleSubmit } = useFormProps

  const userId = router.query.id
  const { user, isUserLoading } = adminStore
  const adminId = userStore.id
  const [firstName, lastName] = watch(['firstName', 'lastName'])

  useEffect(() => {
    if (!userId) return

    adminStore.getUser(userId)
  }, [userId])

  useEffect(() => {
    if (isUserLoading) return

    const {
      phone,
      firstName,
      lastName,
      email,
      country,
      role,
      signUpDateTime,
      lastSignInDateTime,
      active,
      agentActive
    } = user

    reset({
      signUpDateTime: transformDateTimeToLabel(signUpDateTime),
      lastSignInDateTime: transformDateTimeToLabel(lastSignInDateTime),
      country,
      firstName,
      lastName,
      phone,
      email,
      activity: active,
      agentActive,
      group: role
    })
  }, [user, isUserLoading, reset])

  const groupMenuItems = USER_ROLES.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  const onUserSave = ({ firstName, lastName, phone, email, group, activity, agentActive }) => {
    adminStore.changeUser({
      userId,
      firstName,
      lastName,
      phone,
      email,
      group,
      activity,
      agentActive
    })
  }

  const intoAdminMode = (userId, adminId) => {
    adminStore.activateAdminMode(userId, adminId)
  }

  if (isUserLoading) {
    return (
      <>
        <Head>
          <title>{t('user-editing')}</title>
        </Head>

        <AccountLayout title={t('user-editing')}>
          <S.Form>
            <Skeleton count={8} height={88} />
          </S.Form>
        </AccountLayout>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>
          {t('user-editing')} {lastName} {firstName}
        </title>
      </Head>

      <AccountLayout title={`${t('user-editing')} ${lastName} ${firstName}`}>
        <FormProvider {...useFormProps}>
          <S.Form onSubmit={handleSubmit(onUserSave)}>
            <FormField name="signUpDateTime" label={t('sign-up-date')} disabled />
            <FormField name="lastSignInDateTime" label={t('last-log-in-date')} disabled />
            <FormField name="country" label={t('register-country')} disabled />
            <FormField name="firstName" label={t('name')} placeholder={t('write-name')} />
            <FormField name="lastName" label={t('last-name')} placeholder={t('enter-lastname')} />
            <PhoneField />
            <FormField name="email" label={t('email')} placeholder={t('write-email')} />

            <S.Label>{t('group')}</S.Label>
            <Select name="group">{groupMenuItems}</Select>

            <S.Options>
              <S.Label>{t('acitivity')}</S.Label>
              <Switch name="activity" size="big" />

              <S.Label>Агент</S.Label>
              <Switch name="agentActive" size="big" />
            </S.Options>

            <S.ActionsRow>
              <Button type="submit">{t('save')}</Button>
              <Button type="button" onClick={() => intoAdminMode(userId, adminId)}>
                {t('login')}
              </Button>
            </S.ActionsRow>
          </S.Form>
        </FormProvider>
      </AccountLayout>
    </>
  )
})
