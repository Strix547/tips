import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'
import Link from 'next/link'

import { FormField, Button, FormControlLabel, Dropzone } from 'ui'

import { ROUTES } from 'core/routes'

import * as S from './SupportForm.styled'

import ClipIcon from '@public/icons/clip.svg'

export const SupportForm = () => {
  const useFormProps = useForm()
  const [letterTheme, setLetterTheme] = useState('complaint')
  const [file, setFile] = useState(null)

  const letterThemes = [
    { label: 'Жалоба', value: 'complaint' },
    { label: 'Комментарий', value: 'comment' },
    { label: 'Отзыв', value: 'feedback' },
    { label: 'Вопрос', value: 'question' },
    { label: 'Предложения по сайту', value: 'improvement' },
    { label: 'Ошибка на сайте', value: 'error' },
    { label: 'Другое', value: 'other' }
  ]

  const onLetterThemeChange = (value) => {
    setLetterTheme(value)
  }

  const letterThemeRadios = letterThemes.map(({ label, value }) => {
    return (
      <FormControlLabel
        key={value}
        value={value}
        label={<S.ThemeRadio active={letterTheme === value}>{label}</S.ThemeRadio>}
        control={<Radio />}
      />
    )
  })

  return (
    <S.SupportForm>
      <S.Faq>
        <S.Text>Часто задаваемые вопросы</S.Text>
        <S.Text>
          Прочитать самые частые вопросы вы можете в{' '}
          <Link href={ROUTES.FAQ}>
            <a>разделе FAQ</a>
          </Link>
        </S.Text>
      </S.Faq>

      <S.ThemeRow>
        <S.Label>Выберите тему письма</S.Label>

        <S.ThemeRadioGroup
          name="letterTheme"
          value={letterTheme}
          onChange={(_, value) => onLetterThemeChange(value)}
        >
          {letterThemeRadios}
        </S.ThemeRadioGroup>
      </S.ThemeRow>

      <FormProvider {...useFormProps}>
        <FormField name="theme" placeholder="Введите название темы" />

        <S.Textarea name="message" placeholder="Введите сообщение" />

        <Dropzone multiple={false} onFileChange={setFile}>
          <ClipIcon />
          <S.Text>{!file ? 'Загрузите файл' : file.name}</S.Text>
        </Dropzone>

        <Button>Отправить сообщение</Button>
      </FormProvider>
    </S.SupportForm>
  )
}
