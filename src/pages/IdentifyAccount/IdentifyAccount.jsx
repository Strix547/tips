import { FormProvider, useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

import { PersonalDataStep } from './steps'
import { Button, CircularProgress } from 'ui'

import { userStore, authStore } from 'store'
import { transformDateLabelToIso } from 'utils'

import { MEDIA_TABLET } from 'styles/media'
import * as S from './IdentifyAccount.styled'

import CommentRegulationIcon from '@public/img/landing/comment-regulation.svg'

export const IdentifyAccountPage = observer(() => {
  const { t } = useTranslation('common')

  const firstNameDefault =
    authStore.authData.firstName === 'undefined' ? '' : authStore.authData.firstName
  const emailDefault = authStore.authData.email === 'undefined' ? '' : authStore.authData.email

  const useFormProps = useForm({
    defaultValues: {
      firstName: firstNameDefault,
      email: emailDefault
    }
  })

  const isTablet = useMediaQuery({ maxWidth: MEDIA_TABLET })

  const { isIdentifyProcessing } = userStore

  const onPersonalDataSubmit = async ({ firstName, lastName, birthDate, email }) => {
    userStore.identifyAccount({
      userId: userStore.id,
      firstName,
      lastName,
      birthDate: transformDateLabelToIso(birthDate),
      email
    })
  }

  return (
    <>
      <Head>
        <title>{t('account-identification')}</title>
      </Head>

      <S.IdentifyAccountPage>
        <S.Left>
          <S.Content invisible={isIdentifyProcessing}>
            <S.Heading level={6}>{t('account-identification')}</S.Heading>

            <FormProvider {...useFormProps}>
              <S.Step>
                <PersonalDataStep />
              </S.Step>
            </FormProvider>

            <S.StepNav>
              <Button type="submit" onClick={useFormProps.handleSubmit(onPersonalDataSubmit)}>
                {t('logIn')}
              </Button>
            </S.StepNav>
          </S.Content>

          {isIdentifyProcessing && (
            <S.Progress>
              <CircularProgress size={80} />
            </S.Progress>
          )}
        </S.Left>

        {!isTablet && (
          <S.Right>
            <CommentRegulationIcon />
          </S.Right>
        )}
      </S.IdentifyAccountPage>
    </>
  )
})
