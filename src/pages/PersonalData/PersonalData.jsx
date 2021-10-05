import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import Image from 'next/image'

import { AccountLayout } from 'layout'
import { FormField, Button } from 'ui'

import { userStore } from 'store'
import { transformDateFromIso, transformDateToIso } from 'utils'

import * as S from './PersonalData.styled'

import UserIcon from '@public/icons/user.svg'

export const PersonalDataPage = observer(() => {
  const { isPersonalDataLoading, id: userId, personalData } = userStore
  const [avatar, setAvatar] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const useFormProps = useForm()

  const birthdateError = useFormProps.formState.errors?.birthDate

  useEffect(() => {
    if (!userId) return

    userStore.getPersonalData(userId)
  }, [userId])

  useEffect(() => {
    if (!isPersonalDataLoading) {
      const { firstName, lastName, birthDate, email, address, postal } = personalData

      const fieldsTemplate = [
        { label: 'firstName', value: firstName },
        { label: 'lastName', value: lastName },
        { label: 'birthDate', value: birthDate && transformDateFromIso(birthDate) },
        { label: 'email', value: email },
        { label: 'address', value: address },
        { label: 'postal', value: postal }
      ]

      fieldsTemplate.forEach(({ label, value }) => {
        useFormProps.setValue(label, value)
      })
    }
  }, [isPersonalDataLoading, personalData])

  const dateHaventPlaceholderSymbols = (date) => {
    const haventPlaceholderSymbol = date?.indexOf('_') === -1

    return haventPlaceholderSymbol
  }

  const dateMoreThanEighteen = (value) => {
    const haventPlaceholderSymbol = value?.indexOf('_') === -1

    if (!haventPlaceholderSymbol) {
      return false
    }

    const [d, m, y] = value.split('/')
    const date = new Date(parseInt(y, 10), parseInt(m - 1, 10), parseInt(d, 10))
    const eighteenYearsAgo = new Date(
      new Date().setTime(new Date().valueOf() - 18 * 365 * 24 * 60 * 60 * 1000)
    )
    const valueMoreThanEighteen = date.getTime() < eighteenYearsAgo.getTime()

    return valueMoreThanEighteen
  }

  const uploadAvatar = (file) => {
    setAvatar(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setAvatarPreview({ src: reader.result, name: file.name })
    })
  }

  const onEditData = () => {
    const { firstName, lastName, email, address, postal, birthDate } = useFormProps.getValues()

    if (!dateHaventPlaceholderSymbols(birthDate)) {
      useFormProps.setError('birthDate')
    }

    if (!dateMoreThanEighteen(birthDate)) {
      useFormProps.setError('birthDate', {
        type: 'moreThanEighteen',
        message: 'You must be at least 18 years old'
      })
    }

    if (dateHaventPlaceholderSymbols(birthDate) && dateMoreThanEighteen(birthDate)) {
      userStore.changePersonalData({
        userId,
        firstName,
        lastName,
        email,
        address,
        postalCode: postal,
        birthDate: transformDateToIso(birthDate),
        avatar
      })
    }
  }

  if (isPersonalDataLoading) {
    return (
      <>
        <Head>
          <title>Персональные данные</title>
        </Head>

        <AccountLayout title="Персональные данные">
          <S.Content>
            <Skeleton count={7} height={88} />
          </S.Content>
        </AccountLayout>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Персональные данные</title>
      </Head>

      <AccountLayout title="Персональные данные">
        <S.Content>
          <FormProvider {...useFormProps}>
            <FormField name="firstName" label="Имя" placeholder="Введите имя" />

            <FormField name="lastName" label="Фамилия" placeholder="Введите фамилию" />

            <FormField
              name="birthDate"
              label="Дата рождения"
              placeholder="dd/mm/yyyy"
              MaskProps={{ mask: '99/99/9999' }}
            />

            <FormField type="email" name="email" label="E-mail" placeholder="Введите e-mail" />

            <FormField name="address" label="Адрес" placeholder="Введите адрес" />

            <FormField name="postal" label="Индекс" placeholder="Введите почтовый индекс" />

            <S.AvatarField>
              <S.Label>Аватар</S.Label>

              <S.AvatarRow>
                {avatarPreview || personalData.avatar ? (
                  <Image
                    src={avatarPreview?.src || personalData.avatar}
                    width={90}
                    height={90}
                    alt="avatar"
                    unoptimized
                  />
                ) : (
                  <S.Avatar>
                    <UserIcon />
                  </S.Avatar>
                )}

                <S.AvatarUploadLabel for="avatar">
                  Загрузить
                  <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={({ target }) => uploadAvatar(target.files[0])}
                  />
                </S.AvatarUploadLabel>
              </S.AvatarRow>
            </S.AvatarField>

            {birthdateError?.type === 'moreThanEighteen' && (
              <S.ErrorText>{birthdateError?.message}</S.ErrorText>
            )}

            <Button onClick={onEditData}>Сохранить</Button>
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
})
