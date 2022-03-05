import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import { FormField, PhoneField } from 'ui'
import { Button } from 'landing/new/ui'

import * as S from './Consultation.styled'

import CommentSVG from '@public/img/landing/new/icons/comment.svg'

export const Consultation = () => {
  const useFormProps = useForm()
  const { t } = useTranslation('common')

  return (
    <S.Consultation>
      <S.Wrapper>
        <S.Body>
          <S.Left>
            <S.Comment>
              <CommentSVG />
            </S.Comment>

            <S.LeftText>
              <S.Text tag="h5">{t('advise')}</S.Text>

              <S.Text>{t('leave-request-we-contact-you')}</S.Text>
            </S.LeftText>
          </S.Left>

          <FormProvider {...useFormProps}>
            <S.Form>
              <FormField name="name" placeholder={t('whats-your-name')} />
              <PhoneField name="phone" placeholder={t('your-phone')} />
              <Button>{t('get-advise')}</Button>
            </S.Form>
          </FormProvider>
        </S.Body>
      </S.Wrapper>
    </S.Consultation>
  )
}
