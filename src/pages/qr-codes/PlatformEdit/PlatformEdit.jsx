import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Skeleton from 'react-loading-skeleton'

import { AccountLayout } from 'layout'
import { PlatformPaymentCardOptionsPanel, RecipientCardPreview } from 'components'

import { qrCodesStore, platformsStore } from 'store'

import * as S from './PlatformEdit.styled'

export const QrPlatformEditPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const useFormProps = useForm()
  const { reset, watch, getValues } = useFormProps

  const [companyLogoFile, setCompanyLogoFile] = useState(null)
  const [companyImg, setCompanyLogoImg] = useState({ src: null })
  const platformId = router.query.id
  const { isQrCodeLoading, qrCode } = qrCodesStore
  const { isPlatformNameLoading, platformName } = platformsStore
  const { ratingSwitch, reviews, preset1, preset2, preset3, impressions, btnColor, bgColor } =
    watch()

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
      impressions: impression,
      ratingSwitch: rating,
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
    const { ratingSwitch, reviews, preset1, preset2, preset3, impressions, btnColor, bgColor } =
      getValues()

    qrCodesStore.changePlatformQrCode({
      platformId,
      rating: ratingSwitch,
      reviews,
      amountPresets: [preset1, preset2, preset3],
      impression: impressions,
      btnColor: btnColor.hex,
      bgColor: bgColor.hex,
      logo: companyLogoFile
    })
  }

  return (
    <>
      <Head>
        <title>{t('customizing-display-tipping-platform-page')}</title>
      </Head>

      <AccountLayout title={t('customizing-display-tipping-platform-page')}>
        <S.Content>
          {!isQrCodeLoading && !isPlatformNameLoading ? (
            <FormProvider {...useFormProps}>
              <PlatformPaymentCardOptionsPanel
                action={{ label: t('save-qr-code'), onClick: editQr }}
                btnDefaultColor={btnColor?.hex}
                bgDefaultColor={bgColor?.hex}
                companyLogo={companyImg}
                onLogoChange={uploadCompanyLogo}
              />

              <RecipientCardPreview
                type="platform"
                company={{ name: platformName, logo: companyImg.src }}
                firstName={t('first-name')}
                lastName={t('last-name')}
                rating={ratingSwitch}
                reviews={reviews}
                amountPresets={[preset1, preset2, preset3]}
                impression={impressions}
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
