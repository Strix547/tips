import { FormProvider, useForm } from 'react-hook-form'

import { Switch } from 'ui'

import * as S from './Card.styled'

import { formatPrice } from 'utils'

import PenIcon from '@public/icons/pen.svg'
import GearIcon from '@public/icons/gear.svg'
import ChartIcon from '@public/icons/chart.svg'

export const CardBusiness = ({
  type,
  name,
  address,
  employeeNumber,
  tipsAmountMonth,
  tipsAmountYear
}) => {
  const useFormProps = useForm()

  const currency = '₽'

  const actions = [
    { label: 'edit', content: <PenIcon /> },
    { label: 'switch', content: <Switch name="switch" /> },
    { label: 'gear', content: <GearIcon /> },
    { label: 'chart', content: <ChartIcon /> }
  ]

  const actionList = actions.map(({ label, content }) => <li key={label}>{content}</li>)

  return (
    <S.CardBusiness>
      <S.TypeBadge>{type}</S.TypeBadge>

      <S.Name>{name}</S.Name>
      <S.Address>{address}</S.Address>
      <S.Border />

      <S.EmployeeNumberRow>
        <S.Text>Кол-во сотрудников</S.Text>
        <S.Text>{employeeNumber}</S.Text>
      </S.EmployeeNumberRow>

      <S.TipsAmount>
        <S.Text>Сумма чаевых за месяц</S.Text>
        <S.Text>{formatPrice(tipsAmountMonth, currency)}</S.Text>
        <S.Text>Сумма чаевых за год</S.Text>
        <S.Text>{formatPrice(tipsAmountYear, currency)}</S.Text>
      </S.TipsAmount>

      <S.Border />

      <FormProvider {...useFormProps}>
        <S.ActionList>{actionList}</S.ActionList>
      </FormProvider>
    </S.CardBusiness>
  )
}
