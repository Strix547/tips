import { FormProvider, useForm } from 'react-hook-form'

import { PhoneField, Switch, Button } from 'ui'

import * as S from './PhoneStep.styled'

export const PhoneStep = ({ onCodeSend }) => {
  const useFormProps = useForm()

  const { phone, remember } = useFormProps.watch()

  return (
    <S.PhoneStep>
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

        <Button
          type="submit"
          disabled={!phone || phone?.length < 11}
          onClick={() => onCodeSend({ phone, remember })}
        >
          Продолжить
        </Button>
      </FormProvider>
    </S.PhoneStep>
  )
}
