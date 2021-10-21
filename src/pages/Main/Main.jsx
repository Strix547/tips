import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'
import { getTimeZoneOffset } from 'utils'

export const UserMainPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })

  const { id: userId, role } = userStore
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currency = userStore.personalData.currency.value

  const periodSelected = useFormProps.watch('period')
  const periodFromSelected = useFormProps.watch('periodFrom')
  const periodToSelected = useFormProps.watch('periodTo')

  const diagramDays = incomeStatistics.diagram.map(({ date }) => date?.getDate())
  const diagramAmounts = incomeStatistics.diagram.map(({ tipAmount }) => tipAmount)

  const getStatistics =
    role === 'BUSINESS'
      ? statisticsStore.getBusinessIncomeStatistics
      : statisticsStore.getIndividualIncomeStatistics

  useEffect(() => {
    if (!userId && !currency && !role) return

    const commonData = {
      format: 'JSON',
      zoneOffset: getTimeZoneOffset(),
      currency
    }

    if (periodSelected !== 'custom') {
      getStatistics({
        ...commonData,
        userId,
        period: periodSelected
      })
    }

    if (periodFromSelected && periodToSelected) {
      getStatistics({
        ...commonData,
        userId,
        periodFrom: periodFromSelected,
        periodTo: periodToSelected
      })
    }
  }, [role, userId, periodSelected, periodFromSelected, periodToSelected])

  const toQrCodesPage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_QR_INDIVIDUALS_CREATE)
  }

  const downloadStatisticExcel = (userId) => {
    getStatistics({
      userId,
      format: 'XLSX',
      period: periodSelected,
      zoneOffset: getTimeZoneOffset(),
      currency: useFormProps.getValues('currency')
    })
  }

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <AccountLayout title="Главная" button={{ label: 'Создать QR-код', onClick: toQrCodesPage }}>
        {useMemo(
          () => (
            <BarChart
              title="Статистика входящих оплат"
              labels={diagramDays}
              values={diagramAmounts}
              isLoading={isIncomeStatisticsLoading}
            />
          ),
          [diagramDays, diagramAmounts]
        )}

        <FormProvider {...useFormProps}>
          <TipsTable
            data={incomeStatistics.table}
            isDataLoading={isIncomeStatisticsLoading}
            onExcelDownload={() => downloadStatisticExcel(userId)}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
