import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { userStore, qrCodesStore } from 'store'

import * as S from './QrIndividualCreate.styled'

export const QrIndividualCreatePage = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      name: '',
      preset1: 100,
      preset2: 149,
      preset3: 299,
      impressions: false
    }
  })
  const { watch, getValues } = useFormProps

  const createQr = () => {
    const { name, preset1, preset2, preset3, impressions } = getValues()

    qrCodesStore.createQrCode({
      userId: userStore.id,
      name,
      amountPresets: [preset1, preset2, preset3],
      impressions
    })
  }

  return (
    <>
      <Head>
        <title>Создание QR-кода физ. лица</title>
      </Head>

      <AccountLayout title="Создать QR-код">
        <S.Content>
          <FormProvider {...useFormProps}>
            <PaymentCardOptionsPanelIndividual
              action={{ label: 'Создать QR-код', onClick: createQr }}
            />
          </FormProvider>

          <RecipientCardPreview
            type="individual"
            firstName={userStore.personalData.firstName}
            lastName={userStore.personalData.lastName}
            amountPresets={[watch('preset1'), watch('preset2'), watch('preset3')]}
            impressions={watch('impressions')}
          />
        </S.Content>
      </AccountLayout>
    </>
  )
})
