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

  const { id: userId } = userStore
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const currency = userStore.personalData.currency.value

  const periodSelected = useFormProps.watch('period')
  const periodFromSelected = useFormProps.watch('periodFrom')
  const periodToSelected = useFormProps.watch('periodTo')

  const diagramDays = incomeStatistics.diagram.map(({ date }) => date?.getDate())
  const diagramAmounts = incomeStatistics.diagram.map(({ tipAmount }) => tipAmount)

  useEffect(() => {
    if (!userId && !currency) return

    const commonData = {
      format: 'JSON',
      zoneOffset: getTimeZoneOffset(),
      currency
    }

    if (router.query.id) {
      if (periodSelected !== 'custom') {
        statisticsStore.getQrIncomeStatistics({
          ...commonData,
          qrId: router.query.id,
          period: periodSelected
        })
      }

      if (periodFromSelected && periodToSelected) {
        statisticsStore.getQrIncomeStatistics({
          ...commonData,
          qrId: router.query.id,
          periodFrom: periodFromSelected,
          periodTo: periodToSelected
        })
      }
    } else {
      if (periodSelected !== 'custom') {
        statisticsStore.getUserIncomeStatistics({
          ...commonData,
          userId,
          period: periodSelected
        })
      }

      if (periodFromSelected && periodToSelected) {
        statisticsStore.getUserIncomeStatistics({
          ...commonData,
          userId,
          periodFrom: periodFromSelected,
          periodTo: periodToSelected
        })
      }
    }
  }, [userId, periodSelected, periodFromSelected, periodToSelected])

  const toQrCodesPage = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  const downloadExcelFile = (userId) => {
    statisticsStore.getUserIncomeStatistics({
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
