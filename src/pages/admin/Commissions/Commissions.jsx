import { FormProvider, useForm } from 'react-hook-form'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { FormField, Button } from 'ui'

import * as S from './Commissions.styled'

export const CommissionsPage = () => {
  const useFormProps = useForm()
  const { handleSubmit, formState } = useFormProps

  const fieldCommon = {
    rules: { pattern: { value: /^\d+$/, message: 'Required only number' } },
    InputProps: { endAdornment: '%' }
  }

  const onSaveComissions = (data) => {
    console.log(data)
  }

  const errorsEntries = Object.entries(formState.errors)
  const errorFirstMessage = errorsEntries.length ? errorsEntries[0][1].message : null

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

              <FormField
                name="agent"
                label="Агент"
                placeholder="Введите процент"
                {...fieldCommon}
              />

              <FormField
                name="loyalty"
                label="Программа лояльности"
                placeholder="Введите процент"
                {...fieldCommon}
              />

              <S.ErrorText>{errorFirstMessage}</S.ErrorText>
              <Button type="submit">Сохранить</Button>
            </S.Form>
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
}
