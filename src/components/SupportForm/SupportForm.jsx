import { useState } from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { Radio } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import {
  FormField,
  Button,
  FormControlLabel,
  RadioGroup,
  Dropzone,
  CircularProgress,
  PhoneField,
  EmailField
} from 'ui'

import { ROUTE_NAMES } from 'core/routes'
import { userStore, authStore, supportStore } from 'store'

import * as S from './SupportForm.styled'

import ClipIcon from '@public/icons/clip.svg'

export const SupportForm = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      letterTheme: 'complaint'
    }
  })
  const { watch, handleSubmit, control, reset, setValue } = useFormProps

  const [files, setFiles] = useState([])
  const letterTheme = watch('letterTheme')

  const letterThemes = [
    { label: 'Жалоба', value: 'complaint' },
    { label: 'Комментарий', value: 'comment' },
    { label: 'Отзыв', value: 'feedback' },
    { label: 'Вопрос', value: 'question' },
    { label: 'Предложения по сайту', value: 'improvement' },
    { label: 'Ошибка на сайте', value: 'error' },
    { label: 'Другое', value: 'other' }
  ]

  const getFileNamesString = (files) => {
    return files.map(({ name }) => <span key={name}>{name}</span>)
  }

  const onFormSubmit = async ({ firstName, phone, email, letterTheme, theme, message }) => {
    await supportStore.sendMessageToSupport({
      firstName,
      phone,
      email,
      theme: letterTheme === 'other' ? theme : letterTheme,
      message,
      files
    })

    authStore.setAuthData({ firstName, phone, email })

    reset()
    setValue('message', '')
    setFiles([])
  }

  const guestFields = (
    <>
      <FormField name="firstName" label="Имя" placeholder="Введите Ваше имя" required />

      <PhoneField />

      <EmailField />
    </>
  )

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
    <S.SupportForm onSubmit={handleSubmit(onFormSubmit)}>
      <S.Faq>
        <S.Text>Часто задаваемые вопросы</S.Text>
        <S.Text>
          Прочитать самые частые вопросы вы можете в{' '}
          <Link href={ROUTE_NAMES.FAQ}>
            <a>разделе FAQ</a>
          </Link>
        </S.Text>
      </S.Faq>

      {!supportStore.isMessageSending ? (
        <FormProvider {...useFormProps}>
          {!userStore.id ? guestFields : null}

          <S.ThemeRow>
            <S.Label>Выберите тему письма</S.Label>

            <RadioGroup name="letterTheme">{letterThemeRadios}</RadioGroup>
          </S.ThemeRow>

          {letterTheme === 'other' && (
            <FormField name="theme" placeholder="Введите название темы" />
          )}

          <Controller
            control={control}
            name="message"
            render={({ field: { value, onChange } }) => (
              <S.Textarea value={value} onChange={onChange} placeholder="Введите сообщение" />
            )}
          />

          <Dropzone
            maxFiles={3}
            accept={[
              'image/jpeg',
              'image/png',
              'application/vnd.ms-excel',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              'application/docx',
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            ]}
            onFileChange={(file) =>
              files.length === 3 ? setFiles([...files.slice(1), file]) : setFiles([...files, file])
            }
          >
            <ClipIcon />
            <S.Text>{!files.length ? 'Загрузите файл' : getFileNamesString(files)}</S.Text>
          </Dropzone>

          <Button type="submit">Отправить сообщение</Button>
        </FormProvider>
      ) : (
        <S.LoadingContainer big={!userStore.id}>
          <CircularProgress size={80} />
        </S.LoadingContainer>
      )}
    </S.SupportForm>
  )
})
