import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'

import { AccountLayout } from 'layout'
import { PlatformPaymentCardOptionsPanel, RecipientCardPreview } from 'components'

import { qrCodesStore, platformsStore } from 'store'

import * as S from './PlatformEdit.styled'

export const QrPlatformEditPage = observer(() => {
  const router = useRouter()
  const useFormProps = useForm()
  const { reset, watch, getValues } = useFormProps

  const [companyLogoFile, setCompanyLogoFile] = useState(null)
  const [companyImg, setCompanyLogoImg] = useState({ src: null })
  const platformId = router.query.id
  const { isQrCodeLoading, qrCode } = qrCodesStore
  const { isPlatformNameLoading, platformName } = platformsStore
  const { rating, reviews, preset1, preset2, preset3, impression, btnColor, bgColor } = watch()

  // load qr code
  useEffect(() => {
    if (platformId) {
      qrCodesStore.getPlatformQrCode(platformId)
      platformsStore.getPlatformName(platformId)
    }
  }, [platformId])

  // set default options
  useEffect(() => {
    if (isQrCodeLoading) return

    const { rating, reviews, amountPresets, impression, btnColor, bgColor, logo } = qrCode

    setCompanyLogoImg({ src: logo })

    reset({
      preset1: amountPresets[0],
      preset2: amountPresets[1],
      preset3: amountPresets[2],
      impression,
      rating,
      reviews,
      btnColor: { hex: btnColor },
      bgColor: { hex: bgColor }
    })
  }, [qrCode, isQrCodeLoading])

  const uploadCompanyLogo = (file) => {
    setCompanyLogoFile(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setCompanyLogoImg({ src: reader.result, name: file.name })
    })
  }

  const editQr = () => {
    const { rating, reviews, preset1, preset2, preset3, impression, btnColor, bgColor } =
      getValues()

    qrCodesStore.changePlatformQrCode({
      platformId,
      rating,
      reviews,
      amountPresets: [preset1, preset2, preset3],
      impression,
      btnColor: btnColor.hex,
      bgColor: bgColor.hex,
      logo: companyLogoFile
    })
  }

  return (
    <>
      <Head>
        <title>Редактирование QR-кода платформы</title>
      </Head>

      <AccountLayout title="Настройка отображения страницы получения чаевых площадки">
        <S.Content>
          {!isQrCodeLoading && !isPlatformNameLoading ? (
            <FormProvider {...useFormProps}>
              <PlatformPaymentCardOptionsPanel
                action={{ label: 'Сохранить QR-код', onClick: editQr }}
                companyLogo={companyImg}
                onLogoChange={uploadCompanyLogo}
              />

              <RecipientCardPreview
                type="platform"
                company={{ name: platformName, logo: companyImg.src }}
                firstName="Вася"
                lastName="Пупкин"
                rating={rating}
                reviews={reviews}
                amountPresets={[preset1, preset2, preset3]}
                impression={impression}
                btnColor={btnColor?.hex}
                bgColor={bgColor?.hex}
              />
            </FormProvider>
          ) : (
            <>
              <Skeleton height={698} />
              <Skeleton height={698} />
            </>
          )}
        </S.Content>
      </AccountLayout>
    </>
  )
})
