import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { Button } from 'ui'

import { userStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './UpgradeToBusiness.styled'

export const UpgradeToBusinessPage = observer(() => {
  const router = useRouter()

  const userId = userStore.id

  const toMainPage = () => {
    router.push(ROUTE_NAMES.ACCOUNT)
  }

  const onUpgradeSubmit = () => {
    userStore.upgradeAccountToBusiness(userId)
  }

  return (
    <>
      <Head>
        <title>Обновиться до бизнес-аккаунта</title>
      </Head>

      <AccountLayout title="Обновление">
        <S.Content>
          <S.Text>Хотите ли вы обновиться до бизнес-аккаунта?</S.Text>

          <S.ActionsRow>
            <Button onClick={toMainPage} variant="bordered">
              Нет, не хочу
            </Button>

            <Button onClick={onUpgradeSubmit}>Да, обновить</Button>
          </S.ActionsRow>
        </S.Content>
      </AccountLayout>
    </>
  )
})
