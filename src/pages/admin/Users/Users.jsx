import { observer } from 'mobx-react-lite'
import { useForm, FormProvider } from 'react-hook-form'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { UsersFilter, UsersTable } from './components'

import { adminStore } from 'store'
import { getTimeZoneOffset } from 'utils'

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

  const userCount = 35

  const onUserExcelDownload = () => {
    adminStore.searchUsers({
      name,
      role: group,
      activity,
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

      <AccountLayout>
        <FormProvider {...useFormProps}>
          <UsersFilter />

          <S.UserCountRow>
            <S.Text>Кол-во пользователей:</S.Text>
            <S.Text>{userCount}</S.Text>
          </S.UserCountRow>

          <UsersTable users={users} onExcelDownload={onUserExcelDownload} />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
