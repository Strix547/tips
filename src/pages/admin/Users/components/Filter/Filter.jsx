import { useTranslation } from 'next-i18next'

import { Select, MenuItem, DatePicker, PhoneField } from 'ui'

import { USER_ROLES } from 'core/constants'

import * as S from './Filter.styled'

export const UsersFilter = () => {
  const { t } = useTranslation('common')

  const activities = [
    { label: t('inactive'), value: false },
    { label: t('active'), value: true }
  ]

  const activityMenuItems = activities.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  const groupMenuItems = USER_ROLES.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  return (
    <S.Filter>
      <S.Column>
        <DatePicker name="date" label={`${t('date')}:`} placeholderText="Выберите дату" withIcon />
      </S.Column>

      <S.Column>
        <PhoneField label={`${t('phone')}:`} />
      </S.Column>

      <S.Column>
        <S.Label>{t('group')}:</S.Label>

        <Select name="group">{groupMenuItems}</Select>
      </S.Column>

      <S.Column>
        <S.Label>{t('activity')}:</S.Label>

        <Select name="activity">{activityMenuItems}</Select>
      </S.Column>
    </S.Filter>
  )
}
