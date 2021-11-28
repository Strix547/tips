import { useTranslation } from 'next-i18next'

import { FormField } from 'ui'

export const EmailField = (props) => {
  const { t } = useTranslation('common')

  return (
    <FormField
      rules={{
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Enter a valid e-mail address'
        }
      }}
      type="email"
      name="email"
      label={t('email')}
      placeholder={t('write-email')}
      required
      {...props}
    />
  )
}
