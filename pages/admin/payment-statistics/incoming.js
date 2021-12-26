import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PaymentsIncomingStatisticsPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['ADMIN']
    }
  }
}

export default PaymentsIncomingStatisticsPage
