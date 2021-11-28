import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { FormField, Button, EmailField, BirthDateAdultValid } from 'ui'

import { userStore } from 'store'
import { transformDateToLabel, transformDateLabelToIso } from 'utils'

import * as S from './PersonalData.styled'

import UserIcon from '@public/icons/user.svg'

export const PersonalDataPage = observer(() => {
  const { t } = useTranslation('common')
  const useFormProps = useForm()
  const { formState, reset, setError, getValues } = useFormProps

  const [avatar, setAvatar] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const { isPersonalDataLoading, id: userId, personalData } = userStore
  const birthdateError = formState.errors?.birthDate

  useEffect(() => {
    if (!userId) return

    userStore.getPersonalData(userId)
  }, [userId])

  useEffect(() => {
    if (isPersonalDataLoading) return

    const { firstName, lastName, birthDate, email, address, postal } = personalData

    reset({
      firstName,
      lastName,
      birthDate: birthDate && transformDateToLabel(birthDate),
      email,
      address,
      postal
    })
  }, [personalData, isPersonalDataLoading])

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
    const { firstName, lastName, email, address, postal, birthDate } = getValues()

    if (!dateHaventPlaceholderSymbols(birthDate)) {
      setError('birthDate')
    }

    if (!dateMoreThanEighteen(birthDate)) {
      setError('birthDate', {
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
        birthDate: transformDateLabelToIso(birthDate),
        avatar
      })
    }
  }

  if (isPersonalDataLoading) {
    return (
      <>
        <Head>
          <title>{t('personal-information')}</title>
        </Head>

        <AccountLayout title={t('personal-information')}>
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
        <title>{t('personal-information')}</title>
      </Head>

      <AccountLayout title={t('personal-information')}>
        <S.Content>
          <FormProvider {...useFormProps}>
            <FormField name="firstName" label={t('First name')} placeholder={t('write-name')} />

            <FormField name="lastName" label={t('last-name')} placeholder={t('enter-lastname')} />

            <BirthDateAdultValid />

            <EmailField />

            <FormField name="address" label={t('address')} placeholder={t('enter-address')} />

            <FormField name="postal" label={t('zip-code')} placeholder={t('enter-zip-code')} />

            <S.AvatarField>
              <S.Label>{t('avatar')}</S.Label>

              <S.AvatarRow>
                {avatarPreview || personalData.avatar ? (
                  <Image
                    src={avatarPreview?.src || personalData.avatar}
                    width={90}
                    height={90}
                    alt="avatar"
                  />
                ) : (
                  <S.Avatar>
                    <UserIcon />
                  </S.Avatar>
                )}

                <S.AvatarUploadLabel for="avatar">
                  {t('upload')}
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

            <Button onClick={onEditData}>{t('save')}</Button>
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
})
