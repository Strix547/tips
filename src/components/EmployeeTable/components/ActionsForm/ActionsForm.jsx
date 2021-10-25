import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import { Switch } from 'ui'

import { employeesStore, userStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './ActionsForm.styled'

import ChartIcon from '@public/icons/chart.svg'
import TrashIcon from '@public/icons/trash.svg'

export const ActionsForm = observer(({ platformId, employeeId, available }) => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      available
    }
  })

  const userId = userStore.id

  const toStatisticsPage = () => {
    router.push({
      pathname: ROUTE_NAMES.ACCOUNT_EMPLOYEE_STATISTICS,
      query: { id: employeeId }
    })
  }

  const toggleEmployeeAvailable = () => {
    employeesStore.changeEmployeeAvailability({ platformId, employeeId, available: !available })
  }

  const deleteEmployee = () => {
    employeesStore.deleteEmployeeFromPlatform({ employeeId, platformId, userId })
  }

  const onActionClick = (e) => {
    e.stopPropagation()
  }

  return (
    <S.ActionsForm onClick={onActionClick}>
      <FormProvider {...useFormProps}>
        <button type="button" onClick={toStatisticsPage}>
          <ChartIcon />
        </button>

        <Switch name="available" onClick={toggleEmployeeAvailable} />

        <button type="button" onClick={deleteEmployee}>
          <TrashIcon />
        </button>
      </FormProvider>
    </S.ActionsForm>
  )
})
