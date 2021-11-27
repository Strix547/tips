import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import { Switch } from 'ui'

import { platformsStore, userStore } from 'store'
import { getPriceLabel } from 'utils'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './Card.styled'

import PenIcon from '@public/icons/pen.svg'
import QrIcon from '@public/icons/qr-scan.svg'
import ChartIcon from '@public/icons/chart.svg'

export const PlatformCard = observer(
  ({ id, type, name, address, tipsAmountMonth, tipsAmountYear, active, employeeCount }) => {
    const router = useRouter()
    const useFormProps = useForm({
      defaultValues: {
        available: active
      }
    })
    const { watch } = useFormProps

    const currency = userStore.personalData.currency.symbol
    const available = watch('available')

    const toPlatformStatisticsPage = (id) => {
      router.push({
        pathname: ROUTE_NAMES.ACCOUNT_PLATFORMS_STATISTICS,
        query: { id }
      })
    }

    const toQrEditPage = (id) => {
      router.push({
        pathname: ROUTE_NAMES.ACCOUNT_QR_PLATFORMS_EDIT,
        query: { id }
      })
    }

    const toPlatformEditPage = (id) => {
      router.push({
        pathname: ROUTE_NAMES.ACCOUNT_PLATFORMS_EDIT,
        query: { id }
      })
    }

    const togglePlatformAvailability = (id) => {
      platformsStore.changePlatformAvailability({ id, available: !available })
    }

    const actions = [
      { label: 'edit', content: <PenIcon />, onClick: toPlatformEditPage },
      {
        label: 'switch',
        content: <Switch name="available" />,
        onClick: togglePlatformAvailability
      },
      { label: 'qr', content: <QrIcon />, onClick: toQrEditPage },
      { label: 'chart', content: <ChartIcon />, onClick: toPlatformStatisticsPage }
    ]

    const actionList = actions.map(({ label, content, onClick }) => (
      <li key={label}>
        <button type="button" onClick={() => onClick(id)}>
          {content}
        </button>
      </li>
    ))

    return (
      <S.PlatformCard>
        <S.TypeBadge green={available}>{type}</S.TypeBadge>

        <S.Name>{name}</S.Name>
        <S.Address>{address}</S.Address>
        <S.Border />

        <S.EmployeeNumberRow>
          <S.Text>{t('number-employees')}</S.Text>
          <S.Text>{employeeCount}</S.Text>
        </S.EmployeeNumberRow>

        <S.TipsAmount>
          <S.Text>{t('tip-amount-month')}</S.Text>
          <S.Text>{getPriceLabel(tipsAmountMonth, currency)}</S.Text>
          <S.Text>{t('tip-amount-year')}</S.Text>
          <S.Text>{getPriceLabel(tipsAmountYear, currency)}</S.Text>
        </S.TipsAmount>

        <S.Border />

        <FormProvider {...useFormProps}>
          <S.ActionList>{actionList}</S.ActionList>
        </FormProvider>
      </S.PlatformCard>
    )
  }
)
