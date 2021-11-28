import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { PlatformSearch, Button } from 'ui'

import { employeesStore } from 'store'

import * as S from './Edit.styled'

export const EmployeeEditPage = observer(() => {
  const { t } = useTranslation('common')
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
        <title>{t('user-editing')}</title>
      </Head>

      <AccountLayout title={t('user-editing')}>
        <S.FormContainer onSubmit={handleSubmit(onEmployeeEdit)}>
          {!isEmployeeConnecting ? (
            <FormProvider {...useFormProps}>
              <PlatformSearch label={t('platform-connected-to-employee')} />

              <Button type="submit">{t('save')}</Button>
            </FormProvider>
          ) : (
            <Skeleton height={164} />
          )}
        </S.FormContainer>
      </AccountLayout>
    </>
  )
})
