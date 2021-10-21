import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PlatformSearch, Button } from 'ui'

import { employeesStore } from 'store'

import * as S from './EmployeeEdit.styled'

export const EmployeeEditPage = () => {
  const router = useRouter()
  const useFormProps = useForm()
  const { handleSubmit } = useFormProps

  const employeeId = router.query.id

  const onEmployeeEdit = ({ platform }) => {
    employeesStore.changeEmployeePlatform({ employeeId, platformId: platform.platformId })
  }

  return (
    <>
      <Head>
        <title>Создание сотрудника</title>
      </Head>

      <AccountLayout title="Редактирование сотрудника">
        <S.FormContainer onSubmit={handleSubmit(onEmployeeEdit)}>
          <FormProvider {...useFormProps}>
            <PlatformSearch label="Площадка, с которой связывается профиль сотрудника" />

            <Button type="submit">Сохранить</Button>
          </FormProvider>
        </S.FormContainer>
      </AccountLayout>
    </>
  )
}
