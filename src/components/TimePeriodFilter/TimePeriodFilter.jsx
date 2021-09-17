import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'

import { FormControlLabel, MenuItem, Select, DatePicker } from 'ui'

import * as S from './TimePeriodFilter.styled'

export const TimePeriodFilter = () => {
  const useFormProps = useForm()
  const [isDatePickerModalOpen, setDatePickerModalOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
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
    const onLabelClick = () => {
      if (value === 'custom') {
        setDatePickerModalOpen(true)
      }
    }
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={<S.PeriodRadio active={period === value}>{label}</S.PeriodRadio>}
        control={<Radio />}
        onClick={onLabelClick}
      />
    )
  })

  const periodMenuItems = periods.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  const onPeriodChange = (value) => {
    setPeriod(value)
  }

  const onDateChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <S.TimePeriodFilter>
      <FormProvider {...useFormProps}>
        <S.PeriodRadioGroup
          name="period"
          value={period}
          onChange={(_, value) => onPeriodChange(value)}
        >
          {periodRadios}
        </S.PeriodRadioGroup>

        <Select name="period" defaultValue={period}>
          {periodMenuItems}
        </Select>

        <S.DatePickerModal
          open={isDatePickerModalOpen}
          onClose={() => setDatePickerModalOpen(false)}
        >
          <DatePicker
            selected={startDate}
            onChange={onDateChange}
            startDate={startDate}
            endDate={endDate}
            monthsShown={2}
            selectsRange
            inline
          />
        </S.DatePickerModal>
      </FormProvider>
    </S.TimePeriodFilter>
  )
}
