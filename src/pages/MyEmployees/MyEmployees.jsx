import { useEffect } from 'react'
import Head from 'next/head'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { EmployeeTable } from 'components'

import { userStore, employeesStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './MyEmployees.styled'

export const MyEmployeesPage = observer(() => {
  const router = useRouter()

  // const employees = [
  //   {
  //     id: 1,
  //     number: 1392051820,
  //     firstName: 'Alexey',
  //     lastName: 'Berezin',
  //     email: 'afansyef.evgen2011@gmail.com',
  //     platform: 'Ресторан Чечки Бречки',
  //     statistics: 1890
  //   },
  //   {
  //     id: 2,
  //     number: 1392051820,
  //     firstName: 'Artem',
  //     lastName: 'Berezin',
  //     email: 'afansyef.evgen2012@gmail.com',
  //     platform: 'Ресторан Чечки Бречки',
  //     statistics: 1330
  //   },
  //   {
  //     id: 3,
  //     number: 1392052320,
  //     firstName: 'Alexander',
  //     lastName: 'Berezin',
  //     email: 'afansyef.evgen2033@gmail.com',
  //     platform: 'Ресторан Чечки Бречки',
  //     statistics: 1220
  //   },
  //   {
  //     id: 4,
  //     number: 1343434320,
  //     firstName: 'Andrey',
  //     lastName: 'Berezin',
  //     email: 'afansyef.evgen2044@gmail.com',
  //     platform: 'Ресторан Чечки Бречки',
  //     statistics: 1110
  //   },
  //   {
  //     id: 5,
  //     number: 1394234234,
  //     firstName: 'Konstantin',
  //     lastName: 'Berezin',
  //     email: 'afansyef.evgen2055@gmail.com',
  //     platform: 'Ресторан Чечки Бречки',
  //     statistics: 1430
  //   }
  // ]

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
