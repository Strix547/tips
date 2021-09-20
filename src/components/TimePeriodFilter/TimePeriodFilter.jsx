import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import { Radio } from '@material-ui/core'

import { FormControlLabel, MenuItem, Select, DatePicker, RadioGroup } from 'ui'

import * as S from './TimePeriodFilter.styled'

export const TimePeriodFilter = () => {
  const screenLess1500 = useMediaQuery({ maxWidth: 1500 })
  const screenLess700 = useMediaQuery({ maxWidth: 700 })
  const { watch } = useFormContext()

  const [isDatePickerModalOpen, setDatePickerModalOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const periodSelected = watch('period')

  const periods = [
    { label: 'За сегодня', value: 'TODAY' },
    { label: 'За вчера', value: 'YESTERDAY' },
    { label: 'За неделю', value: 'WEEK' },
    { label: 'За месяц', value: 'MONTH' },
    { label: 'За прошлый месяц', value: 'LAST_MONTH' },
    { label: 'За период', value: 'custom' }
  ]

  const chooseCustomPeriod = (value) => {
    if (value === 'custom') {
      setDatePickerModalOpen(true)
    }
  }

  const onDateChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)
  }

  const periodRadios = periods.map(({ label, value }) => (
    <FormControlLabel
      key={value}
      value={value}
      label={<S.PeriodRadio active={periodSelected === value}>{label}</S.PeriodRadio>}
      control={<Radio />}
      onClick={() => chooseCustomPeriod(value)}
    />
  ))

  const periodMenuItems = periods.map(({ label, value }) => (
    <MenuItem key={label} value={value} onClick={() => chooseCustomPeriod(value)}>
      {label}
    </MenuItem>
  ))

  return (
    <S.TimePeriodFilter>
      {!screenLess1500 ? (
        <RadioGroup name="period">{periodRadios}</RadioGroup>
      ) : (
        <Select name="period">{periodMenuItems}</Select>
      )}

      <S.DatePickerModal open={isDatePickerModalOpen} onClose={() => setDatePickerModalOpen(false)}>
        <DatePicker
          selected={startDate}
          onChange={onDateChange}
          startDate={startDate}
          endDate={endDate}
          monthsShown={!screenLess700 ? 2 : 1}
          selectsRange
          inline
        />
      </S.DatePickerModal>
    </S.TimePeriodFilter>
  )
}
