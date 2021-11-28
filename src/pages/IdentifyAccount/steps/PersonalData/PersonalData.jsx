import { useTranslation } from 'next-i18next'

import { FormField, EmailField, BirthDateAdultValid } from 'ui'

import * as S from './PersonalData.styled'

export const PersonalDataStep = () => {
  const { t } = useTranslation('common')

  return (
    <S.PersonalDataStep>
      <S.FieldsLabel>{t('personal-info')}:</S.FieldsLabel>

      <FormField name="firstName" label={t('name')} placeholder={t('write-name')} required />

      <FormField name="lastName" label={t('last-name')} placeholder={t('enter-lastname')} required />

      <BirthDateAdultValid />

      <EmailField />
    </S.PersonalDataStep>
  )
}
