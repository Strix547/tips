import { FormProvider, useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'

import { AccountLayout } from 'layout'
import { PaymentCardOptionsPanelIndividual, RecipientCardPreview } from 'components'

import { userStore, qrCodesStore } from 'store'

import * as S from './IndividualCreate.styled'

export const QrIndividualCreatePage = observer(() => {
  const useFormProps = useForm({
    defaultValues: {
      name: '',
      preset1: 100,
      preset2: 250,
      preset3: 500,
      impression: false
    }
  })
  const { watch, getValues } = useFormProps

  const { preset1, preset2, preset3, impression } = watch()

  const createQr = () => {
    const { name, preset1, preset2, preset3, impression } = getValues()

    qrCodesStore.createIndividualQrCode({
      userId: userStore.id,
      name,
      amountPresets: [preset1, preset2, preset3],
      impression
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

            <RecipientCardPreview
              type="individual"
              firstName={userStore.personalData.firstName}
              lastName={userStore.personalData.lastName}
              amountPresets={[preset1, preset2, preset3]}
              impression={impression}
            />
          </FormProvider>
        </S.Content>
      </AccountLayout>
    </>
  )
})
