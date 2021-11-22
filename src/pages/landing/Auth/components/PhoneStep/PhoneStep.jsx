import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import { PhoneField, Switch, Button } from 'ui'

import * as S from './PhoneStep.styled'

export const PhoneStep = ({ defaultPhone, onPhoneSubmit }) => {
  const { t } = useTranslation('common')

  const useFormProps = useForm({
    defaultValues: {
      phone: defaultPhone
    }
  })

  const { watch, handleSubmit } = useFormProps

  const phone = watch('phone')

  const onSubmit = ({ phone, remember }) => {
    onPhoneSubmit({ phone, remember })
  }

  return (
    <S.PhoneStep onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...useFormProps}>
        <PhoneField />

        <Switch name="remember" label={t('remember-me')} />

        <Button type="submit" disabled={!phone || phone?.length < 11}>
          {t('proceed')}
        </Button>
      </FormProvider>
    </S.PhoneStep>
  )
}
