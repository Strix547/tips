import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { BarChart, LineChart } from 'components'
import { Info, TotalEarned, AgentsTable } from './components'

import { statisticsStore, userStore } from 'store'
import { getTimeZoneOffset } from 'utils'

import * as S from './ForAgentsPage.styled'

export const ForAgentsPage = observer(() => {
  const { t } = useTranslation('common')

  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH'
    }
  })
  const { watch } = useFormProps

  const userId = userStore.id
  const { incomeStatistics, isIncomeStatisticsLoading } = statisticsStore
  const { table, diagramIncome, diagramReferralsQuantity } = incomeStatistics
  const { period, periodFrom, periodTo } = watch()

  useEffect(() => {
    if (!userId) return

    statisticsStore.getAgentIncomeStatistics({
      agentId: userId,
      format: 'JSON',
      period,
      periodFrom,
      periodTo,
      zoneOffset: getTimeZoneOffset()
    })
  }, [userId, period, periodFrom, periodTo])

  return (
    <>
      <Head>
        <title>{t('agents')}</title>
      </Head>

      <AccountLayout title={t('agents')}>
        <S.Content>
          <Info />

          <TotalEarned amount={0} />

          <BarChart data={diagramReferralsQuantity} title={t('number-referal-users')} />

          <LineChart data={diagramIncome} title={t('tips-earned-referral')} />

          <FormProvider {...useFormProps}>
            <AgentsTable statistics={table} isStatisticsLoading={isIncomeStatisticsLoading} />
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
})
