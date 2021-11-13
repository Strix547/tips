import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PaymentsOutgoingStatisticsPage } from 'pages'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default PaymentsOutgoingStatisticsPage
