import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { QrPaymentPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default QrPaymentPage
