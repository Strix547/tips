import { Select, MenuItem, BirthDateAdultValid } from 'ui'

import * as S from './Filter.styled'

export const UsersFilter = () => {
  const activities = [
    { label: 'Неактивный', value: false },
    { label: 'Активный', value: true }
  ]

  const groups = [
    { label: 'Пользователи', value: 'REGULAR' },
    { label: 'Бизнес', value: 'BUSINESS' },
    { label: 'Не верифицированные', value: 'UNVERIFIED' },
    { label: 'Админы', value: 'ADMIN' }
  ]

  const activityMenuItems = activities.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  const groupMenuItems = groups.map(({ label, value }) => (
    <MenuItem key={label} value={value}>
      {label}
    </MenuItem>
  ))

  return (
    <S.Filter>
      <S.Column>
        <BirthDateAdultValid label="Дата:" />
      </S.Column>

      <S.Column>
        <S.Label>Логин:</S.Label>
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
