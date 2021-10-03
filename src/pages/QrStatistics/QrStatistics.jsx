import { useEffect, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { BarChart, TipsTable } from 'components'

import { userStore, statisticsStore } from 'store'
import { getTimeZoneOffset } from 'utils'

export const QrStatisticsPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })

  const qrId = router?.query?.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currency = userStore.personalData.currency.value

  const periodSelected = useFormProps.watch('period')
  const periodFromSelected = useFormProps.watch('periodFrom')
  const periodToSelected = useFormProps.watch('periodTo')

  const diagramDays = incomeStatistics.diagram.map(({ date }) => date?.getDate())
  const diagramAmounts = incomeStatistics.diagram.map(({ tipAmount }) => tipAmount)

  useEffect(() => {
    if (!currency && !qrId) return

    const commonData = {
      format: 'JSON',
      zoneOffset: getTimeZoneOffset(),
      currency
    }

    if (periodSelected !== 'custom') {
      statisticsStore.getQrIncomeStatistics({
        ...commonData,
        qrId,
        period: periodSelected
      })
    }

    if (periodFromSelected && periodToSelected) {
      statisticsStore.getQrIncomeStatistics({
        ...commonData,
        qrId,
        periodFrom: periodFromSelected,
        periodTo: periodToSelected
      })
    }
  }, [qrId, periodSelected, periodFromSelected, periodToSelected])

  const downloadExcelFile = (qrId) => {
    statisticsStore.getQrIncomeStatistics({
      qrId,
      format: 'XLSX',
      period: periodSelected,
      zoneOffset: getTimeZoneOffset(),
      currency: useFormProps.getValues('currency')
    })
  }

  return (
    <>
      <Head>
        <title>Статистика qr кода</title>
      </Head>

      <AccountLayout title="Статистика qr кода">
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
            onExcelDownload={() => downloadExcelFile(qrId)}
          />
        </FormProvider>
      </AccountLayout>
    </>
  )
})
