import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AccountLayout } from 'layout'
import { ConfirmModal } from 'common'
import { Button } from 'ui'
import { PlatformFields } from 'components/Platforms'

import { platformsStore } from 'store'
import { PLATFORM_TYPES } from 'core/constants'

import * as S from './Edit.styled'

export const PlatformEditPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm()
  const { handleSubmit, reset } = useFormProps

  const platformId = router.query.id
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false)
  const [incomePercentage, setIncomePercentage] = useState(50)

  const { platform, isPlatformLoading } = platformsStore

  useEffect(() => {
    if (platformId) {
      platformsStore.getPlatform(platformId)
    }
  }, [platformId])

  useEffect(() => {
    if (isPlatformLoading || !platform.incomePercentage) return

    const { name, address, type, incomePercentage, bankAccount } = platform
    const typeDefaultItem = PLATFORM_TYPES.find(({ label }) => label === type)

    setIncomePercentage(incomePercentage)

    reset({
      name,
      address,
      platformType: typeDefaultItem ? typeDefaultItem.value : 'OTHER',
      platformTypeCustom: !typeDefaultItem ? type : null,
      incomePercentage,
      bankAccount
    })
  }, [platform, isPlatformLoading, setIncomePercentage])

  const onIncomePercentageChange = (value) => {
    setIncomePercentage(value)
  }

  const onEditPlatform = ({
    name,
    address,
    platformType,
    platformTypeCustom,
    incomePercentage,
    bankAccount
  }) => {
    platformsStore.changePlatform({
      platformId,
      name,
      address,
      type: platformType === 'OTHER' ? platformTypeCustom : platformType,
      incomePercentage,
      selectedBankAccountId: bankAccount
    })
  }

  const onDeletePlatform = () => {
    platformsStore.deletePlatform(platformId)
  }

  return (
    <>
      <Head>
        <title>Редактировать площадку</title>
      </Head>

      <AccountLayout title="Редактировать площадку">
        <FormProvider {...useFormProps}>
          {!isPlatformLoading ? (
            <S.Form onSubmit={handleSubmit(onEditPlatform)}>
              <PlatformFields
                incomePercentage={incomePercentage}
                onIncomePercentageChange={onIncomePercentageChange}
              />

              <S.ActionRow>
                <Button type="submit">Сохранить</Button>
                <Button
                  type="button"
                  variant="bordered"
                  color="var(--color-red-100)"
                  onClick={() => {
                    setConfirmModalOpen(true)
                  }}
                >
                  Удалить
                </Button>
              </S.ActionRow>
            </S.Form>
          ) : (
            <>
              <Skeleton height={404} style={{ marginBottom: 20 }} />
              <Skeleton height={174} style={{ marginBottom: 20 }} />
              <Skeleton height={188} />
            </>
          )}
        </FormProvider>

        <ConfirmModal
          open={isConfirmModalOpen}
          onConfirm={onDeletePlatform}
          onClose={() => {
            setConfirmModalOpen(false)
          }}
        />
      </AccountLayout>
    </>
  )
})
