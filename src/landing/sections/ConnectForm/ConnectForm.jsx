import { FormProvider, useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { Section } from 'landing/components'
import { FormField, Checkbox, PhoneField, Button, EmailField } from 'ui'

import { ROUTE_NAMES } from 'core/routes'
import { authStore } from 'store'

import * as S from './ConnectForm.styled'

import GreenDotesSvg from '@public/img/landing/green-dotes.svg'

export const ConnectFormSection = () => {
  const router = useRouter()
  const useFormProps = useForm()
  const { t } = useTranslation('common')
  const { handleSubmit } = useFormProps

  const toCodeStepWithAuthData = async ({ firstName, email, phone }) => {
    await authStore.sendCode(phone)
    authStore.setAuthData({ firstName, email, phone })
    authStore.setStep('code')
    router.push(ROUTE_NAMES.AUTH)
  }

  return (
    <Section title={[t('fill-form'), t('to-connect-business-to-site')]} styles={S.sectionStyles}>
      <S.Content>
        <S.Subtitle>{t('manager-contact-you')}</S.Subtitle>

        <S.FormContainer>
          <S.Form onSubmit={handleSubmit(toCodeStepWithAuthData)}>
            <FormProvider {...useFormProps}>
              <FormField
                name="firstName"
                label={t('name')}
                placeholder={t('write-name')}
                required
              />

              <PhoneField />

              <EmailField />

              <Checkbox rules={{ required: true }} label={t('use-personal-data-agree')} required />

              <Checkbox rules={{ required: true }} label={t('news-agree')} required />

              <Button type="submit">{t('my-business-connect')}</Button>
            </FormProvider>
          </S.Form>

          <S.FormBottom>
            <S.Text>
              {t('you-physical-person-receive-tips')} <br />
              <Link href={ROUTE_NAMES.AUTH} prefetch={false}>
                <a>{t('register')}</a>
              </Link>{' '}
              {t('in-our-service')}
            </S.Text>
          </S.FormBottom>
        </S.FormContainer>

        <S.Background>
          <GreenDotesSvg />
          <GreenDotesSvg />
        </S.Background>
      </S.Content>
    </Section>
  )
}
