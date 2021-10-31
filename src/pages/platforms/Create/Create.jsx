import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { Button } from 'ui'
import { PlatformFields } from 'components/Platforms'

import { platformsStore, userStore } from 'store'
import { PLATFORM_TYPES } from 'core/constants'

import * as S from './Create.styled'

export const PlatformCreatePage = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      platformType: PLATFORM_TYPES[0].value,
      incomePercentage: 50
    }
  })
  const { handleSubmit } = useFormProps

  const [incomePercentage, setIncomePercentage] = useState(50)

  const onCreatePlatform = ({
    name,
    address,
    platformType,
    platformTypeCustom,
    incomePercentage,
    bankAccount
  }) => {
    platformsStore.createPlatform({
      userId: userStore.id,
      name,
      address,
      type: platformType === 'OTHER' ? platformTypeCustom : platformType,
      incomePercentage,
      selectedBankAccountId: bankAccount
    })
  }

  return (
    <>
      <Head>
        <title>Создать площадку</title>
      </Head>

      <AccountLayout title="Создать площадку">
        <FormProvider {...useFormProps}>
          <S.Form onSubmit={handleSubmit(onCreatePlatform)}>
            <PlatformFields
              incomePercentage={incomePercentage}
              onIncomePercentageChange={setIncomePercentage}
            />

            <Button type="submit">Создать</Button>
          </S.Form>
        </FormProvider>
      </AccountLayout>
    </>
  )
})
