import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
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
      currency: 'USD',
      period: 'MONTH'
    }
  })

  const userId = userStore.id
  const { incomeStatistics } = statisticsStore

  const currencySelected = useFormProps.watch('currency')
  const periodSelected = useFormProps.watch('period')

  useEffect(() => {
    if (userId) {
      statisticsStore.getIncomeStatistics({
        userId,
        format: 'JSON',
        period: periodSelected,
        zoneOffset: getTimeZoneOffset(),
        currency: currencySelected
      })
    }
  }, [userId, currencySelected, periodSelected])

  const onCreateQrClick = () => {
    router.push(ROUTES.ACCOUNT_QR_INDIVIDUAL_CREATE)
  }

  const onExcelDownload = (userId) => {
    statisticsStore.getIncomeStatistics({
      userId,
      format: 'XLSX',
      zoneOffset: getTimeZoneOffset(),
      currency: useFormProps.getValues('currency')
    })
  }

  const days = incomeStatistics.map(({ dateTime }) => dateTime.getDate())
  const amounts = incomeStatistics.map(({ tipAmount }) => tipAmount)

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <AccountLayout title="Главная" button={{ label: 'Создать QR-код', onClick: onCreateQrClick }}>
        {useMemo(
          () => (
            <BarChart title="Статистика входящих оплат" labels={days} values={amounts} />
          ),
          [days, amounts]
        )}

        <TipsTable
          useFormProps={useFormProps}
          data={incomeStatistics}
          onExcelDownload={() => onExcelDownload(userId)}
        />
      </AccountLayout>
    </>
  )
})
