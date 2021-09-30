import { useEffect, useMemo } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { ROUTES } from 'core/routes'
import { getTimeZoneOffset } from 'utils'

export const UserMainPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })

  const {
    id: userId,
    personalData: { currency }
  } = userStore
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore

  const periodSelected = useFormProps.watch('period')
  const periodFromSelected = useFormProps.watch('periodFrom')
  const periodToSelected = useFormProps.watch('periodTo')

  const diagramDays = incomeStatistics.diagram.map(({ date }) => date?.getDate())
  const diagramAmounts = incomeStatistics.diagram.map(({ tipAmount }) => tipAmount)

  useEffect(() => {
    if (!userId && !currency) return

    const commonData = {
      userId,
      format: 'JSON',
      zoneOffset: getTimeZoneOffset(),
      currency
    }

    if (periodSelected !== 'custom') {
      statisticsStore.getIncomeStatistics({
        ...commonData,
        period: periodSelected
      })
    }

    if (periodFromSelected && periodToSelected) {
      statisticsStore.getIncomeStatistics({
        ...commonData,
        periodFrom: periodFromSelected,
        periodTo: periodToSelected
      })
    }
  }, [userId, periodSelected, periodFromSelected, periodToSelected])

  const toQrCodesPage = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  const downloadExcelFile = (userId) => {
    statisticsStore.getIncomeStatistics({
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
            onExcelDownload={() => downloadExcelFile(userId)}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
