import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { AccountLayout } from 'layout'
import { EmployeeTable } from 'components'

import { userStore, employeesStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './MyEmployees.styled'

export const MyEmployeesPage = observer(() => {
  const { t } = useTranslation('common')
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
        <title>{t('my-salarees')}</title>
      </Head>

      <AccountLayout
        title={t('my-salarees')}
        button={{ label: t('create-employee'), onClick: toCreateEmployeePage }}
        styles={S.layoutStyles}
      >
        <EmployeeTable employees={employees} isEmployeesLoading={isEmployeesLoading} />
      </AccountLayout>
    </>
  )
})
