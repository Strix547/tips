import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { FormField, Button } from 'ui'

import { adminStore } from 'store'

import * as S from './Commissions.styled'

export const CommissionsPage = observer(() => {
  const useFormProps = useForm()
  const { handleSubmit, formState, reset } = useFormProps

  const { commission, isCommissionLoading } = adminStore

  useEffect(() => {
    adminStore.getCommission()
  }, [])

  useEffect(() => {
    const { personal, business, agent, loyalty } = commission

    reset({
      personal,
      business,
      agent,
      loyalty
    })
  }, [commission, isCommissionLoading, reset])

  const fieldCommon = {
    rules: { pattern: { value: /^\d+$/, message: 'Required only number' } },
    InputProps: { endAdornment: '%' }
  }

  const onSaveComissions = ({ personal, business, agent, loyalty }) => {
    adminStore.changeCommission({
      personal: Number(personal),
      business: Number(business),
      agent: Number(agent),
      loyalty: Number(loyalty)
    })
  }

  const errorsEntries = Object.entries(formState.errors)
  const errorFirstMessage = errorsEntries.length ? errorsEntries[0][1].message : null

  const fields = !isCommissionLoading ? (
    <>
      <FormField
        name="personal"
        label="Пресональный"
        placeholder="Введите процент"
        {...fieldCommon}
      />

      <FormField
        name="business"
        label="Бизнес-аккаунт"
        placeholder="Введите процент"
        {...fieldCommon}
      />

      <FormField name="agent" label="Агент" placeholder="Введите процент" {...fieldCommon} />

      <FormField
        name="loyalty"
        label="Программа лояльности"
        placeholder="Введите процент"
        {...fieldCommon}
      />
    </>
  ) : (
    <S.Skeleton>
      <Skeleton count={4} height={88} />
    </S.Skeleton>
  )

  return (
    <>
      <Head>
        <title>Комиссии</title>
      </Head>

      <AccountLayout title="Комиссии">
        <S.Content>
          <S.Text>
            Раздел с указанием величины комиссии для персонального использования, бизнес-аккаунтов,
            агентской схемы и программы лояльности. Состоит из списка цифровых инпутов с указанием
            точного значения индекса комиссии.
          </S.Text>

          <FormProvider {...useFormProps}>
            <S.Form onSubmit={handleSubmit(onSaveComissions)}>
              {fields}

              {errorFirstMessage && <S.ErrorText>{errorFirstMessage}</S.ErrorText>}
              <Button type="submit">Сохранить</Button>
            </S.Form>
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
})
