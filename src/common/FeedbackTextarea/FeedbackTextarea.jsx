import { useFormContext, Controller } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import * as S from './FeedbackTextarea.styled'

export const FeedbackTextarea = () => {
  const { t } = useTranslation('common')
  const { control, watch } = useFormContext()

  const lengthAvailable = 1000
  const commentLength = watch('comment')?.length

  return (
    <S.FeedbackTextarea>
      <S.Top>
        <S.Text>{t('leave-feedback')}</S.Text>
        <S.Text>
          {commentLength
            ? `${t('left')} ${lengthAvailable - commentLength} ${t('characters')}`
            : `${t('to')} ${lengthAvailable} ${t('characters')}`}
        </S.Text>
      </S.Top>

      <Controller
        control={control}
        name="comment"
        render={({ field: { value, onChange } }) => (
          <S.Textarea
            placeholder={t('your-comment')}
            value={value}
            onChange={(e) => {
              if (e.target.value.length > lengthAvailable) {
                return
              }

              onChange(e)
            }}
          />
        )}
      />
    </S.FeedbackTextarea>
  )
}
