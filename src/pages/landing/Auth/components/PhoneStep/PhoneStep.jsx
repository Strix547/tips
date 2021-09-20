import { FormProvider, useForm } from 'react-hook-form'

import { PhoneField, Switch, Button } from 'ui'

import * as S from './PhoneStep.styled'

export const PhoneStep = ({ onPhoneSubmit }) => {
  const useFormProps = useForm()
  const { watch, handleSubmit } = useFormProps

  const { phone } = watch()

  const onSubmit = ({ phone, remember }) => {
    onPhoneSubmit({ phone, remember })
  }

  return (
    <S.PhoneStep onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...useFormProps}>
        <PhoneField
          name="phone"
          rules={{ required: true }}
          country="ru"
          placeholder="+7 (___) ___-__-__"
        />

        <Switch name="remember" label="Запомнить меня" />

        <Button type="submit" disabled={!phone || phone?.length < 11}>
          Продолжить
        </Button>
      </FormProvider>
    </S.PhoneStep>
  )
}
