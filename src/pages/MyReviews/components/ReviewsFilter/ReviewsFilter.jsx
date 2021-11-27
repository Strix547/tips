import React from 'react'
import { useTranslation } from 'next-i18next'

import { TimePeriodFilter } from 'components'
import { Select, PlatformSearch, MenuItem } from 'ui'

import * as S from './ReviewsFilter.styled'

import StarIcon from '@public/icons/star.svg'

export const ReviewsFilter = ({ period }) => {
  const { t } = useTranslation('common')

  const renderStars = (count) => {
    return new Array(count).fill(<StarIcon />)
  }

  const ratings = [
    { label: t('any'), value: 'any' },
    {
      label: <S.StarList>{renderStars(1)}</S.StarList>,
      value: 1
    },
    {
      label: <S.StarList>{renderStars(2)}</S.StarList>,
      value: 2
    },
    {
      label: <S.StarList>{renderStars(3)}</S.StarList>,
      value: 3
    },
    {
      label: <S.StarList>{renderStars(4)}</S.StarList>,
      value: 4
    },
    {
      label: <S.StarList>{renderStars(5)}</S.StarList>,
      value: 5
    }
  ]

  const ratingMenuItems = ratings.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  return (
    <S.ReviewsFilter>
      <S.Row>
        <S.PeriodField>
          <S.Label>{t('select-period')}</S.Label>
          <TimePeriodFilter period={period} miniVersionMedia={864} />
        </S.PeriodField>
      </S.Row>

      <S.Row>
        <S.PlatformField>
          <S.Label>{t('platforms')}</S.Label>
          <PlatformSearch />
        </S.PlatformField>

        <S.RatingField>
          <S.Label>{t('rating')}:</S.Label>

          <Select name="rating" rounded>
            {ratingMenuItems}
          </Select>
        </S.RatingField>
      </S.Row>
    </S.ReviewsFilter>
  )
}
