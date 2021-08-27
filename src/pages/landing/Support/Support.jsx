import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Radio } from '@material-ui/core'
import Link from 'next/link'

import { Header, Footer } from 'layout'
import { FormField, Button, FormControlLabel } from 'ui'

import { ROUTES } from 'core/routes'

import * as S from './Support.styled'

import ClipIcon from '@public/icons/clip.svg'
import GreenDotesSvg from '@public/img/landing/green-dotes.svg'
import LineSvg from '@public/img/landing/line.svg'

export const SupportPage = () => {
  const [letterTheme, setLetterTheme] = useState('complaint')
  const useFormProps = useForm()

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
    <>
      <Header />

      <S.Main>
        <S.Wrapper>
          <S.Heading level={1}>Служба поддержки</S.Heading>

          <S.Form>
            <S.Faq>
              <S.Text>Часто задаваемые вопросы</S.Text>
              <S.Text>
                Прочитать самые частые вопросы вы можете в{' '}
                <Link href={ROUTES.FAQ}>
                  <a>разделе FAQ</a>
                </Link>
              </S.Text>
            </S.Faq>

            <S.ThemeLabel>Выберите тему письма</S.ThemeLabel>

            <S.ThemeRadioGroup
              name="letterTheme"
              value={letterTheme}
              onChange={(_, value) => onLetterThemeChange(value)}
            >
              {letterThemeRadios}
            </S.ThemeRadioGroup>

            <FormProvider {...useFormProps}>
              <FormField name="theme" placeholder="Введите название темы" />

              <S.Textarea name="message" placeholder="Введите сообщение" />

              <S.Dropdown>
                <ClipIcon />
                <S.Text>Загрузите файл</S.Text>
              </S.Dropdown>

              <Button>Отправить сообщение</Button>
            </FormProvider>
          </S.Form>

          <S.Background>
            <GreenDotesSvg />
            <LineSvg />
            <GreenDotesSvg />
          </S.Background>
        </S.Wrapper>
      </S.Main>

      <Footer />
    </>
  )
}
