import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PlatformSearch, Button } from 'ui'

import { employeesStore } from 'store'

import * as S from './EmployeeEdit.styled'

export const EmployeeEditPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm()
  const { handleSubmit } = useFormProps

  const employeeId = router.query.id
  const { isEmployeeConnecting } = employeesStore.employee

  const onEmployeeEdit = ({ platform }) => {
    employeesStore.connectEmployeeToPlatform({
      userId: employeeId,
      platformId: platform.platformId
    })
  }

  return (
    <>
      <Head>
        <title>Редактирование сотрудника</title>
      </Head>

      <AccountLayout title="Редактирование сотрудника">
        <S.FormContainer onSubmit={handleSubmit(onEmployeeEdit)}>
          {!isEmployeeConnecting ? (
            <FormProvider {...useFormProps}>
              <PlatformSearch label="Площадка, с которой связывается профиль сотрудника" />

              <Button type="submit">Сохранить</Button>
            </FormProvider>
          ) : (
            <Skeleton height={164} />
          )}
        </S.FormContainer>
      </AccountLayout>
    </>
  )
})
