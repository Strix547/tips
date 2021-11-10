import { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { useForm, FormProvider } from 'react-hook-form'
import Head from 'next/head'
import throttle from 'lodash.throttle'

import { AccountLayout } from 'layout'
import { UsersFilter, UsersTable } from './components'

import { adminStore } from 'store'
import { getTimeZoneOffset, transformDateToIso } from 'utils'

import * as S from './Users.styled'

export const UsersPage = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      group: 'REGULAR',
      activity: false
    }
  })
  const { watch } = useFormProps
  const { users, isUsersLoading } = adminStore
  const { name, group, activity, date, phone } = watch()

  const searchUsersThrottle = useCallback(
    throttle(
      ({ name, group, activity, date, phone }) =>
        adminStore.searchUsers({
          name,
          phone: phone && phone.length >= 7 ? `+${phone}` : null,
          role: group,
          date: transformDateToIso(date),
          active: activity,
          zoneOffset: getTimeZoneOffset(),
          format: 'JSON'
        }),
      500
    ),
    [adminStore]
  )

  useEffect(() => {
    searchUsersThrottle({ name, group, activity, date, phone })
  }, [name, group, activity, date, phone])

  const onUserExcelDownload = () => {
    console.log({
      name,
      role: group,
      activity,
      date,
      phone,
      format: 'XLSX',
      zoneOffset: getTimeZoneOffset()
    })
    adminStore.searchUsers({
      name,
      role: group,
      active: activity,
      date,
      phone,
      format: 'XLSX',
      zoneOffset: getTimeZoneOffset()
    })
  }

  return (
    <>
      <Head>
        <title>Список пользователей</title>
      </Head>

      <AccountLayout title="Список пользователей">
        <FormProvider {...useFormProps}>
          <UsersFilter />

          <S.UserCountRow>
            <S.Text>Кол-во пользователей:</S.Text>
            <S.Text>{users.length}</S.Text>
          </S.UserCountRow>

          <UsersTable
            users={users}
            isUsersLoading={isUsersLoading}
            onExcelDownload={onUserExcelDownload}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
