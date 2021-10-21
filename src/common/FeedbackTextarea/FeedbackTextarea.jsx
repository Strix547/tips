import { useFormContext, Controller } from 'react-hook-form'

import * as S from './FeedbackTextarea.styled'

export const FeedbackTextarea = () => {
  const { control, watch } = useFormContext()

  const lengthAvailable = 1000
  const commentLength = watch('comment')?.length

  return (
    <S.FeedbackTextarea>
      <S.Top>
        <S.Text>Оставить отзыв</S.Text>
        <S.Text>
          {commentLength
            ? `Осталось ${lengthAvailable - commentLength} знаков`
            : `До ${lengthAvailable} знаков`}
        </S.Text>
      </S.Top>

      <Controller
        control={control}
        name="comment"
        render={({ field: { value, onChange } }) => (
          <S.Textarea
            placeholder="Ваш комментарий"
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
