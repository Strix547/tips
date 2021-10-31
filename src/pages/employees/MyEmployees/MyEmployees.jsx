import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { EmployeeTable } from 'components'

import { userStore, employeesStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './MyEmployees.styled'

export const MyEmployeesPage = observer(() => {
  const router = useRouter()

  const userId = userStore.id
  const { employees, isEmployeesLoading } = employeesStore

  useEffect(() => {
    if (userId) {
      employeesStore.getEmployees(userId)
    }
  }, [userId])

  const toCreateEmployeePage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_EMPLOYEE_CREATE)
  }

  return (
    <>
      <Head>
        <title>Мои сотрудники</title>
      </Head>

      <AccountLayout
        title="Мои сотрудники"
        button={{ label: 'Создать сотрудника', onClick: toCreateEmployeePage }}
        styles={S.layoutStyles}
      >
        {!isEmployeesLoading ? <EmployeeTable employees={employees} /> : <Skeleton height={356} />}
      </AccountLayout>
    </>
  )
})
