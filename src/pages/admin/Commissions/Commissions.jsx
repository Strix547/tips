import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { FormField, Button } from 'ui'

import { adminStore } from 'store'

import * as S from './Commissions.styled'

export const CommissionsPage = observer(() => {
  const { t } = useTranslation('common')
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
        label={t('personal')}
        placeholder={t('enter-percentage')}
        {...fieldCommon}
      />

      <FormField
        name="business"
        label={t('business-account')}
        placeholder={t('enter-percentage')}
        {...fieldCommon}
      />

      <FormField
        name="agent"
        label={t('agent')}
        placeholder={t('enter-percentage')}
        {...fieldCommon}
      />

      <FormField
        name="loyalty"
        label={t('loyalty-program')}
        placeholder={t('enter-percentage')}
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
        <title>{t('commissions')}</title>
      </Head>

      <AccountLayout title={t('commissions')}>
        <S.Content>
          <S.Text>{t('commission-text')}</S.Text>

          <FormProvider {...useFormProps}>
            <S.Form onSubmit={handleSubmit(onSaveComissions)}>
              {fields}

              {errorFirstMessage && <S.ErrorText>{errorFirstMessage}</S.ErrorText>}
              <Button type="submit">{t('save')}</Button>
            </S.Form>
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
})
