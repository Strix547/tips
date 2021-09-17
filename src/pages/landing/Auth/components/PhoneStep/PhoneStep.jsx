import { FormProvider, useForm } from 'react-hook-form'

import { PhoneField, Switch, Button } from 'ui'

import * as S from './PhoneStep.styled'

export const PhoneStep = ({ onCodeSend }) => {
  const useFormProps = useForm()

  const phone = useFormProps.watch('phone')

  return (
    <S.PhoneStep onSubmit={useFormProps.handleSubmit(onCodeSend)}>
      <FormProvider {...useFormProps}>
        <PhoneField
          name="phone"
          rules={{ required: true }}
          country="ru"
          placeholder="+7 (___) ___-__-__"
          inputProps={{
            autoFocus: true
          }}
        />

        <Switch name="remember" label="Запомнить меня" />

        <Button type="submit" disabled={!phone || phone?.length < 11}>
          Продолжить
        </Button>
      </FormProvider>
    </S.PhoneStep>
  )
}
