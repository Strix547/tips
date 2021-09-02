import { useForm, FormProvider } from 'react-hook-form'

import { FormField, Switch, Button } from 'ui'

import * as S from './QrOptionsPanel.styled'

export const QrOptionsPanel = () => {
  const useFormProps = useForm()
  const currency = '₽'

  return (
    <S.QrOptionsPanel>
      <S.AmountPresetsRow>
        <S.Label>Предустановленные суммы чаевых</S.Label>

        <S.AmountPresetsFields>
          <FormProvider {...useFormProps}>
            <FormField name="preset1" InputProps={{ endAdornment: currency }} />
            <FormField name="preset2" InputProps={{ endAdornment: currency }} />
            <FormField name="preset3" InputProps={{ endAdornment: currency }} />
          </FormProvider>
        </S.AmountPresetsFields>
      </S.AmountPresetsRow>
    </S.QrOptionsPanel>
  )
}
