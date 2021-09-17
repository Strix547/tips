import Head from 'next/head'

import { AccountLayout } from 'layout'
import { CardBusiness } from 'components'

import * as S from './MyPlatforms.styled'

export const MyPlatformsPage = () => {
  const addPlatform = () => {}

  const platforms = [
    {
      id: 0,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 1,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 2,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 3,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 4,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 5,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 6,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 7,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 8,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 9,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 10,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 11,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 12,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    },
    {
      id: 13,
      type: 'Ресторан',
      name: 'Экспресс-бар это Суши',
      address: 'г. Магнитогорск, ул. Комсомольская, 29/2',
      employeeNumber: 179,
      tipsAmountMonth: 4983,
      tipsAmountYear: 85983
    }
  ]

  const platformList = platforms.map((props) => <CardBusiness key={props.id} {...props} />)

  return (
    <>
      <Head>
        <title>Мои площадки</title>
      </Head>

      <AccountLayout
        title="Мои площадки"
        button={{ label: 'Добавить площадку', onClick: addPlatform }}
        styles={S.layoutStyles}
      >
        <S.Content>{platformList}</S.Content>
      </AccountLayout>
    </>
  )
}
