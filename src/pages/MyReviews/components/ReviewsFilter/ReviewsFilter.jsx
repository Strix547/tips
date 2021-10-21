import React from 'react'

import { TimePeriodFilter } from 'components'
import { Select, PlatformSearch, MenuItem } from 'ui'

import * as S from './ReviewsFilter.styled'

import StarIcon from '@public/icons/star.svg'

export const ReviewsFilter = () => {
  const ratings = [
    {
      label: (
        <S.StarList>
          <StarIcon />
        </S.StarList>
      ),
      value: 1
    },
    {
      label: (
        <S.StarList>
          <StarIcon />
          <StarIcon />
        </S.StarList>
      ),
      value: 2
    },
    {
      label: (
        <S.StarList>
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </S.StarList>
      ),
      value: 3
    },
    {
      label: (
        <S.StarList>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </S.StarList>
      ),
      value: 4
    },
    {
      label: (
        <S.StarList>
          <StarIcon />
          <StarIcon />

          <StarIcon />
          <StarIcon />
          <StarIcon />
        </S.StarList>
      ),
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
          <S.Label>Выберите период:</S.Label>
          <TimePeriodFilter miniVersionMedia={864} />
        </S.PeriodField>
      </S.Row>

      <S.Row>
        <S.PlatformField>
          <S.Label>Площадки</S.Label>
          <PlatformSearch />
        </S.PlatformField>

        <S.RatingField>
          <S.Label>Рейтинг:</S.Label>

          <Select name="rating">{ratingMenuItems}</Select>
        </S.RatingField>
      </S.Row>
    </S.ReviewsFilter>
  )
}
