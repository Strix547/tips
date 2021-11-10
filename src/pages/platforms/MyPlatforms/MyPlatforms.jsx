import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { PlatformCard } from 'components'
import { NoResultFound } from 'common'

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

  const platformCardList = platforms.map(
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
  )

  const platformsContent =
    platforms?.length !== 0 ? (
      <S.PlatformsGrid>{platformCardList}</S.PlatformsGrid>
    ) : (
      <NoResultFound>Платформы отсутствуют</NoResultFound>
    )

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
        {!isPlatformsLoading ? (
          platformsContent
        ) : (
          <S.PlatformsGridSkeleton>
            <Skeleton count={4} height={353} />
          </S.PlatformsGridSkeleton>
        )}
      </AccountLayout>
    </>
  )
})
