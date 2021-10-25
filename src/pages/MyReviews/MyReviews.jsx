import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { ReviewsFilter } from './components'

import { userStore, platformsStore } from 'store'
import { getTimeZoneOffset } from 'utils'

import * as S from './MyReviews.styled'

export const MyReviewsPage = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      period: 'MONTH',
      rating: 4
    }
  })
  const { watch, getValues } = useFormProps

  const userId = userStore.id
  const { isReviewsLoading, reviews } = platformsStore
  const { platform, period, periodFrom, periodTo, rating } = watch()

  useEffect(() => {
    if (!platform?.platformId) return

    const { period, periodFrom, periodTo, rating } = getValues()

    const commonData = {
      userId,
      platformId: platform.platformId,
      rating,
      zoneOffset: getTimeZoneOffset()
    }

    if (period !== 'custom') {
      platformsStore.getReviews({
        ...commonData,
        period
      })
    }

    if (periodFrom && periodTo) {
      platformsStore.getReviews({
        ...commonData,
        periodFrom,
        periodTo
      })
    }
  }, [platform, period, periodFrom, periodTo, rating])

  return (
    <>
      <Head>
        <title>Мои отзывы</title>
      </Head>

      <AccountLayout title="Мои отзывы">
        <FormProvider {...useFormProps}>
          <ReviewsFilter />

          {!isReviewsLoading ? (
            <S.NoReviewsText>Отзывов не найдено</S.NoReviewsText>
          ) : (
            <Skeleton style={{ height: 200, marginTop: 20 }} />
          )}
        </FormProvider>
      </AccountLayout>
    </>
  )
})
