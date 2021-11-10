import { Select, MenuItem, DatePicker, PhoneField } from 'ui'

import { USER_ROLES } from 'core/constants'

import * as S from './Filter.styled'

export const UsersFilter = () => {
  const activities = [
    { label: 'Неактивный', value: false },
    { label: 'Активный', value: true }
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
        <DatePicker name="date" label="Дата:" placeholderText="Выберите дату" withIcon />
      </S.Column>

      <S.Column>
        <PhoneField label="Номер телефона:" />
      </S.Column>

      <S.Column>
        <S.Label>Группа:</S.Label>

        <Select name="group">{groupMenuItems}</Select>
      </S.Column>

      <S.Column>
        <S.Label>Активность:</S.Label>

        <Select name="activity">{activityMenuItems}</Select>
      </S.Column>
    </S.Filter>
  )
}
