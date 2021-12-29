import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import { Radio } from '@material-ui/core'
import { useTranslation } from 'next-i18next'

import { FormControlLabel, MenuItem, Select, DatePicker, RadioGroup } from 'ui'
import { transformDateToIso } from 'utils'

import * as S from './TimePeriodFilter.styled'

export const TimePeriodFilter = ({ period, miniVersionMedia = 1500 }) => {
  const { t } = useTranslation('common')
  const screenLess1500 = useMediaQuery({ maxWidth: miniVersionMedia })
  const screenLess700 = useMediaQuery({ maxWidth: 700 })
  const { setValue } = useFormContext()

  const [isDatePickerModalOpen, setDatePickerModalOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  console.log('st', transformDateToIso(startDate), 'en', transformDateToIso(endDate))

  const periods = [
    { label: t('for-today'), value: 'TODAY' },
    { label: t('for-yesterday'), value: 'YESTERDAY' },
    { label: t('for-week'), value: 'WEEK' },
    { label: t('for-month'), value: 'MONTH' },
    { label: t('for-last-month'), value: 'LAST_MONTH' },
    { label: t('for-period'), value: 'custom' }
  ]

  const chooseCustomPeriod = (value) => {
    if (value === 'custom') {
      setDatePickerModalOpen(true)
    }
  }

  const onDateChange = ([startDate, endDate]) => {
    setStartDate(startDate)
    setEndDate(endDate)

    if (startDate && endDate) {
      onDatePickerModalClose(startDate, endDate)
      setDatePickerModalOpen(false)
    }
  }

  const onDatePickerModalClose = (startDate, endDate) => {
    if (startDate && endDate) {
      setValue('periodFrom', transformDateToIso(startDate))
      setValue('periodTo', transformDateToIso(endDate))
    }

    setDatePickerModalOpen(false)
  }

  const periodRadios = periods.map(({ label, value }) => (
    <FormControlLabel
      key={value}
      value={value}
      label={<S.PeriodRadio active={period === value}>{label}</S.PeriodRadio>}
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
        <Select name="period" rounded>
          {periodMenuItems}
        </Select>
      )}

      <S.DatePickerModal
        open={isDatePickerModalOpen}
        onClose={() => onDatePickerModalClose(startDate, endDate)}
      >
        <DatePicker
          selected={[startDate, endDate]}
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
