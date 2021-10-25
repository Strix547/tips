import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PlatformCard } from 'components'

import { platformsStore, userStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './MyPlatforms.styled'

export const MyPlatformsPage = observer(() => {
  const router = useRouter()

  const { platforms, isPlatformsLoading } = platformsStore

  useEffect(() => {
    platformsStore.getPlatforms(userStore.id)
  }, [])

  const addPlatform = () => {
    router.push(ROUTE_NAMES.ACCOUNT_PLATFORMS_CREATE)
  }

  const platformList = platforms?.length ? platforms.map(
    ({ id, type, name, address, tipsAmountMonth, tipsAmountYear, active, employeeCount }) => (
      <PlatformCard
        key={id}
        id={id}
        type={type}
        name={name}
        address={address}
        tipsAmountYear={tipsAmountYear}
        tipsAmountMonth={tipsAmountMonth}
        active={active}
        employeeCount={employeeCount}
      />
    )
  ) : <S.Text>Нет платформ</S.Text>

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
        <S.Content>
          {!isPlatformsLoading ? platformList : <Skeleton count={3} height={353} />}
        </S.Content>
      </AccountLayout>
    </>
  )
})
