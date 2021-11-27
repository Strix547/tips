import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { QrPaymentPage } from 'pages'

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default QrPaymentPage
