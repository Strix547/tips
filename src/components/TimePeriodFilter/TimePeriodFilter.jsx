import { useState } from 'react'
import { Radio } from '@material-ui/core'

import { FormControlLabel } from 'ui'

import * as S from './TimePeriodFilter.styled'

export const TimePeriodFilter = () => {
  const [period, setPeriod] = useState('month')

  const periods = [
    { label: 'За сегодня', value: 'today' },
    { label: 'За вчера', value: 'yesterday' },
    { label: 'За неделю', value: 'week' },
    { label: 'За месяц', value: 'month' },
    { label: 'За прошлый месяц', value: 'prev-month' },
    { label: 'За период', value: 'custom' }
  ]

  const periodRadios = periods.map(({ label, value }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={<S.PeriodRadio active={period === value}>{label}</S.PeriodRadio>}
        control={<Radio />}
      />
    )
  })

  const onPeriodChange = (value) => {
    setPeriod(value)
  }

  return (
    <S.TimePeriodFilter name="period" value={period} onChange={(_, value) => onPeriodChange(value)}>
      {periodRadios}
    </S.TimePeriodFilter>
  )
}
